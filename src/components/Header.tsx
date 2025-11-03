'use client';
import Navigation from "./Navigation";
import TradersPoolLogo from "./TradersPoolLogo";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900 bg-[#0b0b0e]/60 backdrop-blur dark:border-neutral-700 dark:bg-gray-900/60 transition-colors duration-300 pt-safe">
      <div className="mx-auto max-w-7xl px-4 mobile:px-6 py-3 mobile:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TradersPoolLogo size="small" href="/" />
        </div>
        <Navigation />
      </div>
    </header>
  );
}