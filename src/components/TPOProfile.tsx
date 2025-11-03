'use client';

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from "next/image";

export default function TPOProfile() {
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
            <div className="relative h-28 mobile:h-32 tablet:h-40 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F618241c6165d4459b686a3851263d1a2%2F2a45c5e3b55c4fdcbf1ee489b8b4dcdd?format=webp&width=800"
                alt="TPO Profile - Time Price Opportunity Analysis"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

              {/* Floating badge */}
              <div className="absolute top-2 mobile:top-4 left-2 mobile:left-4 bg-blue-600/90 backdrop-blur text-white px-2 mobile:px-3 py-1 rounded-full text-xs font-medium">
                Time-Price-Opportunity
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-3 mobile:space-y-4 tablet:space-y-6 order-2">
            <div>
              <h3 className="text-base mobile:text-lg tablet:text-xl font-bold text-white dark:text-neutral-100 mb-2 mobile:mb-3">
                TPO Profile
              </h3>
              <p className="text-xs mobile:text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed mb-3 mobile:mb-4">
                TPO Profile (a.k.a market profile®), is similar to volume profile. Time-Price-Opportunity (TPO) shows the price distribution during the specified time and highlights at which levels the price has spent the most time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
