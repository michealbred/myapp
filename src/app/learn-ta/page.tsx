import MarketProfile from "../../components/MarketProfile";
import TPOProfile from "../../components/TPOProfile";
import VolumeProfile from "../../components/VolumeProfile";
import AnchoredVWAP from "../../components/AnchoredVWAP";

export const metadata = {
  title: 'Learn TA - Advanced Technical Analysis | TradersPool',
  description: 'Learn advanced technical analysis concepts including Market Profile 80% Rule, TPO Profile, Volume Profile, and Anchored VWAP.',
};

export default function LearnTAPage() {
  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300">
      <section className="relative overflow-hidden py-6 mobile:py-8 tablet:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 mobile:px-6">
          <div className="mb-6 mobile:mb-8">
            <h1 className="text-2xl mobile:text-3xl tablet:text-4xl font-bold tracking-tight leading-tight">Learn TA — Advanced Technical Analysis</h1>
            <p className="mt-2 text-neutral-300 dark:text-neutral-200">Explore core TA frameworks with concise examples and visuals.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MarketProfile />
            <TPOProfile />
            <VolumeProfile />
            <AnchoredVWAP />
          </div>
        </div>
      </section>
    </main>
  );
}
