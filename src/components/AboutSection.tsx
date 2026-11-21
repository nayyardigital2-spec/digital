import { ABOUT_PARAGRAPHS, PROFILE_LEDGER } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-white/10 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
              About Me
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Building a Foundation in Digital Growth &amp; Modern Web Strategy.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-[1.75] text-slate-300">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Hairline Profile Ledger */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#0C1324]/80 backdrop-blur-md p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white pb-4 border-b border-white/10">
                Profile Snapshot
              </h3>
              <dl className="divide-y divide-white/10">
                {PROFILE_LEDGER.map((item) => (
                  <div
                    key={item.label}
                    className="py-3.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-slate-400 shrink-0">{item.label}</dt>
                    <dd className="font-medium text-white text-right font-mono-tabular">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
