export type CmeUsCard = {
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

const cmeUsData: CmeUsCard[] = [
  {
    id: 'cme-combined',
    category: 'CME Settlement',
    categoryColor: 'bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-green-600/90',
    title: 'CME Settlement Price -23 August 2025',
    tokens: '📊',
    entities: '🏛️',
    timeAgo: '23 August',
    updates: 112285,
    description: 'BTC CME Settlement- 112285 • ETH CME Settlement- 4228 • E-Mini S&P-500 - 6388 • E-Mini NASDAQ- 23569',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F12a76b2cf8ef4bccba388f7d2c59b98d?format=webp&width=800'
  },
  {
    id: 'nvda-earnings',
    category: 'Earnings Call',
    categoryColor: 'bg-gradient-to-r from-green-600/90 via-emerald-600/90 to-teal-600/90',
    title: 'August 27 : NVDA - Earnings Call',
    tokens: '📈',
    entities: '💼',
    timeAgo: 'August 27',
    updates: 1,
    description: "August 27, 2025: NVIDIA (NVDA) Earnings Call 1. NVIDIA's Second Quarter Fiscal Year 2026 Earnings Call: Date: Wednesday, August 27, 2025 Time: 2 p.m. Pacific Time (PT) / 5 p.m. Eastern Time (ET)",
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F03e11d6232a044d8889c7f21f2ad92b8?format=webp&width=800'
  },
  {
    id: 'us-iran-nuclear',
    category: 'Nuclear Deal',
    categoryColor: 'bg-gradient-to-r from-red-600/90 via-orange-600/90 to-yellow-600/90',
    title: 'August 29 : US - Iran Nuclear Deal Deadline (JCPOA)',
    tokens: '⚛️',
    entities: '🏛️',
    timeAgo: 'August 29',
    updates: 1,
    description: 'While August 29 is not a formal deadline for the original Joint Comprehensive Plan of Action (JCPOA), it is a key date in the current nuclear standoff.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbe7ccd0aed644e439d940e23111adc4c%2F13cfa885238f40829d09f8a922815885?format=webp&width=800'
  }
];

export default cmeUsData;
