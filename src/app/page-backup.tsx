import Image from "next/image";
import Link from "next/link";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ChannelShowcase from "../components/ChannelShowcase";
import SocialMediaLinks from "../components/SocialMediaLinks";
import PoweredByAI from "../components/PoweredByAI";
import TradingInsights from "../components/TradingInsights";
import RiskDisclaimer from "../components/RiskDisclaimer";
import Footer from "../components/Footer";
import TradingProfiles from "../components/TradingProfiles";
import ETFDataCarousel from "../components/ETFDataCarousel";
import LimitedOfferBanner from "../components/LimitedOfferBanner";

export const metadata = {
  title: 'TRADERSPOOL - The Pioneering AI-Engineered Collaborative Trading Hub',
  description: 'Dive into the ultimate AI-powered hub—connect with pro traders in a buzzing community, unlock elite signals and bots, and dominate markets with our cutting-edge multi-agent tech.',
};

export default function Home() {
  const cmeData = [
    {
      id: 'cme-combined',
      category: 'CME Settlement',
      categoryColor: 'bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-green-600/90',
      title: '23 August CME Settlement',
      tokens: '📊',
      entities: '🏛️',
      timeAgo: '23 August',
      updates: 112285,
      description: 'BTC CME Settlement- 112285 • ETH CME Settlement- 4228 • E-Mini S&P-500 - 6388 • E-Mini NASDAQ- 23569',
      link: 'https://www.cmegroup.com/'
    }
  ];

  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300">
      <section className="relative overflow-hidden py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title Section - Centered */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight transition-colors duration-300">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                TRADERSPOOL: Revolutionize Your Trading Game!
              </span>
            </h1>
            <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto dark:text-neutral-200 transition-colors duration-300">
              Dive into the ultimate AI-powered hub—connect with pro traders in a buzzing community, unlock elite signals and bots, and dominate markets with our cutting-edge multi-agent tech. Seamless, smart, unstoppable.
            </p>
          </div>

          {/* Limited Offer Banner */}
          <LimitedOfferBanner />

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-6">
            {/* Left Column - Login and Connect */}
            <div className="space-y-3">
              <div className="text-center lg:text-left">
                <p className="text-sm text-blue-600 font-medium dark:text-blue-400 transition-colors duration-300 mb-2 mt-3">
                  For Sign up, Free trial, Query or any issue Contact via Telegram. Discord Service Access only after Sign Up.
                </p>
                <p className="text-lg md:text-xl text-blue-300 font-semibold dark:text-blue-400 transition-colors duration-300 mb-4">
                  Join the pool: Let's connect!
                </p>

                {/* Authentication Buttons */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                </div>

                {/* Connect with us */}
                <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-300 dark:text-neutral-200 text-sm font-medium hover:text-white transition-colors cursor-default">Connect with us:</span>
                    <SocialMediaLinks size="md" />
                  </div>
                </div>

                {/* Powered by AI Section */}
                <div className="flex justify-center lg:justify-start mt-2">
                  <PoweredByAI />
                </div>

                {/* Trading Insights Section */}
                <div className="mt-4">
                  <TradingInsights />
                </div>

                {/* Trading Insights Section - CME Settlement */}
                <div className="mt-4">
                  <TradingInsights title="23 August CME Settlement" customData={cmeData} />
                </div>
              </div>
            </div>

            {/* Right Column - Trading Analytics */}
            <div className="lg:pl-4">
              <TradingProfiles />

              {/* Premium Trading Channels - Positioned below Advanced Technical Analysis */}
              <ChannelShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ETF Data Section */}
      <ETFDataCarousel />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      <Footer />

      {/* Product Names and Brands Disclaimer */}
      <div className="border-t border-neutral-900/50 bg-[#0b0b0e]/80 backdrop-blur py-4">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-neutral-400 dark:text-neutral-300 text-xs leading-relaxed">
            The product names, logos and brands used on this website are for identification purposes only. Registered names and trademarks are the copyright and property of their respective owners.
          </p>
        </div>
      </div>

    </main>
  );
}
