'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function TradingSoftwareATAS() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    "Real-time crypto, futures & stock data",
    "3 active exchange connections",
    "Big Trades, CVD Pro, Market Profile & TPO",
    "12 indicators per chart simultaneously"
  ];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className={`relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-4 lg:p-5 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Side-by-side Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Logo Section - Left Side */}
          <div className="group order-1">
            <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex items-center justify-center p-6">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F21487dfce48841b78d87bb88c85d9c60%2Fc59354e87aae4033b131c1880cb18d70?format=webp&width=800"
                alt="ATAS Advanced Trading Analytical Software"
                width={120}
                height={120}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

              {/* Floating badge */}
              <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                Multi-Asset Platform
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-6 order-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-3">
                ATAS + AI Integration+ Technical Analysis
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed mb-4">
                Advanced Trading Analytical Software providing real-time multi-asset data with sophisticated market analysis tools including Big Trades, CVD Pro, and Market Profile indicators.
              </p>
            </div>

            {/* Features Grid */}
            <div className="w-full">
              <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-300">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 p-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></span>
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
