'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export default function ChannelShowcase() {
  return (
    <div className="py-4 border-t border-white/10">
      <div className="text-center mb-5">
        <h2 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-2">
          Premium Trading Channels
        </h2>
      </div>

      {/* Premium Access Notice */}
      <div className="bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-6 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5">
        <div className="text-center" style={{ height: '280px' }}>
          <div className="flex flex-col justify-center h-full">

            <h3 className="text-xl font-bold text-white mb-4">
              ⚡ Flash Sale - Unlock 120+ Premium Trading Channels
            </h3>

            {/* Trading Channel Logos at the top */}
            <div className="grid grid-cols-3 gap-3 mb-4 max-w-lg mx-auto">
              <div className="bg-white/10 border border-blue-300/20 rounded-lg p-3">
                <div className="mb-2 flex justify-center">
                  <Image src="https://cdn.builder.io/api/v1/image/assets%2Ff84d822ccb284d18a98ad1104d9bae70%2F89a570ad1e024f6b9286009d14bc4fee?format=webp&width=800" alt="Chart Champion" width={48} height={48} className="rounded object-contain" />
                </div>
                <div className="text-xs text-blue-200 font-medium">Chart Champion</div>
              </div>
              <div className="bg-white/10 border border-blue-300/20 rounded-lg p-3">
                <div className="mb-2 flex justify-center">
                  <Image src="https://cdn.builder.io/api/v1/image/assets%2Ff84d822ccb284d18a98ad1104d9bae70%2F72ae3e4101a646fe8dce617786349840?format=webp&width=800" alt="Walsh Wealth" width={48} height={48} className="rounded object-contain hover:scale-105 transition-transform duration-200" />
                </div>
                <div className="text-xs text-blue-200 font-medium">Walsh Wealth</div>
              </div>
              <div className="bg-white/10 border border-blue-300/20 rounded-lg p-3">
                <div className="mb-2 flex justify-center">
                  <Image src="https://cdn.builder.io/api/v1/image/assets%2Ff84d822ccb284d18a98ad1104d9bae70%2F43b78942ca5b44a78a24449e4d10efc8?format=webp&width=800" alt="Chroma Trading" width={48} height={48} className="rounded object-contain hover:scale-105 transition-transform duration-200" />
                </div>
                <div className="text-xs text-blue-200 font-medium">Chroma Trading</div>
              </div>
            </div>

            <div className="bg-black/20 border border-white/20 rounded-lg p-3 mb-4 mx-auto max-w-md">
              <p className="text-sm font-bold text-orange-300 mb-1">🚨 LIMITED OFFER TILL 30 AUGUST 2025</p>
              <p className="text-xs text-orange-200">⏰ Flash Sale: Starting at $400$ Yearly• 95% OFF Till August 30, 2025!</p>
            </div>

            <Link
              href="/signal-premium"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-200 text-sm font-medium hover:scale-105 transform hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span>View Premiums Plans</span>
              <ExternalLink className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );

}
