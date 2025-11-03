'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function ChartChampionsLogo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className={`relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-2 lg:p-3 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          {/* Logo Section */}
          <div className="group">
            <div className="relative h-20 w-20 mx-auto rounded-lg overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center p-2">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F618241c6165d4459b686a3851263d1a2%2Fe55a4344d1f648ba8ae67862b132d707?format=webp&width=800"
                alt="Smart Champions - Professional Trading Analysis"
                width={60}
                height={60}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-3">
              Smart Champions
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
