'use client';

import { LineChart, TrendingUp } from 'lucide-react';

export default function AnchoredVWAP() {
  return (
    <div className="mx-auto max-w-6xl px-2 mobile:px-4">
      <div className="bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-lg mobile:rounded-xl p-3 mobile:p-4 lg:p-6 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 h-fit">
        <div className="grid grid-cols-1 tablet:grid-cols-[1fr_2fr] gap-4 mobile:gap-6 items-center">
          {/* Chart Section */}
          <div className="group order-2 tablet:order-1">
            <div className="relative h-28 mobile:h-32 tablet:h-40 rounded-lg mobile:rounded-xl overflow-hidden border border-white/20 bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2F5a9b987a14354793a936fe91505186c1?format=webp&width=800"
                alt="Anchored VWAP Chart"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>

              {/* Floating badge */}
              <div className="absolute top-2 mobile:top-4 left-2 mobile:left-4 bg-blue-600/90 backdrop-blur text-white px-2 mobile:px-3 py-1 mobile:py-1.5 rounded-full text-xs mobile:text-sm font-medium">
                <LineChart className="h-3 mobile:h-4 w-3 mobile:w-4 inline mr-1 mobile:mr-2" />
                A-VWAP
              </div>

              {/* Chart overlay icon */}
              <div className="absolute bottom-2 mobile:bottom-4 right-2 mobile:right-4 p-1.5 mobile:p-2 bg-white/10 backdrop-blur rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="h-4 mobile:h-5 w-4 mobile:w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-3 mobile:space-y-4 order-1 tablet:order-2">
            <div>
              <h3 className="text-base mobile:text-lg tablet:text-xl font-bold text-white dark:text-neutral-100 mb-2 mobile:mb-3">
                Anchored VWAP
              </h3>
              <p className="text-xs mobile:text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed">
                Anchored VWAP calculates the volume-weighted average price from a specific user-chosen starting point, like a key event or price extreme. It integrates both price and volume data to reveal fair value levels and potential support/resistance zones over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
