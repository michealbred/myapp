"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TradingInsights from "./TradingInsights";

type BlogPost = {
  href: string;
  name: string;
  image?: string;
  imageAlt?: string;
};

type NewsItem = {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
  category?: string;
  categoryColor?: string;
  timeAgo?: string;
};

type OnchainItem = {
  id: string | number;
  title: string;
  image?: string;
  description?: string;
  category?: string;
  categoryColor?: string;
  timeAgo?: string;
  link?: string;
};

import type { CmeUsCard } from "../data/cmeUsData";

type Props = {
  valueAreasAll: BlogPost[];
  dailyAnalysis: BlogPost[];
  whalesInstitutions: BlogPost[];
  newsThatMatters: NewsItem[];
  onchainInsights: OnchainItem[];
  cmeUsData: CmeUsCard[];
};

export default function BlogSectionsClient({
  valueAreasAll,
  dailyAnalysis,
  whalesInstitutions,
  newsThatMatters,
  onchainInsights,
  cmeUsData,
}: Props) {
  const [active, setActive] = useState<string>("value-areas");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActive(hash);
    }
  }, []);

  const openSection = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setActive(id);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="grid grid-cols-6 gap-4 mb-6">
        <button
          onClick={openSection("value-areas")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${
            active === "value-areas" ? "bg-blue-700/60" : "bg-white/5"
          } hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">BTC Value Areas</span>
        </button>

        <button
          onClick={openSection("daily-analysis")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${
            active === "daily-analysis" ? "bg-blue-700/60" : "bg-white/5"
          } hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">BTC Daily Analysis</span>
        </button>

        <button
          onClick={openSection("whales-institutions")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${
            active === "whales-institutions" ? "bg-blue-700/60" : "bg-white/5"
          } hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">Whales & Institutions</span>
        </button>

        <button
          onClick={openSection("news")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${active === "news" ? "bg-blue-700/60" : "bg-white/5"} hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">News</span>
        </button>

        <button
          onClick={openSection("onchain")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${active === "onchain" ? "bg-blue-700/60" : "bg-white/5"} hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">Onchain Data</span>
        </button>

        <button
          onClick={openSection("cme")}
          className={`flex flex-col items-center justify-center text-center p-3 rounded-md ${active === "cme" ? "bg-blue-700/60" : "bg-white/5"} hover:bg-white/10`}
        >
          <span className="text-sm font-semibold">CME Data</span>
        </button>
      </nav>

      {/* Sections: only the active one renders */}
      {active === "value-areas" && (
        <section id="value-areas" className="mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">BTC Value Areas</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {valueAreasAll.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group flex flex-col sm:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]"
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.name}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-28 sm:h-[63px] sm:w-24 object-cover rounded-md border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-[63px] w-24 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{post.name}</h4>
                      <p className="text-[11px] text-neutral-300 mt-1">Read more</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}

      {active === "daily-analysis" && (
        <section id="daily-analysis" className="mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">BTC Daily Analysis</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {dailyAnalysis.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group flex flex-col sm:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]"
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.name}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-28 sm:h-[63px] sm:w-24 object-cover rounded-md border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-[63px] w-24 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{post.name}</h4>
                      <p className="text-[11px] text-neutral-300 mt-1">Read more</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}

      {active === "whales-institutions" && (
        <section id="whales-institutions" className="mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">Whales, Institutions Analysis</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {whalesInstitutions.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="group flex flex-col sm:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]"
                  >
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.name}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-28 sm:h-[63px] sm:w-24 object-cover rounded-md border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-[63px] w-24 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{post.name}</h4>
                      <p className="text-[11px] text-neutral-300 mt-1">Read more</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}

      {active === "news" && (
        <section id="news" className="mt-12 mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">News That Matters</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {newsThatMatters.map((item) => (
                  <div key={item.id} className="group flex flex-col sm:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-28 sm:h-[63px] sm:w-24 object-cover rounded-md border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-[63px] w-24 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] px-2 py-1 rounded-full text-white ${item.categoryColor?.replace('/90','/60') || ''}`}>{item.category}</span>
                        <span className="text-xs text-neutral-400">{item.timeAgo}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-neutral-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}

      {active === "onchain" && (
        <section id="onchain" className="mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">Onchain Data</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {onchainInsights.map((item) => (
                  <a
                    key={item.id}
                    href={item.link || "#"}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    className="group flex flex-col sm:flex-row items-center gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-28 sm:h-[63px] sm:w-24 object-cover rounded-md border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="h-[63px] w-24 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] px-2 py-1 rounded-full text-white ${item.categoryColor?.replace('/90','/60') || ''}`}>{item.category}</span>
                        <span className="text-xs text-neutral-400">{item.timeAgo}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      {item.description && <p className="text-[11px] text-neutral-300 mt-1">{item.description}</p>}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}

      {active === "cme" && (
        <section id="cme" className="mb-12">
          <h3 className="text-3xl sm:text-2xl font-bold mb-6 text-white">CME Data</h3>
          <div className="flex gap-6">
            <div className="w-2/3 pr-6 border-r border-white/10">
              <div className="flex flex-col gap-4">
                {cmeUsData.map((item) => (
                  <div key={item.id} className="group flex flex-col sm:flex-row items-start gap-3 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 p-3 hover:bg-white/10 transition-all duration-200 hover:shadow-lg w-full sm:w-[87%] mx-auto min-h-[96px]">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-20 w-28 sm:h-[72px] sm:w-28 object-cover rounded-md border border-white/10 flex-shrink-0" />
                    ) : (
                      <div className="h-[72px] w-28 rounded-md bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] px-2 py-1 rounded-full text-white ${item.categoryColor.replace('/90','/60')}`}>{item.category}</span>
                        <span className="text-[11px] text-neutral-400">{item.timeAgo}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-neutral-300 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/3 pl-6" />
          </div>
        </section>
      )}
    </>
  );
}
