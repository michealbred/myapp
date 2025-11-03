'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  trustpilotUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Day Trader",
    content: "TradersPool has completely transformed my trading strategy. The community insights and premium signals have helped me achieve consistent profits. Best investment I've made!",
    rating: 5,
    trustpilotUrl: "https://www.trustpilot.com/review/traderspool.com"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Crypto Investor",
    content: "I was skeptical at first, but the quality of analysis and real-time alerts from TradersPool are incredible. My portfolio has grown 300% in just 6 months.",
    rating: 5,
    trustpilotUrl: "https://www.trustpilot.com/review/traderspool.com"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Swing Trader",
    content: "The educational content and live trading sessions are worth every penny. I've learned more here than from expensive courses elsewhere. Highly recommended!",
    rating: 5,
    trustpilotUrl: "https://www.trustpilot.com/review/traderspool.com"
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Forex Trader",
    content: "Professional signals, amazing community, and excellent customer support. TradersPool helped me transition from losing money to becoming profitable consistently.",
    rating: 5,
    trustpilotUrl: "https://www.trustpilot.com/review/traderspool.com"
  },
  {
    id: 5,
    name: "David Park",
    role: "Options Trader",
    content: "The premium channels are packed with valuable insights. The coaches really know their stuff and the trading strategies actually work. Life-changing experience!",
    rating: 5,
    trustpilotUrl: "https://www.trustpilot.com/review/traderspool.com"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-3 mobile:py-4 relative">
      <div className="mx-auto max-w-4xl px-3 mobile:px-4">
        <div className="text-center mb-4 mobile:mb-5">
          <h2 className="text-base mobile:text-lg tablet:text-xl font-bold text-white dark:text-neutral-100 mb-2 hover:scale-105 transition-transform cursor-default">
            What Our Traders Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-yellow-400 ml-1 hover:scale-110 transition-transform">4.1</span>
          </div>
          <p className="text-xs text-neutral-300 dark:text-neutral-200 hover:text-neutral-100 transition-colors cursor-default">
            Join thousands of successful traders in our community
          </p>
        </div>

        <div className="relative bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-lg mobile:rounded-xl p-3 mobile:p-4 lg:p-5 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-1 mobile:left-2 top-1/2 -translate-y-1/2 p-1.5 mobile:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-3 mobile:h-4 w-3 mobile:w-4 text-white group-hover:text-blue-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-1 mobile:right-2 top-1/2 -translate-y-1/2 p-1.5 mobile:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group z-10 hover:scale-110 transform"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-3 mobile:h-4 w-3 mobile:w-4 text-white group-hover:text-blue-300" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center max-w-full mobile:max-w-lg mx-auto px-2 mobile:px-0">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 hover:scale-125 transition-transform" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xs mobile:text-sm text-white dark:text-neutral-100 mb-3 mobile:mb-4 leading-relaxed font-medium hover:text-blue-100 transition-colors cursor-default">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="mb-3 mobile:mb-4">
              <div className="font-semibold text-white dark:text-neutral-100 text-xs mobile:text-sm hover:text-blue-200 transition-colors cursor-default">
                {currentTestimonial.name}
              </div>
              <div className="text-neutral-300 dark:text-neutral-200 text-xs hover:text-neutral-100 transition-colors cursor-default">
                {currentTestimonial.role}
              </div>
            </div>

          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-1.5 mobile:gap-2 mt-3 mobile:mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-1.5 mobile:h-2 rounded-full transition-all duration-200 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-500 w-5 mobile:w-6 shadow-lg shadow-blue-500/50'
                  : 'bg-white/30 hover:bg-white/60 w-1.5 mobile:w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
