'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";

interface PremiumService {
  src: string;
  name: string;
}

const allServices: PremiumService[] = [
  { src: "https://ext.same-assets.com/1159941532/1902774596.jpeg", name: "Credible Academy" },
  { src: "https://ext.same-assets.com/1159941532/2901502568.jpeg", name: "TraderSZ" },
  { src: "https://ext.same-assets.com/1159941532/722921890.jpeg", name: "Yo Crypto Platinum" },
  { src: "https://ext.same-assets.com/1159941532/2516144120.png", name: "Dans Signals" },
  { src: "https://ext.same-assets.com/1159941532/437907161.png", name: "Trading by CF" },
  { src: "https://ext.same-assets.com/1159941532/1640121722.jpeg", name: "Margin Whales" },
  { src: "https://ext.same-assets.com/1159941532/1342270112.jpeg", name: "Crypto Zone VIP" },
  { src: "https://ext.same-assets.com/1159941532/2881319521.png", name: "Crypto King" },
  { src: "https://ext.same-assets.com/1159941532/289527164.jpeg", name: "The Birb Nest" },
  { src: "https://ext.same-assets.com/1159941532/3059663317.jpeg", name: "The Crypto Hounds" },
  { src: "https://ext.same-assets.com/1159941532/2954232116.jpeg", name: "The Hunt" },
  { src: "https://ext.same-assets.com/1159941532/4088475068.jpeg", name: "21M Technicals" },
  { src: "https://ugc.same-assets.com/0fk1I7XiOIZHPCbiylQ9h8RwkTsL8mgO.jpeg", name: "Caixa Trading" },
  { src: "https://ugc.same-assets.com/xl_RbwfhXM5pu29w9DrpiZzLuzhnn6vN.jpeg", name: "Haven Group" },
  { src: "https://ext.same-assets.com/1159941532/870417094.png", name: "Warsnop ICF" },
  { src: "https://ext.same-assets.com/1159941532/2407259232.png", name: "Platter VIP" },
  { src: "https://ext.same-assets.com/1159941532/3961314525.jpeg", name: "Klondike PRO" },
  { src: "https://ext.same-assets.com/1159941532/982377683.jpeg", name: "Whales Guide" },
  { src: "https://ext.same-assets.com/1159941532/1684895320.png", name: "Bitmex Premium" },
  { src: "https://ext.same-assets.com/1159941532/3901026379.jpeg", name: "Crypto VIP Signals" },
  { src: "https://ext.same-assets.com/1159941532/2213053348.jpeg", name: "Ritesh Trades" },
  { src: "https://ext.same-assets.com/1159941532/2435921417.png", name: "Utopia Trading" },
  { src: "https://ext.same-assets.com/1159941532/2129424307.png", name: "Corgi Calls" },
  { src: "https://ext.same-assets.com/1159941532/1174720029.jpeg", name: "Ken Charts" },
  { src: "https://ext.same-assets.com/1159941532/3658969275.png", name: "Doctor Profit" },
  { src: "https://ext.same-assets.com/1159941532/2894105260.jpeg", name: "Rose Premium" },
  { src: "https://ext.same-assets.com/1159941532/2179604625.jpeg", name: "Crypto Cove" },
  { src: "https://ext.same-assets.com/1159941532/3053139934.png", name: "The Bulls" },
  { src: "https://ext.same-assets.com/1159941532/390599703.jpeg", name: "Universal Signals PRO" },
  { src: "https://ext.same-assets.com/1159941532/1177884191.jpeg", name: "Traders Grid" },
  { src: "https://ext.same-assets.com/1159941532/1742573608.png", name: "Signal Express" },
  { src: "https://ext.same-assets.com/1159941532/4006297615.jpeg", name: "Trade Devils" },
  { src: "https://ext.same-assets.com/1159941532/3177441654.png", name: "Crypto Coin Coach" },
];

// Group services into chunks of 6
const groupedServices: PremiumService[][] = [];
for (let i = 0; i < allServices.length; i += 6) {
  groupedServices.push(allServices.slice(i, i + 6));
}

export default function PremiumServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === groupedServices.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextGroup = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === groupedServices.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevGroup = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? groupedServices.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToGroup = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentGroup = groupedServices[currentIndex];

  return (
    <section className="border-t border-neutral-900/50 bg-white/5">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-lg font-medium text-neutral-200 mb-6">
          Top Premiums, Easy Access
        </h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevGroup}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10"
            aria-label="Previous group"
          >
            <ChevronLeft className="h-5 w-5 text-white group-hover:text-blue-300" />
          </button>

          <button
            onClick={nextGroup}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10"
            aria-label="Next group"
          >
            <ChevronRight className="h-5 w-5 text-white group-hover:text-blue-300" />
          </button>

          {/* Services Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {groupedServices.map((group, groupIndex) => (
                <div key={groupIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                    {group.map((service) => (
                      <div 
                        key={service.name} 
                        className="group rounded-lg border border-neutral-800 bg-neutral-950/40 p-3 hover:border-neutral-700 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="relative mx-auto aspect-square w-16 overflow-hidden rounded-md">
                          <Image 
                            src={service.src} 
                            alt={service.name} 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                        </div>
                        <p className="mt-2 truncate text-center text-xs text-neutral-300 group-hover:text-white transition-colors duration-300">
                          {service.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {groupedServices.map((_, index) => (
            <button
              key={index}
              onClick={() => goToGroup(index)}
              className={`h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-500 w-8 shadow-lg shadow-blue-500/50'
                  : 'bg-white/30 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to group ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
