'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MarketProfile from './MarketProfile';
import TPOProfile from './TPOProfile';
import VolumeProfile from './VolumeProfile';
import AnchoredVWAP from './AnchoredVWAP';

const profiles = [
  { id: 'market', component: MarketProfile, name: 'Market Profile 80% Rule' },
  { id: 'tpo', component: TPOProfile, name: 'TPO Profile' },
  { id: 'volume', component: VolumeProfile, name: 'Volume Profile' },
  { id: 'anchored-vwap', component: AnchoredVWAP, name: 'Anchored VWAP' }
];

export default function TradingProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const goToProfile = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const CurrentProfileComponent = profiles[currentIndex].component;

  return (
    <section className="py-3 mobile:py-4 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-2 mobile:px-4">
        <div className="text-center mb-4 mobile:mb-5">
          <h2 className="text-base mobile:text-lg tablet:text-xl font-bold text-white dark:text-neutral-100 mb-2">
            Advanced Technical Analysis
          </h2>
        </div>

        {/* Vertical Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProfile}
            className="absolute left-1 mobile:left-2 tablet:left-4 top-1/2 -translate-y-1/2 p-2 mobile:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform shadow-lg hover:shadow-xl"
            aria-label="Previous profile"
          >
            <ChevronLeft className="h-4 mobile:h-5 w-4 mobile:w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          <button
            onClick={nextProfile}
            className="absolute right-1 mobile:right-2 tablet:right-4 top-1/2 -translate-y-1/2 p-2 mobile:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform shadow-lg hover:shadow-xl"
            aria-label="Next profile"
          >
            <ChevronRight className="h-4 mobile:h-5 w-4 mobile:w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          {/* Profile Content Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {profiles.map((profile, index) => (
                <div key={profile.id} className="w-full flex-shrink-0">
                  <profile.component />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-1 mobile:gap-2 mt-2 mobile:mt-3">
            {profiles.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProfile(index)}
                className={`h-1.5 mobile:h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-6 mobile:w-8 shadow-lg shadow-blue-500/50'
                    : 'bg-white/30 hover:bg-white/60 w-1.5 mobile:w-2'
                }`}
                aria-label={`Go to ${profiles[index].name}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
