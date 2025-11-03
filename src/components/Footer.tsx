import Link from "next/link";

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "AML Policy", href: "/aml" }
  ];

  return (
    <footer className="border-t border-neutral-900/50 bg-[#0b0b0e]/80 backdrop-blur dark:border-neutral-700 dark:bg-gray-900/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Contact Information
            </h3>
            <div className="space-y-2 text-neutral-400 dark:text-neutral-300 text-sm">
              <p>WCEGA Tower, 21 Bukit Batok Cres</p>
              <p>Singapore 658065</p>
            </div>
          </div>

        </div>

        {/* Follow & Copyright */}
        <div className="border-t border-neutral-800 dark:border-neutral-700 mt-4 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Contact Us</span>
              <div className="flex items-center gap-2">
                <a href="https://wa.me/18632101640?text=Hello%20from%20your%20site" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.95 11.95 0 0 0 12 .04 11.96 11.96 0 0 0 3.48 3.48 11.95 11.95 0 0 0 .04 12c0 2.11.55 4.09 1.6 5.86L0 24l5.88-1.56A11.95 11.95 0 0 0 12 23.96c3.21 0 6.22-1.25 8.48-3.52A11.95 11.95 0 0 0 23.96 12 11.95 11.95 0 0 0 20.52 3.48zM12 21.5c-2.03 0-4-0.53-5.72-1.53l-0.41-0.25-3.49 0.92 0.92-3.4-0.26-0.42A9.5 9.5 0 1 1 21.5 12 9.5 9.5 0 0 1 12 21.5z" />
                    <path d="M17.6 14.2c-0.3-0.15-1.78-0.88-2.05-0.98-0.27-0.1-0.47-0.15-0.67 0.15-0.2 0.31-0.78 0.98-.96 1.18-0.18 0.2-0.36 0.22-0.66 0.07-0.3-0.15-1.25-0.46-2.38-1.47-0.88-0.78-1.48-1.74-1.65-2.04-0.17-0.3-.02-0.46.13-0.61.13-0.13.3-0.36.45-0.54.15-0.18.2-0.3.3-0.5.1-0.2 0.05-0.37-.02-0.52-0.07-0.14-0.67-1.62-.92-2.22-0.24-0.58-0.49-0.5-0.67-0.51-0.17-0.01-0.37-.01-0.57-.01-0.2 0-0.52 0.07-0.8 0.37-0.28 0.3-1.08 1.05-1.08 2.56s1.11 2.98 1.27 3.19c0.16 0.2 2.2 3.36 5.34 4.71 0.75 0.32 1.33 0.51 1.79 0.65 0.75 0.24 1.43 0.21 1.97 0.13 0.6-0.09 1.78-0.73 2.03-1.43 0.25-0.7.25-1.3.18-1.43-0.07-0.13-0.26-0.2-0.56-0.35z" />
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

            <p className="text-center sm:text-right text-neutral-400 dark:text-neutral-300 text-sm">© 2021 TradersPool. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
