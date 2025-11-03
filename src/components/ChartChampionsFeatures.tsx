'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function ChartChampionsFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    "Smart Champions exclusive discord community access",
    "Smart Champions access",
    "Contenders access",
    "Real-time Livestreaming via Streamble",
    "Trading Templates and Daily Sheets",
    "Speedruns, Modules, Contenders and 100+ Trading Courses Access"
  ];

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className={`relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-4 lg:p-5 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Side-by-side Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Logo Section - Left Side */}
          <div className="group order-1">
            <div className="flex gap-2 items-center">
              {/* AI Logo - Same size as Smart Champions */}
              <div className="relative h-32 md:h-40 w-32 md:w-40 rounded-lg overflow-hidden border border-cyan-400/30 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-blue-900/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 flex items-center justify-center group-hover:scale-105 p-6">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F4e7d984980624dfb96839c9a8863e7b2%2Fb2c49725986e4a73be6adfed1aa76860?format=webp&width=800"
                  alt="AI Integration Logo"
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                {/* AI Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300"></div>

                {/* AI Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  AI Integration
                </div>
              </div>

              {/* Smart Champions Logo - Same size */}
              <div className="relative h-32 md:h-40 w-32 md:w-40 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex items-center justify-center p-6">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F618241c6165d4459b686a3851263d1a2%2Fe55a4344d1f648ba8ae67862b132d707?format=webp&width=800"
                  alt="Smart Champions - Professional Trading Analysis"
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

                {/* Floating badge */}
                <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                  Flagship Course
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-6 order-2">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-3">
                Smart Champions
              </h3>
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
