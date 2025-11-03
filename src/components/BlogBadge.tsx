"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function BlogBadge() {
  return (
    <div className="flex justify-center">
      <Link
        href="/blog"
        className="relative group inline-flex items-center gap-2 rounded-xl pl-4 pr-12 py-2 bg-blue-900/70 hover:bg-blue-900/80 border border-blue-700 text-blue-100 transition-all shadow-sm hover:shadow-md"
        aria-label="Visit our blog"
      >
        <span className="pointer-events-none absolute -top-0.5 -right-0.5 w-10 h-10 overflow-hidden rounded-tr-xl">
          <span className="absolute -top-6 right-0 w-12 h-12 rotate-45 bg-blue-600 group-hover:bg-blue-500 transition-colors" />
        </span>
        <BookOpen className="w-5 h-5 text-blue-300" />
        <span className="text-sm font-semibold tracking-wide">Visit our Blog</span>
      </Link>
    </div>
  );
}
