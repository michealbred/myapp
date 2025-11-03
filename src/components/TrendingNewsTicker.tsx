'use client';

import React from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, ArrowUpRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  time: string;
  category: string;
  trending: boolean;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 10,
    title: "BTC Daily Analysis 27 August 2025",
    summary: "Combined Technical Analysis for $BTC as of August 27, 2025",
    time: "August 27",
    category: "BTC",
    trending: true,
    image: ""
  },
  {
    id: 9,
    title: "BTC Daily Analysis 26 August 2025",
    summary: "Fresh BTC technical outlook with volume profile, VWAP and intraday setups",
    time: "August 26",
    category: "BTC",
    trending: true,
    image: ""
  },
  {
    id: 1,
    title: "BTC Daily Analysis 25 August 2025",
    summary: "Professional technical analysis combining volume profile, market structure, and institutional trading insights",
    time: "August 25",
    category: "BTC",
    trending: true,
    image: ""
  },
  {
    id: 7,
    title: "BTC Daily Fibonacci Analysis 25 August 2025",
    summary: "Advanced Fibonacci retracement analysis for identifying key support and resistance levels in trending markets",
    time: "August 25",
    category: "Fibonacci",
    trending: true,
    image: ""
  },
  {
    id: 11,
    title: "Whales, Institutions Analysis",
    summary: "",
    time: "Latest",
    category: "Whale",
    trending: false,
    image: ""
  },
];

export default function TrendingNewsTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border-y border-blue-500/20 mb-6 mobile:mb-8">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F2c181bb2c1a848e28615985040e9916a?format=webp&width=1200"
          alt="Technical analysis background"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-4 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 px-4 mobile:px-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400 flex items-center gap-1">
              <span className="animate-pulse">📊</span>
              TECHNICAL ANALYSIS
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1"></div>
        </div>

        {/* Technical Analysis Columns */}
        <div className="px-4 mobile:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1: BTC Value Areas */}
            <div>
              <h3 className="text-sm font-bold text-blue-300 mb-2">BTC Value Areas</h3>
              <div className="space-y-2">
                <Link href="/blog/btc-cme-monday-playbook" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">BTC CME — Monday Playbook</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
                <Link href="/blog/solana-fibonacci-analysis" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">0.618 and Solana</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* Column 2: BTC Daily Analysis */}
            <div>
              <h3 className="text-sm font-bold text-blue-300 mb-2">BTC Daily Analysis</h3>
              <div className="space-y-2">
                <Link href="/blog/btc-daily-analysis-29-august-25" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">BTC Daily Analysis 29 August 2025</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
                <Link href="/blog/btc-daily-analysis-28-august-25" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">BTC Daily Analysis 28 August 2025</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
                <Link href="/blog/btc-daily-fibonacci-analysis-25-august-25" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">BTC Daily Fibonacci Analysis 25 August 2025</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>

            {/* Column 3: Whales, Institutions Analysis */}
            <div>
              <h3 className="text-sm font-bold text-blue-300 mb-2">Whales, Institutions Analysis</h3>
              <div className="space-y-2">
                <Link href="/blog/machi-brothers-trading-analysis" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">Machi Brothers Trading Analysis</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
                <Link href="/blog/james-wynn-market-manipulation" className="group flex items-center justify-between px-3 py-2 bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg shadow-md hover:shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 backdrop-blur-sm transition-all">
                  <span className="text-sm font-semibold text-white truncate">James Wynn Market Manipulation</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
