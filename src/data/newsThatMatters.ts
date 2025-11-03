export type NewsCard = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  tokens: string;
  entities: string;
  timeAgo: string;
  updates: number;
  description: string;
  image: string;
};

const newsThatMatters: NewsCard[] = [
  {
    id: 'xrp-etf',
    category: 'ETF Progress',
    categoryColor: 'bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-teal-600/90',
    title: 'XRP ETF Progress',
    tokens: '📰',
    entities: '🏢',
    timeAgo: 'Recent',
    updates: 1,
    description: 'Asset managers like Grayscale and Bitwise submitted amended S-1 forms for spot XRP ETFs, signaling SEC feedback response. XRP price rose 7% amid optimism, though approvals pending.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F03f2febf6e1a4f36ac06921f6871a392?format=webp&width=800'
  },
  {
    id: 'trump-tariffs',
    category: 'Mining Impact',
    categoryColor: 'bg-gradient-to-r from-orange-600/90 via-red-600/90 to-yellow-600/90',
    title: 'Trump Tariffs Impact Bitcoin Miners',
    tokens: '⚡',
    entities: '🏭',
    timeAgo: 'Recent',
    updates: 1,
    description: 'New U.S. tariffs on ASIC imports from Southeast Asia reach 21.6%, slowing domestic Bitcoin mining growth. Miners eye overseas expansion like Canada, while used equipment prices may rise amid higher costs.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F29190b18a3b348dab231223ec5da00a5?format=webp&width=800'
  },
  {
    id: 'sui-robinhood',
    category: 'Exchange Listing',
    categoryColor: 'bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-indigo-600/90',
    title: 'Sui Expands via Robinhood',
    tokens: '🚀',
    entities: '📱',
    timeAgo: 'Recent',
    updates: 1,
    description: 'Sui token debuts on Robinhood for U.S. traders, enhancing accessibility. Ecosystem hits $2B TVL, $750M stablecoins, $14B DEX volume. Grayscale unveils trusts; ETF proposals reviewed, driving growth and adoption.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F16d5eb0166054bc3bd7c3940c130d1ef?format=webp&width=800'
  },
  {
    id: 'okb-surge',
    category: 'Token Surge',
    categoryColor: 'bg-gradient-to-r from-green-600/90 via-emerald-600/90 to-lime-600/90',
    title: 'OKB Surges 81% Weekly',
    tokens: '📊',
    entities: '💎',
    timeAgo: 'This Week',
    updates: 1,
    description: 'OKB token skyrockets 81% in a week, driven by OKX exchange growth, token burns reducing supply, and OKB Chain expansion for DeFi and Web3, amid rising exchange token demand.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2Ffa0679bc370a47d1b962acf2e5b1f791?format=webp&width=800'
  }
];

export default newsThatMatters;
