'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  link: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Trade Like Pro",
    excerpt: "Master advanced trading strategies with professional-grade tools and insights.",
    author: "Trading Expert",
    date: "Jan 15, 2021",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg",
    imageAlt: "Professional trader analyzing financial charts",
    link: "/blog/trade-like-pro",
    category: "Strategy"
  },
  {
    id: 2,
    title: "Advanced Market Analysis",
    excerpt: "Unlock deep market insights with sophisticated analysis tools and techniques.",
    author: "Market Analyst",
    date: "Jan 12, 2021",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg",
    imageAlt: "Advanced financial analysis and data visualization",
    link: "/blog/market-analysis",
    category: "Analysis"
  },
  {
    id: 3,
    title: "Risk Management Mastery",
    excerpt: "Learn essential risk management techniques to protect your trading capital.",
    author: "Risk Manager",
    date: "Jan 10, 2021",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
    imageAlt: "Risk management charts and calculations",
    link: "/blog/risk-management",
    category: "Education"
  },
  {
    id: 4,
    title: "Crypto Trading Fundamentals",
    excerpt: "Essential guide to cryptocurrency trading for both beginners and experts.",
    author: "Crypto Specialist",
    date: "Jan 8, 2021",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg",
    imageAlt: "Cryptocurrency trading dashboard",
    link: "/blog/crypto-fundamentals",
    category: "Crypto"
  },
  {
    id: 5,
    title: "AI Trading Revolution",
    excerpt: "How artificial intelligence is transforming modern trading strategies.",
    author: "AI Researcher",
    date: "Jan 5, 2021",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg",
    imageAlt: "AI and machine learning in trading",
    link: "/blog/ai-trading",
    category: "Technology"
  }
];

export default function TradeProSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevPost = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToPost = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handlePostClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };


  return (
    <section className="py-3 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="text-center mb-3">
          <h2 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-1">
            Trading Insights & Education
          </h2>
          <p className="text-xs text-neutral-300 dark:text-neutral-200 max-w-xl mx-auto">
            Stay updated with the latest trading strategies, market analysis, and educational content
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative bg-gradient-to-br from-white/5 to-blue-500/10 dark:from-neutral-800/50 dark:to-blue-900/20 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group scale-75">
          {/* Navigation Arrows */}
          <button
            onClick={prevPost}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200 group z-10 backdrop-blur"
            aria-label="Previous post"
          >
            <ChevronLeft className="h-4 w-4 text-white hover:text-blue-300" />
          </button>

          <button
            onClick={nextPost}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200 group z-10 backdrop-blur"
            aria-label="Next post"
          >
            <ChevronRight className="h-4 w-4 text-white hover:text-blue-300" />
          </button>

          {/* Current Post */}
          <div
            className="cursor-pointer"
            onClick={() => handlePostClick(blogPosts[currentIndex].link)}
            onMouseEnter={() => setHoveredPost(blogPosts[currentIndex].id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="grid lg:grid-cols-2 gap-4 items-center p-4 lg:p-5">
              {/* Image */}
              <div className="relative scale-105">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={blogPosts[currentIndex].image}
                    alt={blogPosts[currentIndex].imageAlt}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 37vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-blue-600/80 backdrop-blur text-white text-xs font-medium rounded">
                      {blogPosts[currentIndex].category}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <div className={`absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur rounded-full transition-all duration-300 ${
                    hoveredPost === blogPosts[currentIndex].id ? 'opacity-100 scale-110' : 'opacity-60'
                  }`}>
                    <ExternalLink className="h-3 w-3 text-white" />
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-blue-600/20 transition-opacity duration-300 ${
                    hoveredPost === blogPosts[currentIndex].id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-60 animate-pulse group-hover:animate-bounce" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-40 animate-ping group-hover:animate-spin" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white dark:text-neutral-100 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {blogPosts[currentIndex].title}
                  </h3>
                  <p className="text-xs text-neutral-300 dark:text-neutral-200 leading-relaxed mb-3">
                    {blogPosts[currentIndex].excerpt}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-300">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{blogPosts[currentIndex].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{blogPosts[currentIndex].date}</span>
                  </div>
                  <span className="text-blue-400 font-medium">{blogPosts[currentIndex].readTime}</span>
                </div>

                {/* Read More Button */}
                <div className="pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-medium rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-500/25">
                    <span>Read Full Article</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPost(index)}
              className={`h-1.5 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-blue-500 w-6 shadow-md shadow-blue-500/50'
                  : 'bg-white/30 hover:bg-white/60 w-1.5'
              }`}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}

          {/* Auto-play indicator - only show when auto-playing */}
          {isAutoPlaying && (
            <div className="ml-3 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse transition-colors duration-300" />
              <span className="text-xs text-neutral-400">Auto</span>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.open('/blog', '_blank')}
            className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-medium rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-500/25"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
