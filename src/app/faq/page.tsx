'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSection {
  title: string;
  id: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "General Questions",
    id: "general",
    items: [
      {
        id: "crypto-payments",
        question: "Do you accept cryptocurrency payments?",
        answer: "Yes, we currently accept cryptocurrency payments to mitigate risks and ensure secure transactions."
      },
      {
        id: "discounts",
        question: "Do you offer discounts or coupon codes?",
        answer: "Yes, discounted rates are automatically applied to our monthly and yearly subscriptions. We also offer limited-time Yearly Flash Deals - visit our homepage for current offers."
      },
      {
        id: "subscriptions",
        question: "How does subscription work?",
        answer: "Our subscription service operates through automated bot processing, where all premium chats are handled by our proprietary algorithms and custom-coded system."
      },
      {
        id: "live-streaming",
        question: "Do you provide live streaming?",
        answer: "Yes, we enable live streaming through OBS, Streamlabs, and other popular broadcasting tools with full technical support."
      },
      {
        id: "trial",
        question: "Can I get a trial before payment?",
        answer: (
          <div>
            <p>Yes! We offer a free 30-minute trial so you can preview our content before committing. Here's how to get started:</p>
            <ol className="mt-2 list-decimal pl-5 space-y-1">
              <li>Join our Discord server</li>
              <li>Visit the 'Contact Us' section</li>
              <li>Create a support ticket</li>
              <li>Specify which premium service trial you'd like to test</li>
            </ol>
            <p className="mt-2">This lets you experience our offerings risk-free before making any payment.</p>
          </div>
        )
      },
      {
        id: "safety",
        question: "What safety measures do you have?",
        answer: (
          <div>
            <p>We implement multiple security measures to protect our service:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Premium Account Redundancy:</strong> We maintain 2-3 premium accounts to ensure uninterrupted access</li>
              <li><strong>Proxy Routing System:</strong> All traffic is securely routed through encrypted proxy networks</li>
              <li><strong>Automated Infrastructure:</strong> Our custom-coded system manages all connections securely</li>
              <li><strong>Payment Protection:</strong> We use cryptocurrency transactions for enhanced privacy</li>
            </ul>
          </div>
        )
      }
    ]
  }
];

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["crypto-payments"]);

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      {/* Header Section */}
      <div className="border-b border-white/10 dark:border-neutral-700">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <h1 className="text-3xl font-medium tracking-tight lg:text-4xl dark:text-white transition-colors duration-300">
            Frequently Asked Questions.
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {faqSections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="text-xl font-medium mb-6 text-white dark:text-neutral-100 transition-colors duration-300">
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.items.map((item) => {
                  const isExpanded = expandedItems.includes(item.id);
                  
                  return (
                    <div 
                      key={item.id}
                      className="border border-white/10 rounded-lg overflow-hidden bg-white/5 dark:border-neutral-700 dark:bg-neutral-800/50 transition-colors duration-300"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 dark:hover:bg-neutral-800/30 transition-colors"
                      >
                        <span className="text-base font-medium text-white dark:text-neutral-100 transition-colors duration-300">
                          {item.question}
                        </span>
                        {isExpanded ? (
                          <Minus className="h-5 w-5 text-neutral-300 dark:text-neutral-400 flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-neutral-300 dark:text-neutral-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 pb-4 border-t border-white/10 dark:border-neutral-700">
                          <div className="pt-4 text-sm text-neutral-300 dark:text-neutral-200 leading-relaxed transition-colors duration-300">
                            {typeof item.answer === 'string' ? (
                              <p>{item.answer}</p>
                            ) : (
                              item.answer
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
