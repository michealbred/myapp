'use client';
import React, { useState, useEffect } from 'react';
import CombinedFlashSaleBanner from '../../components/CombinedFlashSaleBanner';
import Link from 'next/link';

export default function SignalPremiumPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  type Plan = {
    name: string;
    duration: string;
    original?: string;
    price: string;
    cadence: string;
    discount?: string;
    discountIcon?: string;
    buy: string;
    features: string[];
    featured?: boolean;
    isChartChampions?: boolean;
    isSignalPremium?: boolean;
    isDiamond?: boolean;
  };

  const signalPremiumPlans: Plan[] = [
    {
      name: "Smart Champions with AI-Integration - Silver Plan",
      duration: "Flexible Plans",
      price: "Combined",
      cadence: "",
      buy: "#",
      isChartChampions: true,
      features: [
        "Exclusive access to CC Livestreams and Discord",
        "Smart Champions exclusive discord community access",
        "Smart Champions access",
        "Real-time Livestreaming via Streamable",
        "Upcoming Feature: AI-bots to auto trading of Livestream Analysis i.e., 0.618 fib confluence with Avwap, DWM unatapped levls, POC",
        "Upcoming Feature : Summary of long Livestream with AI"
      ],
    },
    {
      name: "Elite Signals with AI-Integration - Gold Plan",
      duration: "Flexible Plans",
      price: "Combined",
      cadence: "",
      discountIcon: "https://ext.same-assets.com/3802943734/297971027.svg",
      buy: "https://kryptokings.org/pricing/?add-to-cart=238",
      isSignalPremium: true,
      features: [
        "Walsh Wealth, ShinghamiXBT, The Haven and 80+ other channels exclusive analysis with AI",
        "Exclusive access to 80 VIP channels",
        "Crypto market and coin analysis 24/7",
        "Crypto Market Scanner",
        "Helpful community of fellow traders",
        "Smart Champions access not included"
      ],
    },
    {
      name: "Smart Champions + Elite Signals - Diamond Plan",
      duration: "Flexible Plans",
      price: "Combined",
      cadence: "",
      buy: "#",
      isDiamond: true,
      features: [
        "Everything in Silver and Gold",
        "Access to 100+ Courses including Speedrun, FractalFlow, Axia Futures and more",
        "Highly profitable trading signals + 80+ VIP channels",
        "Real-time livestreams, trading templates, market scanners",
        "Priority community access and support"
      ]
    }
  ];

  const Card = ({ p }: { p: Plan }) => {
    // Define pricing for each plan (from your code/screenshot)
    const pricing = p.isChartChampions 
      ? [{ duration: 'monthly', amount: 70 }, { duration: 'yearly', amount: 600 }]
      : p.isSignalPremium 
      ? [{ duration: 'monthly', amount: 150 }, { duration: 'yearly', amount: 700 }]
      : [{ duration: 'monthly', amount: 200 }, { duration: 'yearly', amount: 1000 }];

    // Set plan param based on flags for accurate mapping
    const planParam = p.isDiamond ? 'diamond' : p.isSignalPremium ? 'gold' : 'silver';

    return (
      <div className={`relative rounded-xl p-6 pt-10 transition-colors duration-300 border
        ${p.isDiamond ? 'border-cyan-300 ring-2 ring-cyan-400/50 shadow-xl shadow-cyan-500/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/20' :
           p.isSignalPremium ? 'border-yellow-500 bg-gradient-to-br from-yellow-200/10 to-orange-400/15' :
           p.isChartChampions ? 'border-gray-200 ring-2 ring-gray-300/40 shadow-lg shadow-gray-400/20 bg-gradient-to-br from-slate-200/25 via-gray-200/20 to-slate-500/20' :
           'border-white/10 bg-white/5'}`}>
        {p.discount && (
          <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-2 py-1 text-xs text-emerald-300">
            {p.discountIcon ? (
              <img alt="discount" src={p.discountIcon} className="h-4 w-4" />
            ) : null}
            <span>{p.discount}</span>
          </div>
        )}
        <div className={`absolute left-3 top-3 z-10 pointer-events-none rounded-full px-2 py-1 text-xs font-semibold shadow
          ${p.isDiamond ? 'bg-gradient-to-r from-cyan-200 to-blue-300 text-slate-900 ring-1 ring-cyan-300/60 shadow shadow-cyan-500/30' :
             p.isSignalPremium ? 'bg-gradient-to-r from-yellow-300 to-orange-300 text-yellow-900' :
             p.isChartChampions ? 'bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 ring-1 ring-gray-200/60 shadow shadow-gray-400/30' : 'bg-white/10 text-white'}`}>
          {p.isDiamond ? 'DIAMOND' : p.isSignalPremium ? 'GOLD' : p.isChartChampions ? 'SILVER' : ''}
        </div>
        <h2 className="text-xl font-semibold">{p.name}</h2>
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {pricing.map((priceInfo, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center relative">
                {priceInfo.duration === 'yearly' && <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Best Value</div>}
                <div className="text-sm text-neutral-400 mb-2">{priceInfo.duration === 'monthly' ? '1 Month' : '12 Months'}</div>
                <div className="text-2xl font-bold text-white">${priceInfo.amount}</div>
                <div className="text-xs text-neutral-500 line-through">$ {priceInfo.duration === 'monthly' ? (p.isChartChampions ? 270 : p.isSignalPremium ? 3000 : 6000) : (p.isChartChampions ? 3200 : p.isSignalPremium ? 30000 : 33000)}</div>
                <div className="text-xs text-green-400 font-medium mt-1">{priceInfo.duration === 'monthly' ? (p.isChartChampions ? '74% OFF' : p.isSignalPremium ? '95% OFF' : '97% OFF') : (p.isChartChampions ? '81% OFF' : p.isSignalPremium ? '98% OFF' : '97% OFF')}</div>
                {/* Add Buy Now Button Here */}
                <Link href={`/payment?plan=${planParam}&duration=${priceInfo.duration}&amount=${priceInfo.amount}`}>
                  <button style={{
                    backgroundColor: '#0070f3',  // Blue matching site
                    color: 'white',
                    padding: '8px 16px',  // Small size
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    marginTop: '12px',
                    transition: 'background-color 0.3s',  // Interactive hover
                  }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}>
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <ul className="mt-6 space-y-2 text-sm text-neutral-300">
          {p.features.map((f, index) => (
            <li key={`feature-${index}`} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {/* FLASH SALE BANNER AND GRAB OFFER BUTTON */}
        {p.isDiamond && (
          <div className="mt-6 flex flex-col items-center">
            <div className="flex flex-row items-center gap-3">
              <span className="inline-block rounded bg-orange-500 text-white text-xs font-bold px-2 py-1">FLASH SALE</span>
              <span className="text-orange-400 font-semibold text-sm">Flash Sale: Starting at $400 Yearly • 95% OFF Till 30 September 2025</span>
            </div>
            <Link href="/payment?plan=diamond&duration=yearly&amount=400&flashsale=true">
              <button className="mt-3 bg-neutral-900 text-orange-400 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition-all text-lg flex items-center gap-2">
                <span>⚡ Grab Offer</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  };

  if (!mounted) {
    return (
      <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight dark:text-white transition-colors duration-300">Premium Channels</h1>
          <p className="mt-4 text-neutral-300 dark:text-neutral-200 transition-colors duration-300">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight dark:text-white transition-colors duration-300">Premium Channels</h1>
        <p className="mt-4 text-neutral-300 dark:text-neutral-200 transition-colors duration-300">
          Access premium trading signals, exclusive VIP channels, and elite trading communities.
        </p>
        {/* Combined Flash Sale Banner */}
        <CombinedFlashSaleBanner />
        {/* Plans Grid - Moved to Top */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signalPremiumPlans.map((p, index) => (
            <Card key={`${p.name}-${p.duration}-${index}`} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}