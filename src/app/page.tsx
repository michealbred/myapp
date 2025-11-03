import Image from "next/image";
import Link from "next/link";
import SocialMediaLinks from "../components/SocialMediaLinks";
import PoweredByAI from "../components/PoweredByAI";
import TradingInsights from "../components/TradingInsights";
import RiskDisclaimer from "../components/RiskDisclaimer";
import Footer from "../components/Footer";
import TradingProfiles from "../components/TradingProfiles";
import TechnicalAnalysisPeriodicTable from "../components/TechnicalAnalysisPeriodicTable";
import CombinedFlashSaleBanner from "../components/CombinedFlashSaleBanner";
import TradersPoolLogo from "../components/TradersPoolLogo";
import newsThatMatters from "../data/newsThatMatters";
import cmeUsData from "../data/cmeUsData";
import { BookOpen, Newspaper } from "lucide-react";
import WarrantyBadge from "../components/WarrantyBadge";
import BlogBadge from "../components/BlogBadge";
export const metadata = {
  title: 'TRADERSPOOL - The Pioneering AI-Engineered Collaborative Trading Hub',
  description: 'Dive into the ultimate AI-powered hub—connect with pro traders in a buzzing community, unlock elite signals and bots, and dominate markets with our cutting-edge multi-agent tech.',
};
export default function Home() {
  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300">
      <section className="relative overflow-hidden py-6 mobile:py-8 tablet:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 mobile:px-6">
          {/* Title Section - Centered */}
          <div className="text-center mb-16 mobile:mb-20">
            <h1 className="text-2xl mobile:text-3xl tablet:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight transition-colors duration-300 mb-6">
              <TradersPoolLogo size="large" href="" />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                : Revolutionize Your Trading Game!
              </span>
            </h1>
            <p className="mt-6 mobile:mt-7 text-base mobile:text-lg text-neutral-300 max-w-full mobile:max-w-3xl mx-auto dark:text-neutral-200 transition-colors duration-300 px-2 mb-6">
              Join the AI Trading Hub: Connect with pros, unlock elite signals &amp; bots, and crush markets with multi-agent tech. Seamless. Smart. Unstoppable.
            </p>
            <div className="mt-8 flex flex-col gap-8 items-center">
              <div className="w-full max-w-4xl mb-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm font-medium">Contact Us</span>
                  <div className="flex items-center gap-2">
                    <a href="https://wa.me/18632101640?text=Hello%20from%20your%20site" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.52 3.48A11.95 11.95 0 0 0 12 .04 11.96 11.96 0 0 0 3.48 3.48 11.95 11.95 0 0 0 .04 12c0 2.11.55 4.09 1.6 5.86L0 24l5.88-1.56A11.95 11.95 0 0 0 12 23.96c3.21 0 6.22-1.25 8.48-3.52A11.95 11.95 0 0 0 23.96 12 11.95 11.95 0 0 0 20.52 3.48zM12 21.5c-2.03 0-4-0.53-5.72-1.53l-0.41-0.25-3.49 0.92 0.92-3.4-0.26-0.42A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 1 1 12 21.5z" />
                        <path d="M17.6 14.2c-0.3-0.15-1.78-0.88-2.05-0.98-0.27-0.1-0.47-0.15-0.67 0.15-0.2 0.31-0.78 0.98-.96 1.18-0.18 0.2-0.36 0.22-0.66 0.07-0.3-0.15-1.25-0.46-2.38-1.47-0.88-0.78-1.48-1.74-1.65-2.04-0.17-0.3-.02-0.46.13-0.61.13-0.13.3-0.36.45-0.54.15-0.18.2-0.3.3-0.5.1-0.2.05-0.37-.02-0.52-0.07-0.14-0.67-1.62-.92-2.22-0.24-0.58-0.49-0.5-0.67-0.51-0.17-0.01-0.37-.01-0.57-.01-0.2 0-0.52 0.07-0.8 0.37-0.28 0.3-1.08 1.05-1.08 2.56s1.11 2.98 1.27 3.19c0.16 0.2 2.2 3.36 5.34 4.71 0.75 0.32 1.33 0.51 1.79 0.65 0.75 0.24 1.43 0.21 1.97 0.13 0.6-0.09 1.78-0.73 2.03-1.43 0.25-0.7.25-1.3.18-1.43-0.07-0.13-0.26-0.2-0.56-0.35z" />
                      </svg>
                    </a>
                    <a href="https://discord.gg/Yc7dVvGV" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.369A19.791 19.791 0 0 0 16.17 3c-.2.35-.43.82-.59 1.18-1.78-.27-3.5-.27-5.18 0-.16-.36-.39-.83-.59-1.18A19.736 19.736 0 0 0 3.683 4.37C1.48 9.09.671 13.637 1.346 18.08c2.18 1.59 4.33 2.49 6.48 3.11 0 0 .53-.72.95-1.34-1.86-.56-3.22-1.58-3.22-1.58 0 0 .55.37 1.5.86 2.78 1.23 5.92 1.24 8.8 0 0 .01 1.12-.52 1.5-.86 0 0-1.35 1.03-3.22 1.58.42.62.95 1.34.95 1.34 2.15-.62 4.3-1.51 6.48-3.11.675-4.44-.134-8.99-2.347-13.71zM9.75 15.02c-1.1 0-2-.99-2-2.21 0-1.22.9-2.21 2-2.21s2 .99 2 2.21c0 1.22-.9 2.21-2 2.21zm4.5 0c-1.1 0-2-.99-2-2.21 0-1.22.9-2.21 2-2.21s2 .99 2 2.21c0 1.22-.9 2.21-2 2.21z" />
                      </svg>
                    </a>
                    <a href="https://t.me/+16673164844" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.1.56 4.06 1.54 5.78L2.7 24l5.06-1.62C9.2 22.7 10.58 23 12 23c6.63 0 12-5.37 12-11.99C24 5.37 18.63 0 12 0zm5.6 8.3l-1.67 7.85c-.12.56-.43.7-.87.44l-2.42-1.79-1.17 1.12c-.13.13-.24.24-.49.24l.18-2.55 4.63-4.18c.2-.18-.04-.28-.31-.1L7.8 11.6 4.37 10.5c-.6-.17-.61-.6.13-.89L18 6.6c.52-.17.98.13.6 1.7z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <BlogBadge />
                </div>
                <WarrantyBadge />
              </div>
            </div>
          </div>
          {/* Combined Flash Sale Banner */}
          <CombinedFlashSaleBanner />
          {/* FLASH SALE Grab Offer Button */}
          <div className="flex justify-end mt-4 mb-4">
            <Link href="/payment?plan=diamond&duration=yearly&amount=400&flashsale=true">
              <button className="bg-neutral-900 text-orange-400 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition-all text-lg flex items-center gap-2">
                <span>⚡ Grab Offer</span>
              </button>
            </Link>
          </div>
          {/* Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mobile:gap-8 items-start mb-6">
            {/* Left Column - Login and Connect */}
            <div className="space-y-3 order-2 lg:order-1">
              <div className="text-center lg:text-left">
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
                  <TradingInsights title="CME and U.S Data" customData={cmeUsData} />
                </div>
                {/* Trading Insights Section - News That Matters */}
                <div className="mt-4">
                  <TradingInsights title="News That Matters" customData={newsThatMatters} />
                </div>
              </div>
            </div>
            {/* Right Column - Trading Analytics */}
            <div className="order-1 lg:order-2 lg:pl-4">
              <TradingProfiles />
              {/* Technical Analysis Periodic Table - Below Advanced Technical Analysis */}
              <TechnicalAnalysisPeriodicTable />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* Product Names and Brands Disclaimer */}
      <div className="border-t border-neutral-900/50 bg-[#0b0b0e]/80 backdrop-blur py-4">
        <div className="mx-auto max-w-7xl px-4 mobile:px-6">
          <p className="text-center text-neutral-400 dark:text-neutral-300 text-xs leading-relaxed">
            The product names, logos and brands used on this website are for identification purposes only. Registered names and trademarks are the copyright and property of their respective owners.
          </p>
        </div>
      </div>
    </main>
  );
}