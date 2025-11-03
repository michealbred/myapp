'use client';

export default function JamesWynnMarketManipulationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-full mb-6 flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F01b7455e5ddd4ca98fec9b4f608465cb?format=webp&width=1200"
                alt="Crypto Trader James Wynn Liquidated for $16.14M"
                className="w-full max-w-2xl h-56 md:h-72 rounded-xl shadow-xl object-cover object-center ring-1 ring-white/10"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              James Wynn Market Manipulation
            </h1>
            <p className="text-gray-400 text-sm">Institutional behavior, stop-hunting patterns, and public trader risk</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Intro */}
            <section>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  James Wynn's tumultuous journey in the crypto trading world has once again captured the attention of the market, raising eyebrows about potential manipulation tactics targeting high-profile traders. Known for his early call on PEPE when its market cap was just $600k, which reportedly netted him gains of over 20,000x, Wynn has been a fixture in the volatile 2025 crypto landscape. However, his repeated high-leverage positions on platforms like Hyperliquid have made him a prime target for what appears to be coordinated stop-hunting. For instance, when Bitcoin dipped below $105k in June 2025, it triggered a massive liquidation of his $100M bet, showcasing how public on-chain data can be weaponized against traders. This isn't isolated; a specific wallet, 0x2258, has been documented profiting over $15M by systematically fading Wynn's longs and shorts throughout May and June 2025. Wynn himself has publicly lamented being "hunted" after a second $100M BTC liquidation that same month, hinting at deliberate market pressure from whales or bots exploiting his transparent positions.
                </p>
                <p>
                  The pattern extends beyond isolated incidents, with Wynn's frequent claims of referral rewards—such as $23k in a single week—suggesting possible self-referral schemes or wash trading to boost platform volume. His cycle of claiming these rewards, then diving into 10-40x leveraged bets on assets like ETH amid all-time highs in August 2025, often ends in swift liquidations that smell of liquidity traps. After suffering nine-figure losses, Wynn even deactivated his X account in July 2025, only to resurface with alternative wallets for more aggressive plays. This on-chain visibility in perpetual futures markets amplifies manipulation risks, as evidenced by his additional $2M+ losses across new addresses. In a market where transparency can backfire, Wynn's story serves as a cautionary tale of how fame and leverage can invite predatory tactics, potentially orchestrated to drain retail influencers.
                </p>
              </div>
            </section>

            {/* Table */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Key Events and References</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/20 bg-white/5 rounded-lg">
                  <thead>
                    <tr className="bg-white/10">
                      <th className="border border-white/20 p-3 text-left text-white font-medium">Event</th>
                      <th className="border border-white/20 p-3 text-left text-white font-medium">Details</th>
                      <th className="border border-white/20 p-3 text-left text-white font-medium">PnL</th>
                      <th className="border border-white/20 p-3 text-left text-white font-medium">Verification Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm">
                    <tr>
                      <td className="border border-white/20 p-3">PEPE long cascade liquidations</td>
                      <td className="border border-white/20 p-3">Account down to $30,890 after losses exceeding $1M</td>
                      <td className="border border-white/20 p-3"><span className="text-red-400 font-medium">- $1M+</span></td>
                      <td className="border border-white/20 p-3">
                        <a href="https://hyperdash.info/trader/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600/20 border border-blue-500/40 hover:bg-blue-600/30 hover:border-blue-400/60 text-blue-200 font-medium transition-colors" aria-label="Open in Hyperdash">Hyperdash</a>
                      </td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="border border-white/20 p-3">Claimed 19,206.72 USDC referral</td>
                      <td className="border border-white/20 p-3">Opened 25x ETH long, liquidation price $4,152.8</td>
                      <td className="border border-white/20 p-3"><span className="text-red-400 font-medium">Liquidated</span></td>
                      <td className="border border-white/20 p-3">
                        <a href="https://hypurrscan.io/address/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 hover:border-purple-400/60 text-purple-200 font-medium transition-colors" aria-label="Open in Hypurrscan">Hypurrscan</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3">ETH long partial liquidation</td>
                      <td className="border border-white/20 p-3">In 10 hours, left with 71.6 ETH ($300K), new liquidation price $4,113.1</td>
                      <td className="border border-white/20 p-3"><span className="text-red-400 font-medium">Liquidated</span></td>
                      <td className="border border-white/20 p-3">
                        <a href="https://hypurrscan.io/address/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 hover:border-purple-400/60 text-purple-200 font-medium transition-colors" aria-label="Open in Hypurrscan">Hypurrscan</a>
                      </td>
                    </tr>
                    <tr className="bg-white/5">
                      <td className="border border-white/20 p-3">Claimed 23,117 referral, multi-asset longs</td>
                      <td className="border border-white/20 p-3">Liquidated on PEPE, ETH, DOGE, left $5,952, loss $17,165</td>
                      <td className="border border-white/20 p-3"><span className="text-red-400 font-medium">- $17,165</span></td>
                      <td className="border border-white/20 p-3">
                        <a href="https://hypurrscan.io/address/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 hover:border-purple-400/60 text-purple-200 font-medium transition-colors" aria-label="Open in Hypurrscan">Hypurrscan</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 p-3">Final DOGE long bet</td>
                      <td className="border border-white/20 p-3">10x leverage on last funds, entry $0.21298, liquidation price $0.20989</td>
                      <td className="border border-white/20 p-3"><span className="text-red-400 font-medium">Liquidated</span></td>
                      <td className="border border-white/20 p-3">
                        <a href="https://hypurrscan.io/address/0x5078C2fBeA2b2aD61bc840Bc023E35Fce56BeDb6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-1.5 rounded-md bg-purple-600/20 border border-purple-500/40 hover:bg-purple-600/30 hover:border-purple-400/60 text-purple-200 font-medium transition-colors" aria-label="Open in Hypurrscan">Hypurrscan</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 text-center">
                This content is for educational purposes only and should not be considered financial advice. Trading involves substantial risk and may result in significant losses. Always do your own research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
