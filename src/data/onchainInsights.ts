export type OnchainCard = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  tokens: string;
  entities: string;
  timeAgo: string;
  updates: number;
  description?: string;
  image?: string;
  link?: string;
};

const onchainInsights: OnchainCard[] = [
  {
    id: '1',
    category: 'On-Chain Trade',
    categoryColor: 'bg-blue-600/90',
    title: 'BlackRock is selling $ETH and $BTC.',
    tokens: '💎',
    entities: '🏢',
    timeAgo: '4 hours ago',
    updates: 1,
    link: 'https://intel.arkm.com/explorer/entity/blackrock',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fa278bf8f27fd4fe1be317d57ff8a4ae9%2Fb8f8007a9c7f42f68b829af30c0f2f74?format=webp&width=800'
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
    link: 'https://hypurrscan.io/address/0x261142Dd1d82Cf24228bD35B1FC65BD805AF842D',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fc9cb738178c2410fbe7babc8ab2ce106?format=webp&width=800'
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
    link: 'https://hypurrscan.io/address/0x020ca66c30bec2c4fe3861a94e4db4a498a35872',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2F665b9f55c74c48928dfe1837c4993e40?format=webp&width=800'
  },
  {
    id: 'bio-whale',
    category: 'Whale Activity',
    categoryColor: 'bg-red-600/90',
    title: "BIO Protocol Faces Major Whale Distribution",
    tokens: '🔻',
    entities: '🐋',
    timeAgo: '11 hours ago',
    updates: 20,
    description: "BIO faces major volatility from whale activity. Arthur Hayes's 7.66M purchase was followed by large-scale profit-taking by major holders.",
    link: 'https://intel.arkm.com/explorer/entity/arthur-hayes',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F760f2099a5f24acf89f8281c78406ba3%2Fe45475fb15f4460e82daa651d40fb4c7?format=webp&width=800'
  }
];

export default onchainInsights;
