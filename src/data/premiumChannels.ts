export interface Channel {
  name: string;
  logo: string;
  description: string;
}

export interface ChannelGroup {
  id: number;
  title: string;
  description: string;
  channels: Channel[];
  category: string;
}

export interface ExclusiveChannel {
  name: string;
  logo: string;
  description: string;
}

export interface PremiumService {
  src: string;
  name: string;
}

// All premium channel groups from ChannelShowcase
export const premiumChannelGroups: ChannelGroup[] = [
  {
    id: 1,
    title: "Technical Analysis Experts",
    description: "Advanced charting and technical analysis communities",
    category: "Technical",
    channels: [
      { name: "21M Technicals", logo: "https://ext.same-assets.com/1159941532/4088475068.jpeg", description: "Technical analysis" },
      { name: "Warsnop ICF", logo: "https://ext.same-assets.com/1159941532/870417094.png", description: "Investment consulting" },
      { name: "Signal Express", logo: "https://ext.same-assets.com/1159941532/1742573608.png", description: "Fast signals" },
      { name: "Trade Devils", logo: "https://ext.same-assets.com/1159941532/4006297615.jpeg", description: "Aggressive trading" },
      { name: "Traders Grid", logo: "https://ext.same-assets.com/1159941532/1177884191.jpeg", description: "Grid trading" },
      { name: "Crypto Coin Coach", logo: "https://ext.same-assets.com/1159941532/3177441654.png", description: "Crypto coaching" }
    ]
  },
  {
    id: 2,
    title: "Premium Crypto Signals",
    description: "Top-tier crypto trading signals with proven track records",
    category: "Crypto",
    channels: [
      { name: "Haven Group", logo: "https://ugc.same-assets.com/xl_RbwfhXM5pu29w9DrpiZzLuzhnn6vN.jpeg", description: "Elite crypto signals" },
      { name: "Crypto Zone VIP", logo: "https://ext.same-assets.com/1159941532/1342270112.jpeg", description: "Professional trading" },
      { name: "The Birb Nest", logo: "https://ext.same-assets.com/1159941532/289527164.jpeg", description: "Community-driven signals" },
      { name: "Crypto King", logo: "https://ext.same-assets.com/1159941532/2881319521.png", description: "Market analysis" },
      { name: "Margin Whales", logo: "https://ext.same-assets.com/1159941532/1640121722.jpeg", description: "Whale tracking" },
      { name: "Crypto Cove", logo: "https://ext.same-assets.com/1159941532/2179604625.jpeg", description: "Technical analysis" }
    ]
  },
  {
    id: 3,
    title: "Forex & Trading Academy",
    description: "Professional forex education and live trading sessions",
    category: "Forex",
    channels: [
      { name: "Credible Crypto", logo: "https://ext.same-assets.com/1159941532/1902774596.jpeg", description: "Crypto trading education" },
      { name: "TraderSZ", logo: "https://ext.same-assets.com/1159941532/2901502568.jpeg", description: "Forex education" },
      { name: "Trading by CF", logo: "https://ext.same-assets.com/1159941532/437907161.png", description: "Live trading sessions" },
      { name: "Caixa Trading", logo: "https://ugc.same-assets.com/0fk1I7XiOIZHPCbiylQ9h8RwkTsL8mgO.jpeg", description: "Professional signals" },
      { name: "Ken Charts", logo: "https://ext.same-assets.com/1159941532/1174720029.jpeg", description: "Chart analysis" },
      { name: "Ritesh Trades", logo: "https://ext.same-assets.com/1159941532/2213053348.jpeg", description: "Market insights" }
    ]
  },
  {
    id: 4,
    title: "Options & Futures Hub",
    description: "Advanced options strategies and futures trading",
    category: "Options",
    channels: [
      { name: "Klondike PRO", logo: "https://ext.same-assets.com/1159941532/3961314525.jpeg", description: "Options strategies" },
      { name: "Whales Guide", logo: "https://ext.same-assets.com/1159941532/982377683.jpeg", description: "Market guidance" },
      { name: "Utopia Trading", logo: "https://ext.same-assets.com/1159941532/2435921417.png", description: "Futures trading" },
      { name: "Doctor Profit", logo: "https://ext.same-assets.com/1159941532/3658969275.png", description: "Trading psychology" },
      { name: "The Bulls", logo: "https://ext.same-assets.com/1159941532/3053139934.png", description: "Bullish strategies" },
      { name: "Universal Signals PRO", logo: "https://ext.same-assets.com/1159941532/390599703.jpeg", description: "Multi-market signals" }
    ]
  },
  {
    id: 5,
    title: "Premium VIP Lounges",
    description: "Exclusive VIP trading communities with premium access",
    category: "VIP",
    channels: [
      { name: "Credible Academy", logo: "https://ext.same-assets.com/1159941532/1902774596.jpeg", description: "Trading education" },
      { name: "Yo Crypto Platinum", logo: "https://ext.same-assets.com/1159941532/722921890.jpeg", description: "Premium crypto" },
      { name: "Rose Premium", logo: "https://ext.same-assets.com/1159941532/2894105260.jpeg", description: "VIP signals" },
      { name: "The Hunt", logo: "https://ext.same-assets.com/1159941532/2954232116.jpeg", description: "Market hunting" },
      { name: "Platter VIP", logo: "https://ext.same-assets.com/1159941532/2407259232.png", description: "Premium access" },
      { name: "Bitmex Premium", logo: "https://ext.same-assets.com/1159941532/1684895320.png", description: "Premium trading" }
    ]
  }
];

// Exclusive vault channels (Vault 1)
export const exclusiveVault1: ExclusiveChannel[] = [
  {
    name: "Smart Champions",
    logo: "",
    description: "Professional trading analysis and educational content"
  },
  {
    name: "The Haven",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2Fd7061b0bd24c407c8e47ceb0d6e7b490?format=webp&width=800",
    description: "Safe harbor for professional traders with exclusive signals"
  },
  {
    name: "Dr. Profit",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F87b8f6856ced45a98953ff2cc5c59028?format=webp&width=800",
    description: "Advanced trading psychology and profit maximization strategies"
  },
  {
    name: "Crypto Bheem",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F458e80fb51734574887510e18eb23fef?format=webp&width=800",
    description: "Premium crypto signals and market analysis from expert traders"
  },
  {
    name: "Walsh Wealth",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F6a67759f018447e3a7e074795bfc7236?format=webp&width=800",
    description: "Elite wealth building strategies and premium financial insights"
  },
  {
    name: "Dragon Trades",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2Ff0022cd9f6e44fe48cfbfe5fda970d72?format=webp&width=800",
    description: "Legendary trading techniques and exclusive market predictions"
  },
  {
    name: "The Birb Nest",
    logo: "https://ext.same-assets.com/1159941532/289527164.jpeg",
    description: "Community-driven signals and collaborative trading strategies"
  },
  {
    name: "Rose Premium",
    logo: "https://ext.same-assets.com/1159941532/2894105260.jpeg",
    description: "Premium VIP signals and exclusive market analysis"
  }
];

// Exclusive vault channels (Vault 2)
export const exclusiveVault2: ExclusiveChannel[] = [
  {
    name: "Chroma Trading",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2Faa6ed6ce68b94e05bbbeb3432cdc7335?format=webp&width=800",
    description: "Innovative color-coded trading strategies and market analysis"
  },
  {
    name: "Illusion Crypto",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F69865d4e74b24d95b28879f5bb85f04a?format=webp&width=800",
    description: "Mystical market insights and advanced crypto trading techniques"
  },
  {
    name: "Greeny's Crypto Trading",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F87220be232ec46e1937a7c50b1545986?format=webp&width=800",
    description: "Green-focused sustainable trading with profitable crypto strategies"
  },
  {
    name: "GG-shot",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F949b3be1f5d243f49cfb2ba688a6fdf4%2F596ecf09484f43d2b7f8760c77a4dea3?format=webp&width=800",
    description: "Expert precision trading with game-changing market shots"
  }
];

// All premium services from PremiumServicesCarousel
export const premiumServices: PremiumService[] = [
  { src: "https://ext.same-assets.com/1159941532/1902774596.jpeg", name: "Credible Academy" },
  { src: "https://ext.same-assets.com/1159941532/2901502568.jpeg", name: "TraderSZ" },
  { src: "https://ext.same-assets.com/1159941532/722921890.jpeg", name: "Yo Crypto Platinum" },
  { src: "https://ext.same-assets.com/1159941532/2516144120.png", name: "Dans Signals" },
  { src: "https://ext.same-assets.com/1159941532/437907161.png", name: "Trading by CF" },
  { src: "https://ext.same-assets.com/1159941532/1640121722.jpeg", name: "Margin Whales" },
  { src: "https://ext.same-assets.com/1159941532/1342270112.jpeg", name: "Crypto Zone VIP" },
  { src: "https://ext.same-assets.com/1159941532/2881319521.png", name: "Crypto King" },
  { src: "https://ext.same-assets.com/1159941532/289527164.jpeg", name: "The Birb Nest" },
  { src: "https://ext.same-assets.com/1159941532/3059663317.jpeg", name: "The Crypto Hounds" },
  { src: "https://ext.same-assets.com/1159941532/2954232116.jpeg", name: "The Hunt" },
  { src: "https://ext.same-assets.com/1159941532/4088475068.jpeg", name: "21M Technicals" },
  { src: "https://ugc.same-assets.com/0fk1I7XiOIZHPCbiylQ9h8RwkTsL8mgO.jpeg", name: "Caixa Trading" },
  { src: "https://ugc.same-assets.com/xl_RbwfhXM5pu29w9DrpiZzLuzhnn6vN.jpeg", name: "Haven Group" },
  { src: "https://ext.same-assets.com/1159941532/870417094.png", name: "Warsnop ICF" },
  { src: "https://ext.same-assets.com/1159941532/2407259232.png", name: "Platter VIP" },
  { src: "https://ext.same-assets.com/1159941532/3961314525.jpeg", name: "Klondike PRO" },
  { src: "https://ext.same-assets.com/1159941532/982377683.jpeg", name: "Whales Guide" },
  { src: "https://ext.same-assets.com/1159941532/1684895320.png", name: "Bitmex Premium" },
  { src: "https://ext.same-assets.com/1159941532/3901026379.jpeg", name: "Crypto VIP Signals" },
  { src: "https://ext.same-assets.com/1159941532/2213053348.jpeg", name: "Ritesh Trades" },
  { src: "https://ext.same-assets.com/1159941532/2435921417.png", name: "Utopia Trading" },
  { src: "https://ext.same-assets.com/1159941532/2129424307.png", name: "Corgi Calls" },
  { src: "https://ext.same-assets.com/1159941532/1174720029.jpeg", name: "Ken Charts" },
  { src: "https://ext.same-assets.com/1159941532/3658969275.png", name: "Doctor Profit" },
  { src: "https://ext.same-assets.com/1159941532/2894105260.jpeg", name: "Rose Premium" },
  { src: "https://ext.same-assets.com/1159941532/2179604625.jpeg", name: "Crypto Cove" },
  { src: "https://ext.same-assets.com/1159941532/3053139934.png", name: "The Bulls" },
  { src: "https://ext.same-assets.com/1159941532/390599703.jpeg", name: "Universal Signals PRO" },
  { src: "https://ext.same-assets.com/1159941532/1177884191.jpeg", name: "Traders Grid" },
  { src: "https://ext.same-assets.com/1159941532/1742573608.png", name: "Signal Express" },
  { src: "https://ext.same-assets.com/1159941532/4006297615.jpeg", name: "Trade Devils" },
  { src: "https://ext.same-assets.com/1159941532/3177441654.png", name: "Crypto Coin Coach" }
];
