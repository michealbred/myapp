'use client';

export default function BTCDailyFibonacciAnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              BTC Daily Fibonacci Analysis
            </h1>
            <p className="text-gray-400 text-sm">August 25, 2025</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            
            {/* HTF Analysis */}
            <section>
              <div className="w-full mb-6">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2F1e74e1e4a9184e7989e6fc810ea24bcc"
                  alt="BTC HTF Chart Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Higher Timeframe (HTF) Analysis</h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>The 4-hour BTCUSDT Perpetual Contract chart (April–November 2025) displays an overall uptrend with recent pullbacks, current price at ~111,822 consolidating post-peak near 132,000. Key elements: multi-period volume profile, Fibonacci levels, and upward-trending anchored VWAP (yellow line).</p>

                  <p>Confluence zone at ~104,406 provides strong potential support:</p>

                  <div>
                    <h3 className="text-white font-medium mb-2">- vPOC:</h3>
                    <p>High-volume node at 104,406, acting as fair value magnet.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">- Anchored VWAP:</h3>
                    <p>Intersects at 104,406, offering dynamic trend support.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">- 25% Fibonacci retracement:</h3>
                    <p>Aligns at 104,406.3, marking shallow pullback target.</p>
                  </div>

                  <p>This robust zone (static/dynamic overlap) likely attracts buying on approach; break below targets lower Fibs (~100,000). Monitor volume/candles for reaction.</p>
                </div>
              </div>
            </section>

            {/* LTF Analysis */}
            <section>
              <div className="w-full mb-6">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2F3283da1a30424fdda0eb6dfa33a0bee6"
                  alt="BTC LTF Chart Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Short Timeframe (STF) Analysis: Fibonacci-Aligned TR Pocket</h2>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>The 4-hour BTCUSDT Perpetual Contract chart (July–October 2025) shows a short-term downtrend, with price at ~111,541.3 rejecting ~112,000. Key elements: implied volume profile, bearish candlesticks, and Fibonacci extensions anchored from ~111,870 (0%) downward.</p>

                  <p>Confluence zone at ~108,415 forms a Fibonacci-aligned TR pocket with potential for accelerated downside:</p>

                  <div>
                    <h3 className="text-white font-medium mb-2">- **TR Pocket as Fibonacci Extension**:</h3>
                    <p>Bounded by 0% Fib at 111,870.0 (upper edge) and -0.272 extension (~-25%) at 108,415.3 (lower target), creating a weak structural zone for swift traversal.</p>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-2">- **-25% Fibonacci Zone**:</h3>
                    <p>Approximated by -0.272 at 108,415.3, clustering with -0.3414 at 107,533.8 for high-confluence support and potential exhaustion.</p>
                  </div>

                  <p>Price probes pocket upper boundary; break below 111,500 targets zone with 2-3% drop. Bullish invalidation above 111,870. Monitor volume/reversals for resolution.</p>
                </div>
              </div>
            </section>

            {/* TR Pocket Analysis */}
            <section>
              <div className="w-full mb-6">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2Fe150283670fb496a8c0bcd0fe3cdc8b1"
                  alt="BTC TR Pocket Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">TR Pocket</h2>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>The 4-hour BTCUSDT Perpetual Contract chart (July–October 2025) shows a short-term downtrend, with price at ~111,541.3 rejecting ~112,000. Key elements: implied volume profile, bearish candlesticks, and Fibonacci extensions anchored from ~111,870 (0%) downward.</p>

                  <div>
                    <h3 className="text-white font-medium mb-2">TR Pocket Explanation:</h3>
                    <p>A Trading Range (TR) pocket is a low-volume, inefficient zone within a consolidation range, prone to rapid price traversal due to weak structure; here, it's Fibonacci-aligned for enhanced predictive value, bounded by 0% Fib (upper) and -0.272 extension (lower).</p>
                  </div>

                  <p>Lower TR pocket forms a confluence zone at ~108,415:</p>

                  <p>-0.272 Fib extension (~-25%) at 108,415.3 as primary downside target.<br/>
Clusters with -0.3414 at 107,533.8 for strong support potential.</p>

                  <p>Price tests upper boundary; break below 111,500 accelerates to zone (2-3% drop). Bullish invalidation above 111,870. Monitor volume/reversals.</p>
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
