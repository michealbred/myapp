export default function BTCDailyAnalysis29Aug2025Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">BTC Daily Analysis</h1>
            <p className="text-gray-400 text-sm">August 29, 2025</p>
          </div>

          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F7917b463eee64132b888a11c060f0ff7?format=webp&width=1000"
                alt="BTC chart: value areas with downside targets"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-80 object-contain rounded-lg border border-white/10"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F8fe6db36f4454f4fb1b9b524f1f507df?format=webp&width=1000"
                alt="BTC chart: sequential bearish phases toward POC"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-80 object-contain rounded-lg border border-white/10"
              />
            </div>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            {/* Intro */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">BTC Daily Analysis: 29 August 2025</h2>
              <p>
                Welcome back to our daily Bitcoin breakdown. As of August 29, 2025, BTC continues to exhibit bearish tendencies in a volatile market, with recent rejection at key levels signaling potential further downside. We'll recap the charts: a 1-hour view with green profile lines and downside targets, and a 15-minute chart showing sequential bearish moves marked by red arrows. The key takeaway? Weekly price tested last week's VAL and was rejected, now eyeing lower POI tests. On LTF, price remains under SP, with bears dominating for four days. If no lower push in 2-3 days, upper SP could become a bullish target. Given the setup, a short position looks appealing, with potential for 10–20% downside or more if momentum persists.
              </p>
            </section>

            {/* Weekly */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Weekly Rejection and Lower POI Await</h2>
              <p>
                Bitcoin's weekly action saw a test of last week's VAL (around 11,732), met with strong rejection, pushing prices down and reinforcing bearish control. This sets up a wait for lower POIs, such as prior lows or gaps near 10,900–11,000. Macro pressures like regulatory news and economic data are adding to the downside bias. A break below could accelerate losses, targeting 10–20% lower from current levels (~11,390), or around 9,100–10,250, if sellers maintain grip.
              </p>
            </section>

            {/* LTF */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">LTF: Bears Firmly in Charge Under SP</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resistance at upper VAL/VAH (11,732–11,763).</li>
                <li>Downside arrow to VPOC at 11,390.</li>
                <li>Support clusters at 11,147–11,479 remain vulnerable.</li>
                <li>Volume and order flow continue to favor sellers; bullish responses remain weak.</li>
              </ul>
              <p className="mt-3">
                The bearish sequence on intraday charts shows breakdown, retest, acceleration, and a final impulse move toward session POC—consistent with a supply-controlled environment.
              </p>
            </section>

            {/* Outlook */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Outlook: Ticking Clock for Bears, Short Potential</h2>
              <p>
                Bears have 2–3 days to drive lower; failure could flip upper SP into targets for a rebound, possibly squeezing shorts toward weekly highs. However, if POIs break, expect 10–20% or more downside—short opportunities with tight stops above SP. Watch RSI divergence or volume shifts for reversals.
              </p>
            </section>

            {/* Key Levels Table */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-3">Key Levels Summary</h3>
              <div className="overflow-x-auto bg-white/5 rounded-lg border border-white/10">
                <table className="min-w-full text-sm">
                  <thead className="bg-white/10 text-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Period</th>
                      <th className="px-4 py-2 text-left">Key Level</th>
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-gray-300">
                    <tr>
                      <td className="px-4 py-2">Weekly</td>
                      <td className="px-4 py-2">11,732</td>
                      <td className="px-4 py-2">VAL</td>
                      <td className="px-4 py-2">Rejected</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Weekly</td>
                      <td className="px-4 py-2">~10,900</td>
                      <td className="px-4 py-2">POI</td>
                      <td className="px-4 py-2">Lower target</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">1H</td>
                      <td className="px-4 py-2">11,390</td>
                      <td className="px-4 py-2">VPOC</td>
                      <td className="px-4 py-2">Current focus</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">LTF</td>
                      <td className="px-4 py-2">11,147</td>
                      <td className="px-4 py-2">SP Low</td>
                      <td className="px-4 py-2">Support test</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                This analysis is for educational purposes only and should not be considered financial advice. Trading involves substantial risk and may result in significant losses. Always conduct your own research and consider your risk tolerance before making trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
