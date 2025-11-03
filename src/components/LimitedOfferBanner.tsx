'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LimitedOfferBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-30T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl mobile:rounded-2xl backdrop-blur-sm mb-6 mobile:mb-8 mx-2 mobile:mx-4 lg:mx-0 border border-white/10">
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 rounded-xl mobile:rounded-2xl"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-4 right-6 w-1 h-1 bg-yellow-500 rounded-full animate-pulse opacity-40"></div>
      </div>

      <div className="relative z-10 p-3 mobile:p-4 text-center">
        {/* Flash Sale Badge */}
        <Link
          href="/signal-premium"
          className="inline-flex items-center gap-1 mobile:gap-2 px-2 mobile:px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 rounded-full text-white font-bold text-xs mb-2 shadow-lg shadow-red-500/25 animate-bounce hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <span className="text-yellow-300">⚡</span>
          FLASH SALE
          <span className="text-yellow-300">⚡</span>
        </Link>

        {/* Main Offer Text - Simple */}
        <h2 className="text-sm mobile:text-base tablet:text-lg lg:text-xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
            LIMITED OFFER TILL AUGUST 30, 2025
          </span>
        </h2>
      </div>
    </div>
  );
}
