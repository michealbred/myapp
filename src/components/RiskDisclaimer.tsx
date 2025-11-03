export default function RiskDisclaimer() {

  return (
    <section className="border-t border-neutral-800 bg-neutral-950/60 backdrop-blur py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <span className="text-sm font-medium text-neutral-200">
            Trading Risk Warning
          </span>
        </div>

        <div className="mt-2">
          <p className="text-xs text-neutral-400">
            Trading involves significant risks. Most participants lose money. Content is informational only, not financial advice. For complete details, see our
            <a href="/terms-of-service" className="text-blue-400 hover:text-blue-300 underline ml-1">
              Terms of Service
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
