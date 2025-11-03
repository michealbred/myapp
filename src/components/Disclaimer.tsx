'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Info } from 'lucide-react';

export default function Disclaimer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t border-neutral-800 bg-neutral-950/40 py-3">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs text-neutral-400">
          {/* Compact Summary */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <p className="text-neutral-300">
                <strong>Risk Warning:</strong> Trading involves substantial risk. Past performance doesn't guarantee future results.
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="ml-2 text-blue-400 hover:text-blue-300 underline"
                >
                  {isExpanded ? 'Show Less' : 'Full Disclosure'}
                </button>
              </p>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expandable Full Disclosure */}
          {isExpanded && (
            <div className="mt-3 grid md:grid-cols-2 gap-3 text-xs">
              <div className="space-y-2">
                <div className="bg-red-900/20 border border-red-700/50 rounded p-2">
                  <p className="text-red-200 font-medium mb-1">Risk Disclosure</p>
                  <p>Trading entails considerable financial loss potential. Leverage magnifies both gains and losses. Evaluate your risk tolerance before participating.</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded p-2">
                  <p className="text-blue-200 font-medium mb-1">Educational Content</p>
                  <p>Platform content is informational only—not financial advice or investment recommendations. Provided "as is" without guarantees.</p>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-2">
                  <p className="text-yellow-200 font-medium mb-1">No Investment Advice</p>
                  <p>No tailored investment counsel provided. Conduct independent research and consult licensed professionals before trading.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-purple-900/20 border border-purple-700/50 rounded p-2">
                  <p className="text-purple-200 font-medium mb-1">Third-Party Services</p>
                  <p>External providers may be integrated. We disclaim responsibility for their accuracy or reliability.</p>
                </div>
                <div className="bg-gray-900/40 border border-gray-700/50 rounded p-2">
                  <p className="text-gray-200 font-medium mb-1">Liability Limits</p>
                  <p>We assume no responsibility for direct, indirect, or consequential damages from platform use or inability to access services.</p>
                </div>
                <div className="bg-green-900/20 border border-green-700/50 rounded p-2">
                  <p className="text-green-200 font-medium mb-1 flex items-center">
                    <Info className="w-3 h-3 mr-1" />
                    Quick Actions
                  </p>
                  <div className="flex gap-2 mt-1">
                    <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors">
                      Risk Assessment
                    </button>
                    <button className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors">
                      Education Hub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Copyright Footer */}
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-800/50">
            <p className="text-neutral-500">
              © 2021 TradersPool. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500">
              Financial trading carries elevated risks—verify complete understanding before proceeding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
