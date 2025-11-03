export default function BTCCMEMondayPlaybookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Analysis of Monday Playbook in BTC CME Futures</h1>
            <p className="text-gray-400 text-sm">August 29, 2025</p>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Analysis of Monday Playbook in BTC CME Futures</h2>
              <p>
                The Monday Playbook involves weekend gaps in BTC CME futures causing Monday volatility: sweeps of highs (short setups on rejections) and lows (long setups on reversals), reverting to 0.5 equilibrium. In the chart (Aug 26–Sep 2, 2025), low sweep at 109,590 triggered longs to high at 113,800 (short trigger), consolidating at 111,695 amid potential unfilled gap to 117,600. 60% bullish for fills, but macro risks add bearish pressure.
              </p>
            </section>

            <div className="my-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F5682121579f2446695b6aa261906d589?format=webp&width=1200"
                alt="BTC CME Monday playbook chart"
                loading="lazy"
                decoding="async"
                className="mx-auto w-full max-w-5xl h-auto max-h-[560px] object-contain rounded-lg border border-white/10"
              />
            </div>

            <section>
              <h3 className="text-lg font-semibold text-white mb-3">Phases and Setups</h3>
              <div className="overflow-x-auto bg-white/5 rounded-lg border border-white/10">
                <table className="min-w-full text-sm">
                  <thead className="bg-white/10 text-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Phase</th>
                      <th className="px-4 py-2 text-left">Key Levels</th>
                      <th className="px-4 py-2 text-left">Trade Setup</th>
                      <th className="px-4 py-2 text-left">Analysis / Implications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-gray-300">
                    <tr>
                      <td className="px-4 py-2 font-medium">Sweep of Monday Low</td>
                      <td className="px-4 py-2">109,590 (chart low); confluence 108,800–109,000</td>
                      <td className="px-4 py-2">Long on reversal; targets 111,695 (0.5), 113,800 (high); stop &lt; 108,800</td>
                      <td className="px-4 py-2">Liquidity hunt traps bears; if no reclaim, risk deeper drop to 106,000–105,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">Sweep of Monday High</td>
                      <td className="px-4 py-2">113,800 (chart high); imbalance 113,770–115,500</td>
                      <td className="px-4 py-2">Short on rejection; targets 111,695 (0.5), 110,000; stop &gt; 114,500</td>
                      <td className="px-4 py-2">Stops run before reversion; break above may fill gap to 117,600</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-medium">0.5 Equilibrium Reversion</td>
                      <td className="px-4 py-2">111,695 midpoint / Fib 0.5 of range</td>
                      <td className="px-4 py-2">Neutral management zone; bias long above, short below</td>
                      <td className="px-4 py-2">Acts as magnet post‑sweeps; supports mean‑reversion strategies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Analysis</h3>
              <p>
                In 2025 post‑halving, gaps often draw price for fills after sweeps. Low sweeps enable longs toward highs/monthly opens; high sweeps favor shorts back to supports. 0.5 equilibrium tags frequently precede the next trend leg. Watch New York sessions for continuation or reversals and monitor funding, OI, and delta for confirmation.
              </p>
            </section>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">Not financial advice.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
