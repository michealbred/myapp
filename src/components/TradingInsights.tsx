'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface TradingInsight {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  tokens: string;
  entities: string;
  timeAgo: string;
  updates: number;
  link?: string;
  description?: string;
  image?: string;
}

const tradingInsights: TradingInsight[] = [
  {
    id: '1',
    category: 'On-Chain Trade',
    categoryColor: 'bg-blue-600/90',
    title: 'BlackRock is selling $ETH and $BTC.',
    tokens: '💎',
    entities: '🏢',
    timeAgo: '4 hours ago',
    updates: 1,
    link: 'https://intel.arkm.com/explorer/entity/blackrock'
  },
  {
    id: 'ena-trader',
    category: 'Liquidation Risk',
    categoryColor: 'bg-orange-600/90',
    title: 'Trader 0x2611 is down over $1.85M on his $ENA long.',
    tokens: '📉',
    entities: '⚠️',
    timeAgo: '4 hours ago',
    updates: 1,
    description: 'To avoid liquidation, he deposited another 1.7M $USDC into Hyperliquid 4 hours ago.',
    link: 'https://hypurrscan.io/address/0x261142Dd1d82Cf24228bD35B1FC65BD805AF842D'
  },
  {
    id: 'machi-yzy',
    category: 'Leveraged Long',
    categoryColor: 'bg-green-600/90',
    title: 'Machi Big Brother Goes 3x Long on $YZY',
    tokens: '📈',
    entities: '💰',
    timeAgo: 'Recently',
    updates: 1,
    description: 'Opened a 3x leveraged long position of 570,000 $YZY ($613.8K) on the market.',
    link: 'https://hypurrscan.io/address/0x020ca66c30bec2c4fe3861a94e4db4a498a35872'
  },
  {
    id: 'bio-whale',
    category: 'Whale Activity',
    categoryColor: 'bg-red-600/90',
    title: 'BIO Protocol Faces Major Whale Distribution',
    tokens: '🔻',
    entities: '🐋',
    timeAgo: '11 hours ago',
    updates: 20,
    description: 'BIO faces major volatility from whale activity. Arthur Hayes\'s 7.66M purchase was followed by large-scale profit-taking by major holders.',
    link: 'https://intel.arkm.com/explorer/entity/arthur-hayes'
  }
];

interface TradingInsightsProps {
  title?: string;
  customData?: TradingInsight[];
  displayMode?: 'carousel' | 'stack';
}

export default function TradingInsights({ title = "Track Onchain Whale Activities", customData, displayMode = 'carousel' }: TradingInsightsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const dataToUse = customData || tradingInsights;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay || displayMode !== 'carousel') return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= dataToUse.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, dataToUse.length, displayMode]);

  const nextInsights = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= dataToUse.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlay(false);
  };

  const prevInsights = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataToUse.length - 1 : prevIndex - 1
    );
    setIsAutoPlay(false);
  };

  const visibleInsights = dataToUse.slice(currentIndex, currentIndex + 3);

  return (
    <div className="mt-4 mobile:mt-6 w-full">
      <div className="flex items-center justify-between mb-2 mobile:mb-3">
        <h3 className="text-xs mobile:text-sm font-medium text-neutral-400 dark:text-neutral-300 transition-colors duration-300 hover:text-neutral-200 cursor-default">
          {title}
        </h3>
        {displayMode === 'carousel' && (
          <div className="flex items-center gap-0.5 mobile:gap-1">
            <button
              onClick={prevInsights}
              className="p-1 rounded hover:bg-white/10 transition-colors duration-200 group"
              aria-label="Previous insights"
            >
              <ChevronLeft className="h-3.5 mobile:h-4 w-3.5 mobile:w-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            </button>
            <button
              onClick={nextInsights}
              className="p-1 rounded hover:bg-white/10 transition-colors duration-200 group"
              aria-label="Next insights"
            >
              <ChevronRight className="h-3.5 mobile:h-4 w-3.5 mobile:w-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            </button>
          </div>
        )}
      </div>

      {displayMode === 'carousel' ? (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {dataToUse.map((insight) => {
            const CardContent = () => (
              <div className="grid grid-cols-1 tablet:grid-cols-[1fr_2fr] gap-3 mobile:gap-4 items-center">
                {/* Icon/Badge Section - Left Side */}
                <div className="group order-1">
                  <div className={`relative h-16 md:h-20 rounded-lg overflow-hidden border border-white/20 ${insight.categoryColor.replace('/90', '/20')} hover:border-white/30 transition-all duration-300 hover:shadow-xl flex items-center justify-center ${(insight.id === '1' || insight.id === 'cme-btc' || insight.id === 'ena-trader' || insight.id === 'machi-yzy' || insight.id === 'bio-whale' || insight.image) ? 'p-0' : 'p-3'}`}>
                    {insight.image ? (
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === '1' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2Fa278bf8f27fd4fe1be317d57ff8a4ae9%2Fb8f8007a9c7f42f68b829af30c0f2f74?format=webp&width=800"
                        alt="BlackRock"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'cme-btc' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fb0429a43fc014c61bfb26dfee94be103?format=webp&width=800"
                        alt="CME Group"
                        fill
                        className="object-contain p-2"
                      />
                    ) : insight.id === 'ena-trader' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fc9cb738178c2410fbe7babc8ab2ce106?format=webp&width=800"
                        alt="ENA Trader Position"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'machi-yzy' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2F665b9f55c74c48928dfe1837c4993e40?format=webp&width=800"
                        alt="Machi Big Brother YZY Position"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'bio-whale' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fe45475fb15f4460e82daa651d40fb4c7?format=webp&width=800"
                        alt="BIO Protocol"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-xl md:text-2xl">{insight.tokens}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

                    {/* Floating badge - hidden for custom cards */}
                    {insight.id !== '1' && insight.id !== 'ena-trader' && insight.id !== 'machi-yzy' && insight.id !== 'bio-whale' && !insight.image && (
                      <div className={`absolute top-2 left-2 ${insight.categoryColor} backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium`}>
                        {insight.category}
                        {insight.link && <ExternalLink className="h-3 w-3 ml-1 inline" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="space-y-3 order-2">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white dark:text-neutral-100 mb-2 group-hover:text-blue-200 transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-neutral-300 dark:text-neutral-200 leading-relaxed mb-2">
                      {insight.description || (insight.id === '1'
                        ? 'Four hours ago, BlackRock transferred 1,885 BTC (valued at $111.66M) and 59,606 ETH (worth $254.43M) to Coinbase Prime. 21 August'
                        : insight.id === 'ena-trader'
                        ? 'To avoid liquidation, he deposited another 1.7M $USDC into Hyperliquid 4 hours ago.'
                        : insight.id === 'machi-yzy'
                        ? 'Machi Big Brother(@machibigbrother) just opened a 3x leveraged long on $YZY, with a position of 570,000 $YZY($613.8K).'
                        : insight.id === 'bio-whale'
                        ? 'BIO faces major volatility from whale activity. Arthur Hayes\'s 7.66M purchase was followed by large-scale profit-taking by major holders.'
                        : insight.id?.startsWith('cme-')
                        ? `Settlement Price: ${insight.updates} • ${insight.timeAgo}`
                        : `${insight.updates} updates • ${insight.timeAgo}`
                      )}
                    </p>
                  </div>

                  {/* On-Chain Trade Link - Only show for cards with links */}
                  {insight.link && (
                    <div className="flex items-center justify-center">
                      <a
                        href={insight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-blue-600/10 hover:bg-blue-600/20 px-3 py-2 rounded-lg border border-blue-600/20 hover:border-blue-600/40"
                      >
                        <span className="text-lg">🔗</span>
                        <span>View On-Chain Data</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );

            const cardClasses = `flex-shrink-0 w-full bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-3 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer group`;

            return (
              <div
                key={insight.id}
                className={cardClasses}
              >
                <CardContent />
              </div>
            );
            })}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {dataToUse.map((insight) => {
            const cardClasses = `w-full bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-xl p-3 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer group`;
            const CardContent = () => (
              <div className="grid grid-cols-1 tablet:grid-cols-[1fr_2fr] gap-3 mobile:gap-4 items-center">
                {/* Icon/Badge Section - Left Side */}
                <div className="group order-1">
                  <div className={`relative h-16 md:h-20 rounded-lg overflow-hidden border border-white/20 ${insight.categoryColor.replace('/90', '/20')} hover:border-white/30 transition-all duration-300 hover:shadow-xl flex items-center justify-center ${(insight.id === '1' || insight.id === 'cme-btc' || insight.id === 'ena-trader' || insight.id === 'machi-yzy' || insight.id === 'bio-whale' || insight.image) ? 'p-0' : 'p-3'}`}>
                    {insight.image ? (
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === '1' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2Fa278bf8f27fd4fe1be317d57ff8a4ae9%2Fb8f8007a9c7f42f68b829af30c0f2f74?format=webp&width=800"
                        alt="BlackRock"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'cme-btc' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fb0429a43fc014c61bfb26dfee94be103?format=webp&width=800"
                        alt="CME Group"
                        fill
                        className="object-contain p-2"
                      />
                    ) : insight.id === 'ena-trader' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fc9cb738178c2410fbe7babc8ab2ce106?format=webp&width=800"
                        alt="ENA Trader Position"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'machi-yzy' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2F665b9f55c74c48928dfe1837c4993e40?format=webp&width=800"
                        alt="Machi Big Brother YZY Position"
                        fill
                        className="object-cover"
                      />
                    ) : insight.id === 'bio-whale' ? (
                      <Image
                        src="https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fe45475fb15f4460e82daa651d40fb4c7?format=webp&width=800"
                        alt="BIO Protocol"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-xl md:text-2xl">{insight.tokens}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>

                    {/* Floating badge - hidden for custom cards */}
                    {insight.id !== '1' && insight.id !== 'ena-trader' && insight.id !== 'machi-yzy' && insight.id !== 'bio-whale' && !insight.image && (
                      <div className={`absolute top-2 left-2 ${insight.categoryColor} backdrop-blur text-white px-2 py-1 rounded-full text-xs font-medium`}>
                        {insight.category}
                        {insight.link && <ExternalLink className="h-3 w-3 ml-1 inline" />}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="space-y-3 order-2">
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-white dark:text-neutral-100 mb-2 group-hover:text-blue-200 transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-neutral-300 dark:text-neutral-200 leading-relaxed mb-2">
                      {insight.description || (insight.id === '1'
                        ? 'Four hours ago, BlackRock transferred 1,885 BTC (valued at $111.66M) and 59,606 ETH (worth $254.43M) to Coinbase Prime. 21 August'
                        : insight.id === 'ena-trader'
                        ? 'To avoid liquidation, he deposited another 1.7M $USDC into Hyperliquid 4 hours ago.'
                        : insight.id === 'machi-yzy'
                        ? 'Machi Big Brother(@machibigbrother) just opened a 3x leveraged long on $YZY, with a position of 570,000 $YZY($613.8K).'
                        : insight.id === 'bio-whale'
                        ? 'BIO faces major volatility from whale activity. Arthur Hayes\'s 7.66M purchase was followed by large-scale profit-taking by major holders.'
                        : insight.id?.startsWith('cme-')
                        ? `Settlement Price: ${insight.updates} • ${insight.timeAgo}`
                        : `${insight.updates} updates • ${insight.timeAgo}`
                      )}
                    </p>
                  </div>

                  {/* On-Chain Trade Link - Only show for cards with links */}
                  {insight.link && (
                    <div className="flex items-center justify-center">
                      <a
                        href={insight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-blue-600/10 hover:bg-blue-600/20 px-3 py-2 rounded-lg border border-blue-600/20 hover:border-blue-600/40"
                      >
                        <span className="text-lg">🔗</span>
                        <span>View On-Chain Data</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <div key={insight.id} className={cardClasses}>
                <CardContent />
              </div>
            );
          })}
        </div>
      )}

      {displayMode === 'carousel' && (
        <div className="flex items-center justify-center gap-1 mt-3">
          {dataToUse.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-blue-500 w-6'
                  : 'bg-white/30 hover:bg-white/60 w-1.5'
              }`}
              aria-label={`Go to insight ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
