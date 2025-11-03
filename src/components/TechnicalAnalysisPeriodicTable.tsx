'use client';

export default function TechnicalAnalysisPeriodicTable() {
  const indicators = [
    '25% Fib', '61.8% GP Fib', '88% Deep Fib', '80% Setup', 'TR Pocket', 'Fixed Range',
    'Volume POC', 'Time POC', 'D-Shape TPO', 'P-Shape TPO', 'b-Shape TPO', 'B-Shape TPO',
    'Single Print', 'Monday High', 'Monday Low', 'ETH CME Gap', 'Daily Values', 'Weekly Values',
    'Monthly Values', 'RTH CME Gap', 'Vwap-Weekly', 'Vwap-Monthly', 'Vwap-Daily', 'Vwap-Anchored'
  ];

  return (
    <div className="mt-4">
      <div className="bg-white/5 dark:bg-neutral-800/50 backdrop-blur border border-white/10 dark:border-neutral-700 rounded-lg mobile:rounded-xl p-3 mobile:p-4">
        <div className="text-center mb-3 mobile:mb-4">
          <h3 className="text-sm mobile:text-base font-semibold text-white dark:text-neutral-100">
            TA Periodic Table
          </h3>
        </div>

        {/* Simple Grid Layout - All Silver/Whitish */}
        <div className="grid grid-cols-4 mobile:grid-cols-6 tablet:grid-cols-8 gap-1.5 mobile:gap-2">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-300/20 via-gray-200/30 to-slate-400/20 border border-slate-300/40 rounded aspect-square flex flex-col items-center justify-center p-1.5 text-center hover:from-white/30 hover:via-gray-100/40 hover:to-slate-200/30 hover:border-white/60 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 min-h-[50px] mobile:min-h-[60px] group relative overflow-hidden"
            >
              {/* Shiny overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Silver glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-gray-200/5 group-hover:from-white/15 group-hover:to-gray-100/15 transition-all duration-300"></div>

              <div className="text-xs font-bold text-slate-200 group-hover:text-white leading-tight relative z-10 drop-shadow-sm">
                {indicator}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
