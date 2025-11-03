export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: `At TradersPool ("we," "our," or "us"), we prioritize your privacy and trust as the foundation of our relationship with you. This Privacy Policy provides a clear overview of how we collect, utilize, disclose, and protect your information while you engage with our innovative trading platform.

Our Commitment: By understanding these practices, you can confidently navigate our services knowing your data is handled with the utmost care.`
    },
    {
      id: 2,
      title: "Information We Collect",
      content: `To deliver a seamless and personalized experience, we gather specific types of information. This includes:

Personal Information:
• Name and email address - to facilitate account creation and communication
• Account credentials - ensuring secure access to your profile
• Profile details - such as preferences and bio, to enhance your user experience
• Payment information - securely processed through trusted third-party providers

Usage Information:
• Platform interaction data - including navigation patterns
• Trading preferences and activity logs - to tailor recommendations
• Device and browser details - for optimal performance across platforms
• IP address and location data - to support features like regional compliance`
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: `We leverage your information thoughtfully to empower your trading journey and continuously elevate our services. Key purposes include:

• Delivering and maintaining core platform functionalities for a reliable experience
• Personalizing content, tools, and insights based on your unique trading style
• Keeping you informed about exciting updates, new features, and promotional opportunities
• Analyzing trends to refine our platform and innovate with cutting-edge enhancements
• Fulfilling legal and regulatory requirements to ensure transparency and accountability`
    },
    {
      id: 4,
      title: "Information Sharing",
      content: `Privacy First: Your privacy is paramount—we never sell, trade, or transfer your personal information to third parties without your explicit consent, except as outlined here.

We may share data with:

• Trusted Service Providers: Who support our operations, such as hosting or analytics partners, under strict confidentiality agreements
• Legal Authorities: Or regulatory bodies when mandated by law or to protect our rights
• Select Business Partners: But only with your prior approval, to unlock additional value for you`
    },
    {
      id: 5,
      title: "Data Security",
      content: `We employ robust, industry-standard security protocols to shield your personal information from unauthorized access, modification, disclosure, or destruction. This includes encryption, firewalls, and regular audits.

Security Features:
• Encryption: End-to-end data protection
• Firewalls: Network security barriers
• Regular Audits: Continuous monitoring

Important Note: While we strive for excellence in protection, no online transmission or storage method can guarantee absolute security. We encourage you to adopt strong passwords and vigilant practices to complement our efforts.`
    },
    {
      id: 6,
      title: "Your Rights",
      content: `Your Control: Empowering you with control over your data is central to our ethos. Depending on applicable laws, you may exercise the following rights:

• Access & Review: View your personal information held by us
• Correct & Update: Fix any inaccuracies in your data
• Request Deletion: Remove your information (subject to legal obligations)
• Opt-out Communications: Control marketing preferences anytime
• Data Portability: Transfer your information to another service

Easy Access: To invoke these rights, simply reach out—we're here to assist promptly.`
    }
  ];

  return (
    <main className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm mb-4">
              Last Updated: August 18, 2025
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              Learn how we protect your privacy and handle your data with transparency and care.
            </p>
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

        </div>
      </section>
    </main>
  );
}
