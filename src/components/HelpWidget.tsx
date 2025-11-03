"use client";

import { useState } from "react";
import { HelpCircle, Phone, BookOpen, Users, Lightbulb, MessageSquareText, X } from "lucide-react";
import Link from "next/link";

export default function HelpWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-6 z-[60]">
      {/* Toggle button */}
      <button
        aria-label={open ? "Close help" : "Help"}
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 text-white focus:outline-none"
      >
        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all border border-emerald-400/40 ${open ? 'hidden' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="text-sm font-medium">How can we help you?</span>
        </span>
        <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 border border-emerald-400/40 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
          {open ? (
            <X className="w-6 h-6 md:w-7 md:h-7" />
          ) : (
            <MessageSquareText className="w-6 h-6 md:w-7 md:h-7" />
          )}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute bottom-20 right-0 w-80 max-w-[85vw] p-4 rounded-xl bg-[#0b0b0e]/95 backdrop-blur border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-5 h-5 text-blue-300" />
            <h3 className="text-lg font-semibold text-white">Help & Support</h3>
          </div>
          <p className="text-sm text-neutral-300 mb-4">
            Get quick assistance, explore guides, join the community, or suggest new features.
          </p>

          <div className="space-y-2">

            <Link href="/blog" className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <BookOpen className="w-4 h-4 mt-0.5 text-blue-300" />
              <div>
                <h4 className="text-sm font-medium text-white">Knowledgebase</h4>
                <p className="text-xs text-neutral-300">Technical Analysis and other data.</p>
              </div>
            </Link>

            <Link href="/blog" className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
              <HelpCircle className="w-4 h-4 mt-0.5 text-cyan-300" />
              <div>
                <h4 className="text-sm font-medium text-white">FAQ</h4>
                <p className="text-xs text-neutral-300">Browse frequently asked questions with quick answers.</p>
              </div>
            </Link>


            <div className="group flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-300" />
              <div>
                <h4 className="text-sm font-medium text-white">Feature Suggestion</h4>
                <p className="text-xs text-neutral-300">Request improvements or new capabilities for TradersPool.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
