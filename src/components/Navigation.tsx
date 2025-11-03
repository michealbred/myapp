'use client';
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAboutToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutOpen((v) => !v);
  };

  const NavLinks = (
    <>
      <Link
        href="/blog"
        className="rounded-md px-2.5 py-1.5 text-[11px] mobile:text-sm bg-[#007BFF] text-white hover:bg-[#0069d9] transition-colors whitespace-nowrap"
        onClick={() => setMobileOpen(false)}
      >
        Blog
      </Link>
      <Link
        href="/"
        className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white hover:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 transition-all duration-200 whitespace-nowrap"
        onClick={() => setMobileOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/signal-premium"
        className="rounded-md px-2.5 py-1.5 text-[11px] mobile:text-sm bg-[#007BFF] text-white hover:bg-[#0069d9] transition-colors whitespace-nowrap"
        onClick={() => setMobileOpen(false)}
      >
        Premiums
      </Link>

      {/* About Dropdown */}
      <div
        ref={aboutRef}
        className="relative"
        onMouseEnter={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        <button
          onClick={handleAboutToggle}
          className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white hover:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 flex items-center gap-1 transition-all duration-200 whitespace-nowrap"
        >
          About
          <ChevronDown
            className={`w-3 h-3 mobile:w-4 mobile:h-4 transform transition-transform duration-200 ${
              aboutOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        {aboutOpen && (
          <div className="absolute top-full right-0 mt-1 w-44 mobile:w-56 bg-[#0b0b0e]/95 backdrop-blur border border-neutral-800 rounded-md shadow-lg z-[100] max-h-64 overflow-y-auto">
            {aboutLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 mobile:px-4 py-2 mobile:py-3 text-xs mobile:text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                onClick={() => { setAboutOpen(false); setMobileOpen(false); }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const AuthLinks = null;

  return (
    <nav className="flex items-center gap-2 relative">
      {/* Mobile toggle */}
      <button
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-white"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1 mobile:gap-2">
        {NavLinks}
        {AuthLinks}
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-full right-0 mt-2 w-[min(92vw,22rem)] bg-[#0b0b0e]/95 border border-white/10 rounded-xl shadow-2xl p-3 md:hidden z-[200]">
            <div className="flex flex-col gap-2">
              {NavLinks}
              {AuthLinks}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
