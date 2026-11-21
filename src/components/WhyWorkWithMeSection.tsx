import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export function WhyWorkWithMeSection() {
  return (
    <section id="why-me" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
            Why Work With Me?
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Curious Mindset, Practical Effort &amp; Business Focus.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            What I bring to teams, mentors, and early-stage collaborations as a dedicated digital marketing student.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_WORK_WITH_ME.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0C1324]/65 hover:bg-[#0F172A] hover:border-[#E11D48]/45 p-6 transition-colors duration-150"
            >
              <span className="font-mono-tabular text-xs font-semibold text-[#F43F5E]">
                {item.index}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
