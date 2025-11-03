import React from 'react';
import { Metadata } from 'next';
import { blogLinks } from '../../data/blogLinks';
import BlogSectionsClient from '../../components/BlogSectionsClient';
import newsThatMatters from '../../data/newsThatMatters';
import onchainInsights from '../../data/onchainInsights';
import cmeUsData from '../../data/cmeUsData';

export const metadata: Metadata = {
  title: 'Blog - TRADERSPOOL',
  description:
    'Trading insights, market analysis, and AI-powered investment strategies from the TradersPool community.',
};

export default function BlogPage() {
  const toLower = (s: string) => s.toLowerCase();

  const valueAreas = blogLinks.filter((p) => {
    const n = toLower(p.name);
    return (
      n.includes('cme') ||
      n.includes('fibonacci') ||
      n.includes('value area') ||
      n.includes('0.618') ||
      n.includes('solana')
    );
  });

  const dailyAnalysis = blogLinks.filter((p) => toLower(p.name).startsWith('btc daily analysis'));

  const whalesInstitutions = blogLinks.filter((p) => {
    const n = toLower(p.name);
    return n.includes('machi') || n.includes('wynn') || n.includes('whale') || n.includes('institution');
  });

  const used = new Set<string>([...valueAreas, ...dailyAnalysis, ...whalesInstitutions].map((p) => p.href));
  const remaining = blogLinks.filter((p) => !used.has(p.href));
  const valueAreasAll = [...valueAreas, ...remaining];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold leading-normal tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              TradersPool Blog
            </h1>
            <h2 className="mt-2 text-sm font-semibold text-white max-w-3xl mx-auto">
              Explore our AI insights in technical analysis
            </h2>
          </div>

          <BlogSectionsClient
            valueAreasAll={valueAreasAll}
            dailyAnalysis={dailyAnalysis}
            whalesInstitutions={whalesInstitutions}
            newsThatMatters={newsThatMatters}
            onchainInsights={onchainInsights}
            cmeUsData={cmeUsData}
          />

        </div>
      </div>
    </main>
  );
}
