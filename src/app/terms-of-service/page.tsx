export default function TermsOfService() {
  const sections = [
    {
      id: 1,
      title: "Introduction and Acceptance",
      content: `These Terms form a legally binding agreement between you ("User," "you," or "your") and TradersPool ("we," "us," or "our"). By creating an account, browsing the Platform, or utilising any of our services, you confirm that you have read, understood, and accepted these Terms, along with our Privacy Policy.

Important Note: If you're under 18 years old, you must have parental or guardian consent to use the Platform. We reserve the right to refuse service to anyone for any reason. These Terms are governed by applicable Singapore laws, including the Contracts (Rights of Third Parties) Act 2001.`
    },
    {
      id: 2,
      title: "Use Licence and Permissions",
      content: `We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use the Platform for your personal, non-commercial purposes.

You agree not to:
• Modify, copy, distribute, or create derivative works
• Use materials for commercial purposes without permission
• Attempt to decompile or reverse engineer
• Remove copyright or proprietary notices

Additional Note: This licence promotes fair use while protecting our intellectual property under the Copyright Act 2021 (Singapore). For educational or collaborative use beyond personal viewing, reach out for potential partnerships.`
    },
    {
      id: 3,
      title: "Disclaimer of Warranties",
      content: `All materials, content, and services on TradersPool are provided "as is" and "as available" without any warranties of any kind, either express or implied.

Important: While we strive to maintain high-quality, accurate information, the dynamic nature of financial markets means content may evolve. Always verify information independently.`
    },
    {
      id: 4,
      title: "Trading Risks and Responsibilities",
      content: `Important Risk Disclosure: Engaging in trading financial instruments carries significant risks, including the potential loss of your entire investment. Such activities may not be appropriate for everyone, particularly those without sufficient knowledge or risk tolerance.

TradersPool offers educational resources, analytical tools, and community features to support your learning journey. However, we do not provide personalised investment advice, financial planning, or brokerage services.

Safety Tips: To enhance your safety, we encourage using demo accounts and starting small. Remember, trading involves emotional and financial discipline—stay informed and trade responsibly. All trading activities must comply with the Securities and Futures Act 2001 (Singapore).`
    },
    {
      id: 5,
      title: "User Accounts and Security",
      content: `To access certain features, you may need to create an account. You agree to:

• Provide accurate, current, and complete information
• Safeguard your login credentials and not share them
• Accept responsibility for all account activities
• Notify us immediately of suspected breaches

Security Best Practices: Strong passwords and two-factor authentication (where available) are your best defences. Our support team is here to help with account recovery. Data handling complies with the Personal Data Protection Act 2012 (Singapore).`
    },
    {
      id: 6,
      title: "Prohibited Activities",
      content: `To maintain a safe and positive environment, you must not:

• Violate laws or regulations
• Upload viruses or malware
• Impersonate others
• Interfere with platform infrastructure
• Attempt unauthorised access
• Engage in spamming
• Post defamatory content
• Promote illegal activities

Community Protection: We monitor for these activities to protect our community. Violations may result in permanent bans and potential legal action under the Computer Misuse and Cybersecurity Act 1993 (Singapore).`
    },
    {
      id: 7,
      title: "Intellectual Property Rights",
      content: `All content on TradersPool, including text, graphics, logos, software, and user-generated contributions, is owned by us or our licensors and protected by intellectual property laws, including the Trademarks Act 1998 (Singapore) and Copyright Act 2021 (Singapore).

Your Content: You retain ownership of content you submit but grant us a worldwide, royalty-free licence to use, display, and distribute it on the Platform. User submissions enrich our community!`
    },
    {
      id: 8,
      title: "Limitations of Liability",
      content: `To the fullest extent permitted by law, TradersPool shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.

Fair Protection: This clause ensures fairness while acknowledging the inherent risks of online platforms. We're committed to resolving issues amicably, in line with the Limitation Act 1959 (Singapore).`
    },
    {
      id: 9,
      title: "Governing Law and Dispute Resolution",
      content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in Singapore in accordance with the rules of the Singapore International Arbitration Centre (SIAC), and the seat of arbitration shall be Singapore. You submit to the exclusive jurisdiction of the courts of Singapore for any matters not subject to arbitration.

Resolution Process: We prefer informal resolutions—contact us first. If needed, arbitration may be pursued under SIAC rules for efficiency.`
    }
  ];

  return (
    <main className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Terms of Service
            </h1>
            <p className="text-sm mb-4">
              Last Updated: August 18, 2025
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              Welcome to TradersPool! We're excited to have you join our community of traders and learners. These Terms outline the rules and guidelines for using our platform.
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

          {/* Additional Information */}
          <div className="mt-12 space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h2 className="text-lg font-bold text-white mb-3">
                Changes to Terms and Updates
              </h2>
              <p className="text-white text-sm leading-relaxed">
                We may revise these Terms at any time. Continued use after changes indicates acceptance. If any provision is deemed invalid, the remaining Terms remain enforceable.
              </p>
              <p className="text-white text-sm leading-relaxed mt-3">
                Stay Updated: Check back periodically for updates. Your feedback helps us improve.
              </p>
            </div>


            <div className="text-center py-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
                <p className="text-white text-base font-semibold">
                  By using TradersPool, you acknowledge that you have read and agreed to these Terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
