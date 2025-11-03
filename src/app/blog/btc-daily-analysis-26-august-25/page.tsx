'use client';

export default function BTCDailyAnalysis26Aug2025Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              BTC Daily Analysis
            </h1>
            <p className="text-gray-400 text-sm">August 26, 2025</p>
          </div>

          {/* Top Images */}
          <div className="mb-10">
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2F7b61d76e65f1441a8d3c05379e15c65e?format=webp&width=800"
                alt="BTC value area balance and breakdown"
                className="w-full h-auto object-contain rounded-lg border border-white/10"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2Fbd626cba21c24a64abca4541f79c012e?format=webp&width=800"
                alt="BTC value area tests and VPOC"
                className="w-full h-auto object-contain rounded-lg border border-white/10"
              />
            </div>
          </div>

          <div className="space-y-12">
            {/* Intro */}
            <section>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <h2 className="text-xl font-semibold text-white mb-2">Bitcoin (BTC/USDT) Technical Analysis</h2>
                <p>
                  As of August 26, 2025, BTC trades around $111,000, down ~1.4% in 24 hours amid a 10% pullback from its $124,128 ATH on August 14. This incorporates Volume Profile (VA, VAH/VAL, HVN, VPOC), auction theory, and charts from Binance Futures showing downside pressure in the $108,000–$114,000 range, with bearish LTF bias but emerging reversal signals like indicator divergence and VWAP resistance.
                </p>
              </div>
            </section>

            {/* Weekly Timeframe Overview */}
            <section>
              <div className="mt-6 text-gray-300 leading-relaxed">
                <h2 className="text-xl font-semibold text-white mb-3">Weekly Timeframe Overview</h2>
                <p>
                  Price tested a key HVN outside VA (~$114,000), retreating quickly with short auction time, signaling weak upside and favoring bearish continuation. This hints at distribution; rejection below HVN could target $104,000–$107,000. Broader sentiment aligns with macro pressures, but low volatility (~30%) and undervaluation vs. gold suggest potential mean reversion via ETF inflows.
                </p>
              </div>
            </section>

            {/* Lower Timeframe (LTF) Analysis */}
            <section>
              <div className="mt-6 text-gray-300 leading-relaxed">
                <h2 className="text-xl font-semibold text-white mb-3">Lower Timeframe (15m/1H/10m) Analysis</h2>
                <p>
                  Down auction persists with lower highs/lows, capped by VWAP (~$112,000–$114,000). Charts show consolidation in VA ($108,000–$114,000), V-bottom formations, and VAL tests (~$108,000–$110,000). Bullish divergences in CVD, Relative Volume (fading downs), Open Interest (stable, squeeze potential), and Volume Zone Oscillator suggest weakening sellers. VPOC (~$111,500) acts as pivot; volume declines on bounces but spikes on pushes down, implying a bear-flag context.
                </p>
              </div>
            </section>

            {/* Divergence & Momentum */}
            <section>
              <div className="grid gap-4 md:grid-cols-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2F60d00e9038d647768cda2aa9604e765a?format=webp&width=800"
                  alt="Momentum and channel structure"
                  className="w-full h-auto object-contain rounded-lg border border-white/10"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2Fd43c35fc473f4877bd47062265f2853c?format=webp&width=800"
                  alt="Footprint cluster development"
                  className="w-full h-auto object-contain rounded-lg border border-white/10"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2Fdd6ff6235531449c96ab633445c418a1?format=webp&width=800"
                  alt="Intraday schematic"
                  className="w-full h-auto object-contain rounded-lg border border-white/10"
                />
              </div>
              <div className="mt-6 text-gray-300 leading-relaxed">
                <h2 className="text-xl font-semibold text-white mb-3">Indicator Divergence</h2>
                <p>
                  Momentum shows developing bullish divergence: RSI/oscillators basing while price makes marginal lower lows within a down channel. Acceptance above session VWAP would bolster squeeze risk into VPOC/VAH.
                </p>
              </div>
            </section>

            {/* Footprint & Setup */}
            <section>
              <div className="mt-6 text-gray-300 leading-relaxed">
                <h2 className="text-xl font-semibold text-white mb-3">Intraday Setup and Broader Context</h2>
                <p>
                  Monitor VAL acceptance: Break below confirms downside to single-print targets ($104,800–$107,400); hold signals VA return, targeting VPOC/VAH for squeeze. Prefer London session entries over Asia lows. Risks include options-related volatility; trend bearish LTF, neutral weekly. External: watch ETH and stocks. Bias: Cautious bullish tilt on divergence resolution.
                </p>
              </div>
            </section>

            {/* Summary Table */}
            <section>
              <div className="overflow-x-auto bg-white/5 rounded-lg border border-white/10">
                <table className="min-w-full text-sm">
                  <thead className="bg-white/10 text-gray-200">
                    <tr>
                      <th className="px-4 py-2 text-left">Timeframe</th>
                      <th className="px-4 py-2 text-left">Key Levels</th>
                      <th className="px-4 py-2 text-left">Bias</th>
                      <th className="px-4 py-2 text-left">Targets/Scenarios</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-gray-300">
                    <tr>
                      <td className="px-4 py-2">Weekly</td>
                      <td className="px-4 py-2">HVN (~$114K), VA ($108K–$114K), VPOC (~$111.5K)</td>
                      <td className="px-4 py-2">Neutral-Bearish</td>
                      <td className="px-4 py-2">HVN Rejection → $104K–$107K; Break → $120K+</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">LTF (15m/1H/10m)</td>
                      <td className="px-4 py-2">VAL (~$108K), VWAP (~$112K), VAH (~$114K)</td>
                      <td className="px-4 py-2">Bearish with Divergence</td>
                      <td className="px-4 py-2">VAL Break → $105K SP; Bounce → $117K VAH</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Intraday</td>
                      <td className="px-4 py-2">Asia Low (~$109K), London Points</td>
                      <td className="px-4 py-2">Cautious Reversal</td>
                      <td className="px-4 py-2">Short VWAP Hold; Long on Higher Low/Divergence</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
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
