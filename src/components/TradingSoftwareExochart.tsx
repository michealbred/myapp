'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function TradingSoftwareExochart() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    "Advanced orderflow",
    "Fully customisable TPO Profiles",
    "Advanced Depth of Market (DOM) & Tape",
    "Customisable stacked imbalances, and advanced delta divergences"
  ];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className={`relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-4 lg:p-5 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Side-by-side Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Logo Section - Left Side */}
          <div className="group order-1">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 flex items-center justify-center p-6">
              <Image
                src="https://ugc.same-assets.com/nWlJvUJarE78QCi63qXcL1PMxSbO6dQs.jpeg"
                alt="Exochart Desktop Pro"
                width={120}
                height={120}
                className="object-cover rounded group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-green-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                Advanced Orderflow
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-6 order-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-3">
                Exochart+ AI Integration+ Technical Analysis
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed mb-4">
                Professional trading platform with advanced orderflow analysis, customizable TPO profiles, and sophisticated depth of market tools for precise trading decisions.
              </p>
            </div>

            {/* Features Grid */}
            <div className="w-full">
              <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-300">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
