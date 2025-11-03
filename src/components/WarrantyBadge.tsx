"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function WarrantyBadge() {
  return (
    <div className="mt-3 flex justify-center">
      <Link
        href="/warranty"
        className="relative group inline-flex items-center gap-2 rounded-xl pl-5 pr-14 py-2.5 bg-emerald-900/70 hover:bg-emerald-900/80 border border-emerald-700 text-emerald-100 transition-all shadow-sm hover:shadow-md"
        aria-label="Read our warranty terms"
      >
        <span className="pointer-events-none absolute -top-0.5 -right-0.5 w-12 h-12 overflow-hidden rounded-tr-xl">
          <span className="absolute -top-7 right-0 w-14 h-14 rotate-45 bg-emerald-600 group-hover:bg-emerald-500 transition-colors" />
        </span>
        <ShieldCheck className="w-6 h-6 text-emerald-300" />
        <span className="text-base font-semibold tracking-wide">Warranty</span>
      </Link>
    </div>
  );
}
