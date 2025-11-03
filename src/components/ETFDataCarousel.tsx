'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const etfData = [
  {
    id: 'bitcoin-spot-volumes',
    src: 'https://www.theblock.co/data/crypto-markets/bitcoin-etf/bitcoin-spot-etf-volumes/embed',
    title: 'Spot Bitcoin ETF Volumes'
  },
  {
    id: 'blackrock-holdings',
    src: 'https://www.theblock.co/data/crypto-markets/bitcoin-etf/blackrock-bitcoin-etf-ibit-on-chain-holdings/embed',
    title: 'BlackRock Bitcoin ETF (IBIT) On-chain Holdings'
  }
];

export default function ETFDataCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === etfData.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds between auto-transitions

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextETF = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === etfData.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  const prevETF = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? etfData.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-3 pb-4">
        <div className="text-center mb-2">
          <h2 className="text-xl md:text-2xl font-bold text-white dark:text-neutral-100">
            ETF Insights
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevETF}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10"
            aria-label="Previous ETF data"
          >
            <ChevronLeft className="h-4 w-4 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          <button
            onClick={nextETF}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10"
            aria-label="Next ETF data"
          >
            <ChevronRight className="h-4 w-4 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          {/* ETF Content Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {etfData.map((etf, index) => (
                <div key={etf.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-lg p-3 transition-all duration-300">
                    <div className="rounded-lg overflow-hidden border border-white/10">
                      <iframe
                        width="100%"
                        height="300"
                        frameBorder="0"
                        src={etf.src}
                        title={etf.title}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
