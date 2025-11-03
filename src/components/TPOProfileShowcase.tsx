'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from "next/image";

interface TPOItem {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  link?: string;
}

const tpoItems: TPOItem[] = [
  {
    id: "tpo-profile",
    title: "TPO Profile",
    image: "https://images.pexels.com/photos/6770611/pexels-photo-6770611.jpeg",
    description: "TPO Profile (a.k.a market profile®), is similar to volume profile. Time-Price-Opportunity (TPO) shows the price distribution during the specified time and highlights at which levels the price has spent the most time.",
    features: [
      "Price distribution analysis",
      "Time-based market structure",
      "Support and resistance identification",
      "Volume profile integration"
    ],
    link: "/about"
  }
];

export default function TPOProfileShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === tpoItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === tpoItems.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? tpoItems.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentItem = tpoItems[currentIndex];

  return (
    <section className="py-8 border-t border-white/10 bg-white/5 dark:bg-neutral-800/20">
      <div className="mx-auto max-w-7xl px-3">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-neutral-100 mb-3">
            Advanced Trading Analytics
          </h2>
          <p className="text-sm text-neutral-300 dark:text-neutral-200">
            Professional market analysis tools for serious traders
          </p>
        </div>

        <div className="relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevItem}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform shadow-lg hover:shadow-xl"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform shadow-lg hover:shadow-xl"
            aria-label="Next item"
          >
            <ChevronRight className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
          </button>

          {/* Content Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {tpoItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Section - Left Side */}
                    <div className="group order-1">
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Content Section - Right Side */}
                    <div className="space-y-6 order-2">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-neutral-100 mb-4 hover:text-blue-200 transition-colors cursor-default">
                          {item.title}
                        </h3>
                        <p className="text-neutral-300 dark:text-neutral-200 leading-relaxed mb-6 hover:text-neutral-100 transition-colors cursor-default">
                          {item.description}
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 hover:text-neutral-200 transition-colors cursor-default">
                          {item.title} is generally used in conjunction with other profiles to better identify areas of{' '}
                          <a
                            href={item.link}
                            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                          >
                            support and resistance
                          </a>.
                        </p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {item.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform cursor-default"
                          >
                            <span className="text-xs text-neutral-300 dark:text-neutral-200 group-hover:text-neutral-100 transition-colors">
                              • {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 p-6">
            {tpoItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToItem(index)}
                className={`h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                  index === currentIndex
                    ? 'bg-blue-500 w-8 shadow-lg shadow-blue-500/50'
                    : 'bg-white/30 hover:bg-white/60 w-2'
                }`}
                aria-label={`Go to ${tpoItems[index].title}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
