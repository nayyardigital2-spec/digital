import { GraduationCap } from 'lucide-react';
import { JOURNEY_MILESTONES, PORTFOLIO_PROFILE } from '../data/portfolioData';

export function JourneySection() {
  return (
    <section id="journey" className="py-20 sm:py-24 border-b border-white/10 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
              Education
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Academic Foundation.
            </h2>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0C1324]/85 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#E11D48]/15 border border-[#E11D48]/30 text-[#F43F5E]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono-tabular text-xs font-medium text-[#F43F5E]">
                  2026 – 2029
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-white">
                {PORTFOLIO_PROFILE.education.degree}
              </h3>
              <p className="mt-1.5 text-base font-medium text-slate-200">
                {PORTFOLIO_PROFILE.education.university}
              </p>
              <p className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-400">
                {PORTFOLIO_PROFILE.education.status}
              </p>
            </div>
          </div>

          {/* Right Column: My Journey / Learning Experience */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
              My Journey
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Learning Experience &amp; Growth Path.
            </h2>

            <ol className="mt-8 relative space-y-6 before:content-[''] before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
              {JOURNEY_MILESTONES.map((milestone) => (
                <li key={milestone.step} className="relative pl-14">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-[#0C1324] font-mono-tabular text-xs font-semibold text-[#F43F5E]"
                  >
                    {milestone.step}
                  </span>
                  <div className="rounded-xl border border-white/10 bg-[#0C1324]/70 p-5 hover:border-[#E11D48]/40 transition-colors duration-150">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
