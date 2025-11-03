'use client';

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function MarketProfile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-2 mobile:px-4">
      <div className={`relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-lg mobile:rounded-xl p-3 mobile:p-4 lg:p-5 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mobile:gap-6 items-center">
          {/* Image Section */}
          <div className="group order-1 tablet:order-1">
            <div className="relative h-28 mobile:h-32 tablet:h-40 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-orange-900/20 to-yellow-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6262b2a49db1473aa3c89ad8b5e5ddb6%2Fc44369c43002478e8cd0c9a074bdd4f5?format=webp&width=800"
                alt="Market Profile 80% Rule - Trading Strategy Analysis"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

              {/* Floating badge */}
              <div className="absolute top-2 mobile:top-4 left-2 mobile:left-4 bg-orange-600/90 backdrop-blur text-white px-2 mobile:px-3 py-1 rounded-full text-xs font-medium">
                80% Rule Strategy
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-3 mobile:space-y-4 tablet:space-y-6 order-2">
            <div>
              <h3 className="text-base mobile:text-lg tablet:text-xl font-bold text-white dark:text-neutral-100 mb-2 mobile:mb-3">
                Market Profile 80% Rule
              </h3>
              <p className="text-xs mobile:text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed">
                This is a very famous systematic strategy. It says that if the market opens above/below the previous day Value area and then accepts back inside the value with 2 TPOs (two 30-minute candles), there is an 80% chance to rotate to the other side of the value area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
