export default function AMLPolicy() {
  const sections = [
    {
      id: 1,
      title: "TradersPool's Anti-Money Laundering (AML) Policy",
      content: `TradersPool's Anti-Money Laundering (AML) Policy is designed to rigorously prohibit and proactively combat money laundering, along with any activities that enable it, including the financing of terrorism and associated threats. Every leader, team member, and partner at TradersPool must fully comply with this policy to safeguard our platform from being exploited for illicit purposes.

As a forward-thinking entity operating in jurisdictions with robust AML frameworks, TradersPool is deeply committed to partnering with regional financial regulators. We uphold the highest international benchmarks, align with domestic legislation, and adapt to jurisdictional nuances. Our internal oversight systems are continually refined and enhanced to detect and dismantle any unlawful operations.`
    },
    {
      id: 2,
      title: "Digital Asset Verification and Trading Thresholds",
      content: `To verify the authenticity of digital assets traded by users, TradersPool employs predictive analytics to estimate typical acquisition thresholds for everyday participants, factoring in the platform's operational timeline. We dynamically establish and update trading and withdrawal thresholds based on evolving security protocols and real-time market dynamics. Should an account exhibit unusually high-frequency trades or surpass logical boundaries, our expert team conducts a thorough review to identify any red flags.

Upon detecting a potentially dubious transaction, TradersPool reserves the authority to enact protective measures, such as halting, denying, or swiftly reversing the activity where feasible—without prior notice. In line with AML mandates, we vigilantly monitor and document anomalous trades, escalating reports to appropriate enforcement bodies. Furthermore, we may decline any deal at any phase if it appears linked to criminality or laundering schemes.`
    },
    {
      id: 3,
      title: "Suspicious Activity Indicators",
      content: `When suspicions arise regarding possible illegal behavior involving a user or external entity, we meticulously evaluate the risk of past or impending money laundering. Key indicators of reportable suspicious behavior include:

1. Submission of incomplete, fabricated, or dubious details by a user, or hesitation to provide full disclosure.

2. User demands for cash-based transactions.

3. Funds transferred to or from unrelated third parties without a clear rationale tied to the user or deal.

4. Deals routed through nations flagged as high-risk for laundering activities.

5. Inflows from locales unrelated to the transaction or deviating from the user's established patterns.

6. Excessive payments accompanied by directives to rebate the surplus, especially to an external party.

7. Users where identifying the actual beneficiary proves elusive.

8. Sudden, inexplicable surges in a user's trading volume.

9. Acquiring any listing started by the user or their representative.

10. Opening or operating multiple TradersPool accounts.

11. Acknowledging receipt prior to finalizing the exchange.

12. Reverting acquired goods or services to the provider in any scenario, unless duly mediated by TradersPool.`
    },
    {
      id: 4,
      title: "TradersPool Response Actions",
      content: `In response to such red flags, TradersPool is empowered to:

1. Authenticate the purchaser's identity and payment sources.

2. Hold the purchaser's funds pending confirmation of the transaction's fulfillment.

3. Issue fair reimbursements to the purchaser for any undelivered items or services, as determined by TradersPool.

4. Shield the provider from deceptive payments.

5. Release funds to the provider, minus TradersPool's commissions, for successfully completed deliveries per our assessment.

6. Exercise full legal recourse against the purchaser or provider in instances of deceit.`
    },
    {
      id: 5,
      title: "Dispute Resolution Panel Authority",
      content: `For disputes referred to the TradersPool Dispute Resolution Panel, we are authorized to:

1. Impartially mediate conflicts between parties to achieve equitable outcomes.

2. Sustain the withholding of purchaser funds until the exchange's status is definitively resolved.

3. Maintain defenses for the provider against fraudulent claims.

4. Rigorously analyze the provider's proof of fulfillment, confirming adherence to the Secure Provider Agreement to the utmost degree.

5. Ensure the purchaser has complied with the Secure Purchaser Agreement as comprehensively as possible.

6. Analyze the historical trading patterns of both parties.

7. Perform in-depth identity checks on the involved parties, coupled with a detailed audit of the listing and exchange.

8. Review all relevant dialogues between parties via the TradersPool Internal Communication Portal.

9. Undertake any supplementary evaluations or inquiries essential for conclusive dispute settlement.`
    },
    {
      id: 6,
      title: "Payment Restrictions and KYC Requirements",
      content: `TradersPool strictly prohibits third-party payments. All contributions must originate from your verified name, matching the Know Your Customer (KYC) documentation on file. Per our AML guidelines, withdrawals are routed exclusively back to the original deposit method—bank transfers return to the source account, and credit card deposits revert to the same card. Under no conditions do we permit cash inflows or outflows.`
    },
    {
      id: 7,
      title: "Identity Fraud Prevention",
      content: `At TradersPool, we stand firmly against identity fraud and deceptive practices, leveraging both traditional and innovative techniques to detect, track, probe, and record such misconduct.

Our unwavering policy drives us to aggressively litigate against perpetrators of fraud on the platform. This encompasses sharing exhaustive user profiles, transaction logs, and identification data with key agencies like the Federal Bureau of Investigation (FBI), the Internet Crime Complaint Center, the U.S. Postal Inspection Service, the U.S. Secret Service, and applicable local, national, and global authorities to support investigations, warrants, and convictions.

We will also notify the offenders' Internet Service Providers (ISPs) to enforce their usage policies.`
    },
    {
      id: 8,
      title: "Legal Proceedings and Enforcement",
      content: `Beyond criminal proceedings, TradersPool may pursue independent civil litigation to recoup all losses and expenses, tangible and intangible. We disregard factors such as fraud magnitude, offender demographics, or broader implications, committing to exhaustive investigation, prosecution, and legal action irrespective of expense.

Under U.S. Code Title 18, Section 3056(b), convictions for Credit Card Fraud entail up to 10 years in prison and/or fines reaching $10,000. This provision grants the U.S. Secret Service jurisdiction to detect and arrest violators of federal statutes concerning credit card fraud, computer-related offenses, and access device abuses.`
    }
  ];

  return (
    <main className="min-h-screen text-white" style={{background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1b3a 25%, #2d1b69 50%, #1a1b3a 75%, #0a0e1a 100%)'}}>
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-6 lg:py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Anti-Money Laundering (AML) Policy
            </h1>
            <p className="text-sm mb-4">
              Last Updated: August 18, 2025
            </p>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto">
              TradersPool is committed to maintaining the highest standards of compliance and protecting our platform from illicit activities through comprehensive AML measures.
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
                Policy Updates and Compliance
              </h2>
              <p className="text-white text-sm leading-relaxed">
                This AML Policy may be updated to reflect changes in regulatory requirements and industry best practices. All users are required to comply with these measures to maintain access to TradersPool services.
              </p>
              <p className="text-white text-sm leading-relaxed mt-3">
                Compliance is Mandatory: Adherence to these AML guidelines is essential for maintaining the integrity and security of our trading platform.
              </p>
            </div>

            <div className="text-center py-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4">
                <p className="text-white text-base font-semibold">
                  By using TradersPool, you acknowledge that you have read and agreed to comply with this AML Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
