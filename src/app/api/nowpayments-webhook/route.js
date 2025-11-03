import crypto from 'crypto';

function sortObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return obj;
  const sorted = {};
  Object.keys(obj).sort().forEach(key => {
    sorted[key] = sortObject(obj[key]);
  });
  return sorted;
}

export async function POST(req) {
  const payload = await req.json();
  console.log('[NOWPayments] webhook received:', JSON.stringify(payload, null, 2));

  const sigHeader = req.headers.get('x-nowpayments-sig');
  const ipnSecret = process.env.NOWPAYMENTS_IPN_SECRET;

  if (ipnSecret) {
    try {
      const canonical = JSON.stringify(sortObject(payload));
      const hmac = crypto.createHmac('sha512', ipnSecret).update(canonical).digest('hex');
      if (!sigHeader || sigHeader !== hmac) {
        console.warn('[NOWPayments] signature mismatch', { sigHeader, hmac });
        return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 403 });
      }
      console.log('[NOWPayments] signature verified OK');
    } catch (err) {
      console.error('[NOWPayments] signature verification error', err);
      return new Response(JSON.stringify({ error: 'Signature verification failure' }), { status: 500 });
    }
  } else {
    console.warn('[NOWPayments] NOWPAYMENTS_IPN_SECRET not set. Skipping signature check.');
  }

  // --- Your order handling logic here ---
  // Example: if (payload.payment_status === 'finished') { markOrderAsPaid(payload.order_id) }
  console.log('[NOWPayments] processed event payment_status=', payload.payment_status, 'order_id=', payload.order_id);

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
