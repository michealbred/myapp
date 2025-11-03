export default function About() {
  const sections = [
    {
      id: 1,
      title: "Our Mission",
      subtitle: "Forging the Premier AI-Powered Platform for Collaborative Technical Analysis",
      content: `At TradersPool, we are trailblazers in the trading world, engineering the inaugural AI-centric platform tailored exclusively for technical analysis. This groundbreaking initiative redefines trader interactions by enabling seamless skill acquisition, insight sharing, and synergistic collaboration. Our core objective is to cultivate a vibrant, interconnected environment where knowledge dissemination is effortless and barrier-free. By empowering traders with data-driven intelligence and peer-to-peer support, we aim to facilitate sharper decision-making, mitigate risks, and propel users toward sustained trading success. Whether you're analyzing market trends, backtesting strategies, or exploring new indicators, TradersPool ensures that every interaction contributes to a smarter, more resilient trading community.`
    },
    {
      id: 2,
      title: "What We Offer",
      subtitle: "A Comprehensive Ecosystem Featuring Premium Resources and Cutting-Edge AI Solutions",
      content: `TradersPool delivers an all-encompassing, user-centric ecosystem that integrates elite trading resources, comprehensive educational modules, and sophisticated AI tools into one streamlined platform. Our offerings are meticulously curated to address the diverse needs of traders at all levels:

• Elite Resources Hub: Access a vast repository of market data feeds, historical charts, and real-time analytics from leading financial sources, all optimized for quick retrieval and customization.
• In-Depth Educational Materials: From foundational tutorials on candlestick patterns and moving averages to advanced courses on algorithmic trading and risk management, our library includes video lessons, interactive quizzes, and downloadable guides crafted by industry experts.
• Intelligent AI Tools: Harness AI algorithms that automate pattern recognition, predict volatility, and generate personalized strategy recommendations, allowing you to refine your approaches with unprecedented accuracy.

By consolidating premier trading communities, essential datasets, and innovative tools into an intuitive interface, we eliminate fragmentation, reduce learning curves, and amplify your potential for consistent gains. Our platform's scalability ensures it grows with you, supporting everything from day trading to long-term portfolio management.`
    },
    {
      id: 3,
      title: "Our Vision",
      subtitle: "Making Trading Mastery Accessible to All",
      content: `We envision a democratized trading realm where barriers to entry dissolve, and expertise becomes a shared commodity available to everyone. In this inclusive landscape, novices can rapidly ascend to proficiency through guided pathways, while seasoned professionals discover new avenues for innovation and networking. TradersPool is committed to providing unparalleled access to:

• Superior Education: Curated content that evolves with market trends, ensuring lifelong learning.
• Advanced Technology: State-of-the-art AI that levels the playing field against institutional players.
• Supportive Networks: Global communities that offer mentorship, accountability, and inspiration.

Ultimately, our vision is to empower individuals worldwide to achieve enduring financial independence, turning trading from a solitary pursuit into a collaborative journey toward excellence and prosperity.`
    },
    {
      id: 4,
      title: "Our History",
      subtitle: "From Concept to Cutting-Edge Reality",
      content: `Founded in 2022 by a team of visionary fintech entrepreneurs and AI specialists, TradersPool emerged from a simple observation: traditional trading platforms often isolate users, limiting their growth potential. Drawing on experiences from Wall Street analytics firms and Silicon Valley tech startups, our founders set out to create a hybrid solution that marries human collaboration with machine intelligence. Key milestones include:

• 2023 Launch: Introduction of our beta platform, focusing on core AI analysis tools and community forums, which quickly attracted over 5,000 early adopters.
• 2024 Expansion: Integration of GPT-5 capabilities and partnerships with leading data providers, expanding our user base to tens of thousands globally.
• 2025 and Beyond: Ongoing enhancements, including VR-based collaboration spaces and blockchain-secured data sharing, positioning TradersPool as the go-to hub for future-proof trading.

Through relentless innovation and user feedback, we've evolved into a trusted ally for traders navigating volatile markets.`
    },
    {
      id: 5,
      title: "Key Features",
      subtitle: "Robust Tools and Unrivaled Community Engagement",
      content: `Immerse yourself in the pinnacle of collaborative trading with our expansive, feature-rich suite designed to enhance every aspect of your workflow:

• Expansive Community Network: Join and interact with over 1,000 premium trading groups segmented by asset class (e.g., stocks, forex, crypto), strategy type (e.g., scalping, swing trading), and expertise level. Participate in moderated events like live webinars and virtual meetups to build lasting professional relationships.
• AI-Enhanced Analytics: Utilize proprietary AI models that perform sentiment analysis on news feeds, detect anomalies in price action, and simulate thousands of scenarios for strategy optimization. Our tools support multi-timeframe analysis and integrate with popular charting software.
• In-Depth Educational Resources: Dive into a multimedia library featuring over 500 hours of content, including case studies from real-world trades, expert interviews, and certification programs that validate your skills for career advancement.
• Dynamic Collaboration Hub: Engage in real-time discussions via chat rooms, share annotated charts with drawing tools, and co-author trading journals. Features like version control for shared strategies ensure productive teamwork without conflicts.
• GPT-5 Powered Assistance: Experience next-generation AI support with instant responses to complex queries, such as "Analyze this Elliott Wave pattern" or "Suggest hedges for this portfolio." GPT-5's natural language processing delivers actionable insights tailored to your trading style.
• Thriving Support Community: Access a 24/7 forum where members exchange advice, troubleshoot issues, and celebrate wins. Moderated by certified traders, it includes gamified elements like badges and leaderboards to encourage active participation.
• Additional Innovations: Secure data vaults for personal trade logs, mobile apps for on-the-go access, and API integrations for custom bot development, ensuring flexibility for advanced users.`
    },
    {
      id: 6,
      title: "Why Choose TradersPool?",
      subtitle: "Proven Benefits and User Success Stories",
      content: `TradersPool isn't just a platform—it's a catalyst for transformation. Users report up to 30% improvement in strategy win rates thanks to our AI tools, and our community has facilitated over 100,000 collaborative sessions. Hear from our members:

• "TradersPool turned my sporadic trading into a disciplined profession. The AI insights are game-changing!" – Alex R., Professional Day Trader.
• "As a beginner, the educational resources and supportive forums gave me the confidence to execute my first profitable trades." – Maria S., Novice Investor.

With robust security measures, including end-to-end encryption and compliance with global financial regulations, your data and trades remain protected.

Are you prepared to elevate your trading journey to new heights and join a community that's shaping the future of finance?`
    }
  ];

  return (
    <main className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              About TradersPool
            </h1>
            <p className="text-sm mb-4">
              Unleash the Future of Trading: Empowering Technical Analysis with AI-Powered Collaboration
            </p>
          </div>

          {/* Simple Text Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h2 className="text-lg font-bold text-white mb-2">
                  {section.title}
                </h2>
                <h3 className="text-sm font-semibold text-blue-300 mb-3">
                  {section.subtitle}
                </h3>
                <div className="text-white text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
