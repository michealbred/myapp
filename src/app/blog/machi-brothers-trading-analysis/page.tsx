'use client';

export default function MachiBrothersTradingAnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Analysis of Machi Big Brother's Trading Activities
            </h1>
            <p className="text-gray-400 text-sm">August 2025 Trading Analysis</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            
            {/* Introduction */}
            <section>
              <div className="w-full mb-6 flex justify-center">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F984a425177d14c83a7d5bd1fcd34d098%2Fdeb1f1e431d8484d9a53757395d271c5?format=webp&width=800"
                  alt="Machi Brothers Trading Analysis"
                  className="w-3/5 md:w-1/2 h-auto object-contain rounded-lg"
                />
              </div>
              
              <div className="mt-6">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    This blog post provides an overview and timeline of Machi Big Brother's cryptocurrency trading based on provided data from August 2025. 
                    It includes key performance metrics, a detailed timeline table, and sample images (placeholders for trading charts).
                  </p>
                </div>
              </div>
            </section>

            {/* Overview */}
            <section>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Machi Big Brother (@machibigbrother) is a high-profile cryptocurrency trader known for aggressive, high-leverage perpetual futures trading 
                    on platforms like Hyperliquid. His wallet address (0x020ca66c30bec2c4fe3861a94e4db4a498a35872) shows activity primarily in leveraged longs 
                    on major assets like ETH and BTC, as well as meme or altcoins like HYPE, PUMP, and YZY.
                  </p>

                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-white font-medium mb-3">Key Performance Metrics</h3>
                    <ul className="space-y-2">
                      <li><strong>Peak Equity</strong>: ~$48.1M (August 13)</li>
                      <li><strong>Lowest Equity</strong>: ~$29.6M (August 19)</li>
                      <li><strong>Ending Equity (August 25)</strong>: ~$41.9M</li>
                      <li><strong>Net Realized Profits</strong>: Exceeded $33.8M by August 13</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline Table */}
            <section>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Timeline of Activity</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-white/20 bg-white/5 rounded-lg">
                    <thead>
                      <tr className="bg-white/10">
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Date</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Key Actions/Events</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Major Positions (Leverage, Size, Notional Value)</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Unrealized PnL</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Perp Equity</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">All-Time PnL (Combined)</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Notes</th>
                        <th className="border border-white/20 p-3 text-left text-white font-medium">Verify Hyperdash</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 text-sm">
                      <tr>
                        <td className="border border-white/20 p-3">Aug 12</td>
                        <td className="border border-white/20 p-3">Profits recover; holding longs.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 11,900 ETH, ~$51.1M)<br/>
                          - HYPE (n/a, 500,000 HYPE, ~$21.7M)<br/>
                          - PUMP (5x, 250M PUMP, ~$907.5K)
                        </td>
                        <td className="border border-white/20 p-3 text-green-400">+$2.0M (+30.8% ROE)</td>
                        <td className="border border-white/20 p-3">~$44.8M</td>
                        <td className="border border-white/20 p-3">~$30.4M</td>
                        <td className="border border-white/20 p-3">100% long bias; margin usage 14.7%; upward equity chart.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Aug 13</td>
                        <td className="border border-white/20 p-3">Closed all longs.</td>
                        <td className="border border-white/20 p-3">None (neutral bias).</td>
                        <td className="border border-white/20 p-3">$0</td>
                        <td className="border border-white/20 p-3 text-green-400">~$48.1M</td>
                        <td className="border border-white/20 p-3 text-green-400">&gt;$33.8M</td>
                        <td className="border border-white/20 p-3">Locked in gains; recent fill shows HYPE close at ~$43.5/entry. Equity peaks post-closure.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-white/20 p-3">Aug 15 (Early)</td>
                        <td className="border border-white/20 p-3">Re-entered/increased longs on ETH/BTC.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 21,900 ETH, ~$100M)<br/>
                          - BTC (40x, 50 BTC, ~$5.9M)
                        </td>
                        <td className="border border-white/20 p-3">n/a (initial opens)</td>
                        <td className="border border-white/20 p-3">n/a</td>
                        <td className="border border-white/20 p-3">&gt;$32M</td>
                        <td className="border border-white/20 p-3">Multiple incremental opens (e.g., 5 BTC lots at ~$118k prices); high leverage signals bullish bet.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Aug 15 (Later)</td>
                        <td className="border border-white/20 p-3">Market crash impacts positions.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, ~22,599 ETH, ~$99.8M)<br/>
                          - BTC (40x, 155 BTC, ~$18.1M)
                        </td>
                        <td className="border border-white/20 p-3 text-red-400">-$5.5M (-123% ROE)</td>
                        <td className="border border-white/20 p-3">~$34.9M</td>
                        <td className="border border-white/20 p-3 text-red-400">~-$5.9M (24H)</td>
                        <td className="border border-white/20 p-3">Losses from price drops (ETH ~$4,652 entry to $4,457 current); margin usage 12.8%; downward red chart.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-white/20 p-3">Aug 18</td>
                        <td className="border border-white/20 p-3">Market drop worsens losses; added/retained alts.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 23,100 ETH, ~$99.6M)<br/>
                          - BTC (40x, 170 BTC, ~$19.6M)<br/>
                          - HYPE (n/a, 105,000 HYPE, ~$4.6M)<br/>
                          - PUMP (5x, 200M PUMP, ~$649K)
                        </td>
                        <td className="border border-white/20 p-3 text-red-400">-$7.6M (-138% ROE)</td>
                        <td className="border border-white/20 p-3">~$32.3M</td>
                        <td className="border border-white/20 p-3">~$26.2M</td>
                        <td className="border border-white/20 p-3">Total exposure ~$124.5M; 100% long; funding negative (e.g., -$1.2k on ETH).</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Aug 19</td>
                        <td className="border border-white/20 p-3">Further drop; risk of wipeout highlighted.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 23,700 ETH, ~$99.9M)<br/>
                          - BTC (40x, 185 BTC, ~$21.2M)<br/>
                          - HYPE (n/a, 200,000 HYPE, ~$8.4M)<br/>
                          - PUMP (5x, 375M PUMP, ~$1.1M)
                        </td>
                        <td className="border border-white/20 p-3 text-red-400">-$9.9M (-178% ROE)</td>
                        <td className="border border-white/20 p-3 text-red-400">~$29.6M</td>
                        <td className="border border-white/20 p-3">~$23.5M</td>
                        <td className="border border-white/20 p-3">Margin usage 18.8%; compared to liquidated traders like JamesWynn; liquidation prices low (e.g., ETH $3,059).</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors">
                            Hyperdash
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-white/20 p-3">Aug 21</td>
                        <td className="border border-white/20 p-3">Opened new long on YZY.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 2,330 ETH-USD, ~$100.3M)<br/>
                          - BTC (40x, 220 BTC-USD, ~$25.0M)<br/>
                          - HYPE (10x, 315,000 HYPE-USD, ~$13.2M)<br/>
                          - PUMP (5x, 450M PUMP-USD, ~$1.3M)<br/>
                          - YZY (3x, 570,000 YZY-USD, ~$614K)
                        </td>
                        <td className="border border-white/20 p-3 text-red-400">~-$7.2M</td>
                        <td className="border border-white/20 p-3">~$31.1M</td>
                        <td className="border border-white/20 p-3">n/a</td>
                        <td className="border border-white/20 p-3">Lower leverage on YZY; total perps ~$140M; funding heavily negative (e.g., -$223k on ETH); spot/vault minimal.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hypurrscan.io/address/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-xs text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                            <span className="text-lg group-hover:animate-pulse">🔍</span>
                            <span className="font-medium">Hypurrscan</span>
                            <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white/5">
                        <td className="border border-white/20 p-3">Aug 25</td>
                        <td className="border border-white/20 p-3">Holding max leverage on majors; partial recovery.</td>
                        <td className="border border-white/20 p-3">
                          - ETH (25x, 15,300 ETH, ~$72.0M)<br/>
                          - BTC (40x, 155 BTC, ~$17.5M)
                        </td>
                        <td className="border border-white/20 p-3">+$158K on ETH / -$164K on BTC</td>
                        <td className="border border-white/20 p-3 text-yellow-400">~$41.9M</td>
                        <td className="border border-white/20 p-3">n/a</td>
                        <td className="border border-white/20 p-3">Reduced size from peaks; ETH PnL positive (entry $4,697 to $4,707); equity up ~$10M from lows, possibly from deposits or market rebound.</td>
                        <td className="border border-white/20 p-3">
                          <a href="https://hypurrscan.io/address/0x020ca66c30bec2c4fe3861a94e4db4a498a35872" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-xs text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                            <span className="text-lg group-hover:animate-pulse">🔍</span>
                            <span className="font-medium">Hypurrscan</span>
                            <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* External Reference */}
            <section>
              <div className="mt-6">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-gray-300">Verify trading data on:</span>
                    <a
                      href="https://hyperdash.info/trader/0x020ca66c30bec2c4fe3861a94e4db4a498a35872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 border border-blue-500/30 hover:border-blue-400/50 rounded-lg text-sm text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <span className="text-lg group-hover:animate-pulse">📊</span>
                      <span className="font-medium">Hyperdash Info</span>
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                    <a
                      href="https://hypurrscan.io/address/0x020ca66c30bec2c4fe3861a94e4db4a498a35872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-500/30 hover:border-purple-400/50 rounded-lg text-sm text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    >
                      <span className="text-lg group-hover:animate-pulse">🔍</span>
                      <span className="font-medium">Hypurrscan</span>
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                This analysis is for educational purposes only and should not be considered financial advice. Trading involves substantial risk and may result in significant losses. 
                The data presented is based on publicly available blockchain information and trading platform data. Always conduct your own research and consider consulting 
                with a qualified financial advisor before making trading decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
