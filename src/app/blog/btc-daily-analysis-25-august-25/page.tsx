'use client';

export default function BTCDailyAnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              BTC Daily Analysis
            </h1>
            <p className="text-gray-400 text-sm">August 25, 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            
            {/* Weekly Timeframe Analysis */}
            <section>
              <div className="w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2Fd2b915d163b7443ea26e83bb3a739882"
                  alt="BTC Weekly Chart Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Weekly Timeframe Analysis</h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <div>
                    <h3 className="text-white font-medium mb-2">Balanced Price Action Last Week</h3>
                    <p>The previous week's trading showed a balanced market, meaning the price moved within a defined range without a strong directional bias. Buyers and sellers were in equilibrium, leading to consolidation rather than a breakout. This often sets the stage for potential volatility if the range is breached.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">CME Gap at Approximately 11,600</h3>
                    <p>There's an unfilled price gap on the CME (Chicago Mercantile Exchange) Bitcoin futures chart around the 11,600 level. Gaps occur when there's a discontinuity in price between trading sessions (e.g., due to weekend closures on CME, while crypto trades 24/7). This gap is highlighted in the chart and could act as a magnet for price, drawing it back to fill the void.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">Two Unfilled Naked Points of Control (NPOCs) Above Current Price</h3>
                    <p>NPOCs refer to "Naked Points of Control" in volume profile analysis—these are high-volume nodes (levels where the most trading occurred in past sessions) that haven't been revisited or "filled" by price yet. There are two such levels above the current price (marked with red X's in the chart), which could serve as resistance or targets if price moves upward. Unfilled NPOCs often attract price as markets seek to test or fill these high-volume areas.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Lower Timeframe Analysis */}
            <section>
              <div className="w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2Fb75c9a1c8ac943fdb5bc3790fd2a521a"
                  alt="BTC Lower Timeframe Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Lower Timeframe Analysis</h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <div>
                    <h3 className="text-white font-medium mb-2">4-Day Balance Within the Value Area (VA)</h3>
                    <p>Over the last four days, price has been balancing (consolidating) within the Value Area, which is the range where approximately 70% of the trading volume occurred in a given session (bounded by Value Area High (VAH) and Value Area Low (VAL), labeled in the chart). This indicates indecision and a lack of strong conviction from either buyers or sellers in the short term.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">Double Distribution Profile from Yesterday</h3>
                    <p>Yesterday's trading session formed a "double distribution" in the volume profile, meaning there were two distinct areas of high-volume trading separated by a low-volume node (visible as two peaks in the profile). This often signals a potential shift or indecision, where price could break out from one distribution to the other.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Trading Setup and Bias */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Trading Setup and Bias</h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <div>
                  <h3 className="text-white font-medium mb-2">No Viable Long Setup; Upside Limited to Bounces</h3>
                  <p>There isn't a clear setup for entering long positions (betting on price going up) based on the current structure. Any upward movement is likely to be short-lived—a mere "bounce" off support rather than the start of a sustained rally. This suggests caution for bullish traders, as the overall momentum favors sellers.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">Weak Auction Below VAL; Sellers in Control Below Single Prints (SP)</h3>
                  <p>If price drops below the Value Area Low (VAL), it enters a "weak auction" zone, where trading becomes imbalanced and sellers dominate. "Single Prints" (SP) refer to price levels with very low volume (single ticks or thin profile areas), which act as weak support/resistance. Below these, sellers maintain control, increasing the likelihood of further downside.</p>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">CME Gap Fills Often Occur on Monday US Open</h3>
                  <p>Historically, unfilled gaps on the CME Bitcoin futures chart tend to get filled during the US market open on Mondays. This is because CME trading resumes after the weekend, aligning with global liquidity, and price often gravitates toward these gaps early in the session. Given the current setup, watch for potential downside movement to fill the 11,600 gap around that time.</p>
                </div>
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
