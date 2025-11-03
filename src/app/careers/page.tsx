export default function Careers() {
  const sections = [
    {
      id: 1,
      title: "Join Our Team and Help Shape the Future of Trading",
      content: `At TradersPool, we're not just creating a platform—we're pioneering a new era in trading where AI-driven collaboration meets human ingenuity. If you're passionate about fintech, artificial intelligence, and empowering traders worldwide, join us in building tools that democratize expertise and drive financial success. Our team is composed of diverse talents from tech giants, financial institutions, and innovative startups, all united by a shared vision of transforming the trading landscape.`
    },
    {
      id: 2,
      title: "Why Work With Us?",
      content: `TradersPool is at the intersection of cutting-edge AI and dynamic trading communities. We're building the next generation of trading technology, integrating advanced AI models akin to Grok and ChatGPT to deliver intelligent, real-time insights. Joining our innovative team means being part of a revolution that's redefining how traders collaborate, learn, and succeed. Here, your contributions directly impact users globally, from novice investors to seasoned professionals. We foster a culture of curiosity, rapid iteration, and bold experimentation, where ideas flourish and innovation thrives.`
    },
    {
      id: 3,
      title: "What We Offer",
      content: `We believe in supporting our team holistically, ensuring you have the resources to excel both professionally and personally. Our comprehensive benefits package includes:

• Competitive Salary and Equity Packages: Attractive compensation with stock options to share in our growth and success.
• Remote-First Work Environment: Flexibility to work from anywhere, with optional co-working stipends for those who prefer hybrid setups.
• Comprehensive Health Benefits: Full medical, dental, and vision coverage, plus mental health support and wellness programs.
• Professional Development Opportunities: Unlimited access to courses, conferences, and certifications, including specialized training in AI and trading technologies.
• Access to Cutting-Edge AI and Trading Technologies: Hands-on experience with state-of-the-art tools like GPT-5 integrations, machine learning frameworks, and real-time market data APIs.
• Collaborative and Innovative Team Culture: Regular team-building events, hackathons, and cross-functional projects in a supportive, inclusive atmosphere.
• Additional Perks: Generous paid time off, parental leave, home office setup allowances, and company retreats to foster creativity and connection.`
    },
    {
      id: 4,
      title: "Open Positions",
      content: `We're expanding rapidly and seeking exceptional talent to fuel our growth. Below are our current openings, with a focus on roles essential for developing and scaling AI systems similar to Grok and ChatGPT—powering our platform's intelligent analysis, natural language processing, and collaborative features. All positions are remote and full-time unless otherwise noted.

Senior Frontend Developer
Remote • Full-time
Join our frontend team to craft intuitive, high-performance trading interfaces. You'll work with React, Next.js, Tailwind CSS, and modern web technologies to create seamless user experiences for chart sharing, real-time collaboration, and AI-driven dashboards. Ideal candidates have 5+ years of experience, a strong portfolio of responsive designs, and a passion for optimizing user interactions in fintech applications.

AI/ML Engineer
Remote • Full-time
Drive the core of our AI-powered trading analysis tools. You'll develop and optimize machine learning models for pattern recognition, volatility prediction, and strategy automation, integrating with frameworks like TensorFlow, PyTorch, and scikit-learn. Experience with large-scale data processing and deploying models in production is essential. If you've built systems handling real-time financial data, this role is for you.

Trading Community Manager
Remote • Full-time
Oversee and expand our vibrant trading communities across 1,000+ groups. You'll facilitate engaging discussions, curate high-quality content, organize virtual events, and analyze community metrics to enhance user retention. Strong communication skills, trading knowledge, and experience with platforms like Discord or Reddit are key to fostering a supportive, knowledge-sharing environment.

Backend Developer
Remote • Full-time
Build scalable, secure backend systems to support our AI ecosystem and user interactions. Using Node.js, Python (Django/Flask), and databases like PostgreSQL and MongoDB, you'll handle API development, data pipelines, and integrations with external market feeds. Focus on performance optimization for real-time features like live chart sharing and AI query processing.

Data Scientist
Remote • Full-time
Leverage data to unlock insights that power our platform's AI tools. You'll analyze trading patterns, user behavior, and market trends using tools like Pandas, NumPy, and Jupyter Notebooks. Develop predictive models for sentiment analysis and risk assessment, contributing to features inspired by advanced AI like Grok's reasoning capabilities or ChatGPT's conversational intelligence.

NLP Specialist (Natural Language Processing Engineer)
Remote • Full-time
Specialize in building and refining our GPT-5 integrations for instant trading queries and AI assistance. You'll work on natural language understanding, prompt engineering, and fine-tuning large language models (LLMs) to handle complex trading jargon, generate insights, and support interactive Q&A. Expertise in Hugging Face Transformers, spaCy, or similar libraries is required, with a focus on creating AI that's as intuitive and helpful as ChatGPT.

AI Research Scientist
Remote • Full-time
Lead groundbreaking research to advance our AI capabilities, drawing inspiration from models like Grok and ChatGPT. You'll explore multimodal AI (combining text, charts, and data), ethical AI frameworks, and reinforcement learning for trading simulations. A PhD in AI/CS or equivalent experience, plus publications in relevant fields, will help you push the boundaries of collaborative technical analysis.

DevOps Engineer
Remote • Full-time
Ensure our infrastructure scales seamlessly as we integrate advanced AI. You'll manage cloud environments (AWS/GCP), CI/CD pipelines with Jenkins or GitHub Actions, and containerization via Docker/Kubernetes. Experience with monitoring tools like Prometheus and securing AI deployments is crucial for maintaining high availability in a fast-paced fintech setting.

Product Manager - AI Features
Remote • Full-time
Guide the roadmap for our AI-driven tools, from ideation to launch. You'll collaborate with engineers and traders to prioritize features like AI-enhanced analytics and GPT-powered chatbots, ensuring they align with user needs. Background in product management for AI products, with knowledge of agile methodologies, is ideal.

UX/UI Designer
Remote • Full-time
Design elegant, user-centric interfaces for our collaborative platform. Using Figma or Adobe XD, you'll create wireframes, prototypes, and visuals that make complex AI insights accessible. Experience in fintech or data visualization, with a portfolio showcasing intuitive designs, will help you enhance trader engagement.

Prompt Engineer
Remote • Full-time
Optimize interactions with our AI models by crafting precise prompts for trading scenarios. Inspired by the development of systems like ChatGPT and Grok, you'll test and iterate on prompts to improve accuracy in query responses, strategy suggestions, and educational content generation. Strong understanding of LLMs and creative problem-solving skills are essential.

Ethical AI Specialist
Remote • Full-time
Ensure our AI developments are responsible, transparent, and bias-free, akin to best practices in building trustworthy models like Grok. You'll conduct audits, implement fairness metrics, and develop guidelines for AI in trading. Background in AI ethics, compliance, or related fields will support our commitment to equitable technology.

Don't see a position that fits? We're always on the lookout for talented individuals in areas like cybersecurity, content creation, or business development. Share your unique skills and how you can contribute to our mission.`
    }
  ];

  return (
    <main className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Careers at TradersPool
            </h1>
          </div>

          {/* Simple Text Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h2 className="text-lg font-bold text-white mb-3">
                  {section.title}
                </h2>
                <div className="text-white text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold text-white mb-3">
                Contact Us
              </h2>
              <p className="text-white text-sm leading-relaxed mb-4">
                Ready to make an impact? Send your resume and a brief cover letter to careers@traderspool.com. Let's build the future of trading together!
              </p>
              <a
                href="mailto:careers@traderspool.com"
                className="inline-block rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition dark:border-neutral-600 dark:text-neutral-100 dark:hover:bg-white/20"
              >
                careers@traderspool.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
