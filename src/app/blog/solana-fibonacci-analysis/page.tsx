export default function SolanaFibonacciAnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Solana's Consistent Respect for the Fibonacci Golden Pocket (0.618–0.65)</h1>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p>
                In cryptocurrency trading, Fibonacci retracement levels serve as critical tools for identifying potential support and resistance zones. The golden pocket, spanning the 0.618 (61.8%) to 0.65 (65%) levels derived from the golden ratio (1.618), frequently acts as a reversal zone in volatile assets like Solana (SOL). This analysis examines SOLUSDT perpetual contract charts (4-hour timeframe) from TradingView, demonstrating how SOL's price repeatedly respects this pocket by bouncing off it during pullbacks, preventing deeper corrections and supporting uptrends.
              </p>
            </section>

            <div className="my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F146cbf3bd3fd424eb8433725449252c9?format=webp&width=800"
                  alt="SOLUSDT 4h chart — long-term view highlighting 0.618 golden pocket"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-white/10 object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F3da8fd28a67a42d6bc425a6a314458c3?format=webp&width=800"
                  alt="SOLUSDT 4h chart — mid-term retracement into golden pocket"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-white/10 object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2Fca241ff47d3941e5abb52b2106380ce7?format=webp&width=800"
                  alt="SOLUSDT 4h chart — short-term reversal from golden pocket"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-white/10 object-contain md:col-span-2"
                />
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Fibonacci Golden Pocket Explained</h2>
              <p>
                Fibonacci retracements are applied to significant price swings, measuring retracement percentages from high to low. The golden pocket (0.618–0.65) represents a 61.8%–65% pullback, where market psychology often drives buying interest. "Respect" occurs when price approaches, touches, or wicks into this zone but rebounds, confirming its validity as support.
              </p>
              <p className="mt-3">
                The provided charts illustrate this pattern across various timeframes, with cyan lines marking key Fibonacci levels and white arrows highlighting reversals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Key Observations from the Charts</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Long-Term View (March–November):</strong> A major uptrend from ~$100 to ~$240 shows a retracement into the golden pocket (~$150). Price wicks down but reverses sharply, rallying back above $200.
                </li>
                <li>
                  <strong>Mid-Term Focus (June–November):</strong> From a low of ~$120 to a high of ~$220, the golden pocket at ~$154 provides precise support, leading to new highs near $206.
                </li>
                <li>
                  <strong>Short-Term Zoom (August–September):</strong> A swing from ~$140 to ~$210 retraces to ~$167, forming a clean reversal and subsequent rally.
                </li>
                <li>
                  <strong>Detailed View (Late August–Early September):</strong> Volatility from ~$180 to ~$212 sees support at ~$198, with a volume-driven bounce to $205+.
                </li>
              </ol>
              <p className="mt-3">In each instance, the golden pocket holds without sustained breaks, underscoring its reliability.</p>
            </section>

            <div className="my-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F8f8b731f6dff4b4d8f866ab5d5242218?format=webp&width=800"
                  alt="SOLUSDT 4h chart — late‑August reversal from golden pocket"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-white/10 object-contain"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2Fed49871f6a4d4ddb95fbb1bf4c7dce52?format=webp&width=800"
                  alt="SOLUSDT 4h chart — retest and bounce around 0.618–0.65 zone"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border border-white/10 object-contain"
                />
              </div>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Summary Table: Golden Pocket Interactions</h2>
              <div className="overflow-x-auto bg-white/5 rounded-lg border border-white/10">
                <table className="min-w-full text-sm">
                  <thead className="bg-white/10 text-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Chart</th>
                      <th className="px-4 py-2 text-left">Period</th>
                      <th className="px-4 py-2 text-left">Swing High/Low</th>
                      <th className="px-4 py-2 text-left">Pocket Level</th>
                      <th className="px-4 py-2 text-left">Bounce Price</th>
                      <th className="px-4 py-2 text-left">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-gray-300">
                    <tr>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Mar–Jul</td>
                      <td className="px-4 py-2">~240 / ~100</td>
                      <td className="px-4 py-2">~150</td>
                      <td className="px-4 py-2">~140–150</td>
                      <td className="px-4 py-2">Rally to 200+</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">Jul–Sep</td>
                      <td className="px-4 py-2">~200 / ~140</td>
                      <td className="px-4 py-2">~150</td>
                      <td className="px-4 py-2">~145</td>
                      <td className="px-4 py-2">Uptrend continuation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">Jun–Aug</td>
                      <td className="px-4 py-2">~220 / ~120</td>
                      <td className="px-4 py-2">~154</td>
                      <td className="px-4 py-2">~154</td>
                      <td className="px-4 py-2">New highs at 206</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">Aug–Sep</td>
                      <td className="px-4 py-2">~206 / ~150</td>
                      <td className="px-4 py-2">~167</td>
                      <td className="px-4 py-2">~165–170</td>
                      <td className="px-4 py-2">Upward push</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Aug–Sep</td>
                      <td className="px-4 py-2">~210 / ~140</td>
                      <td className="px-4 py-2">~167</td>
                      <td className="px-4 py-2">~167</td>
                      <td className="px-4 py-2">Rally to 210+</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">Sep (micro)</td>
                      <td className="px-4 py-2">~210 / ~170</td>
                      <td className="px-4 py-2">~164</td>
                      <td className="px-4 py-2">~164–170</td>
                      <td className="px-4 py-2">Continued uptrend</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">4</td>
                      <td className="px-4 py-2">Aug–Sep</td>
                      <td className="px-4 py-2">~212 / ~180</td>
                      <td className="px-4 py-2">~198</td>
                      <td className="px-4 py-2">~192–198</td>
                      <td className="px-4 py-2">Bounce to 205+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-2">Implications for Traders</h2>
              <p>
                This pattern highlights the golden pocket's role in SOL's price dynamics, offering potential long entry points with stops below the zone. Combine with volume and momentum indicators for confirmation. As Solana's ecosystem evolves, this level may continue to influence future movements, though external factors like Bitcoin correlations should be monitored.
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
