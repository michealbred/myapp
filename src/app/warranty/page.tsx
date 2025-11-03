export const metadata = {
  title: "Warranty Terms - TRADERSPOOL",
  description:
    "Read TRADERSPOOL's Ironclad 30-Day Satisfaction Guarantee and warranty terms for all digital purchases.",
};

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-emerald-950 text-white">
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 mobile:px-6">
          {/* Header */}
          <div className="mb-8">
            <p className="text-emerald-300 text-xs font-semibold tracking-widest uppercase">Warranty</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
              Traderspool Warranty Terms
            </h1>
          </div>

          {/* Content Card with corner peel */}
          <div className="relative rounded-2xl border border-emerald-800/60 bg-emerald-900/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">

            <div className="p-6 md:p-8">
              <p className="text-emerald-50/90">
                At Traderspool, we stand firmly behind the quality and value of every digital product we offer—whether it's innovative software, exclusive online courses, customizable templates, or premium digital assets. Our commitment to your satisfaction is unwavering, and we're dedicated to delivering exceptional digital experiences that exceed your expectations.
              </p>

              <div className="mt-8 space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="inline-block h-5 w-1 rounded bg-emerald-500" />
                    Unmatched Quality Assurance
                  </h2>
                  <p className="mt-2 text-emerald-100/80">
                    Every digital product undergoes rigorous testing and expert curation to ensure seamless functionality, compatibility across devices (including desktop, mobile, and tablets), and immediate value upon download or access. We guarantee that your product will perform as described—or better.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="inline-block h-5 w-1 rounded bg-emerald-500" />
                    Risk-Free Trial Period
                  </h2>
                  <p className="mt-2 text-emerald-100/80">
                    If, for any reason, you're not absolutely thrilled with your purchase within 30 days, simply contact our dedicated support team. We'll process a full refund promptly, no questions asked. No hidden fees, no restocking charges—just pure satisfaction or your money back.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="inline-block h-5 w-1 rounded bg-emerald-500" />
                    Lifetime Access & Updates
                  </h2>
                  <p className="mt-2 text-emerald-100/80">
                    Once you buy, it's yours forever. Enjoy unlimited access to your digital files, plus free updates and enhancements as we evolve our offerings. We warranty against obsolescence by committing to compatibility with future standards (e.g., updates for new OS versions or formats).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="inline-block h-5 w-1 rounded bg-emerald-500" />
                    Secure & Instant Delivery
                  </h2>
                  <p className="mt-2 text-emerald-100/80">
                    Your digital product is delivered securely via encrypted download links within minutes of purchase. We guarantee 99.9% uptime for access platforms and protect your data with industry-leading security protocols (SSL-encrypted transactions and GDPR-compliant privacy).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <span className="inline-block h-5 w-1 rounded bg-emerald-500" />
                    Expert Support Guarantee
                  </h2>
                  <p className="mt-2 text-emerald-100/80">
                    Our team of specialists is available 24/7 via live chat, email, or phone to assist with installation, troubleshooting, or customization. If we can't resolve your issue within 48 hours, we will extend your guarantee by an additional 15 days as our apology.
                  </p>
                </section>
              </div>

              <div className="mt-10 border-t border-emerald-800/60 pt-4">
                <p className="text-xs text-emerald-300/80">Last Updated: September 18, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
