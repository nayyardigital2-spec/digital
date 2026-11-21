import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 border-b border-white/10 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
            What I Do
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Focused Services for Brand Visibility &amp; Online Growth.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Combining search strategy, paid campaign fundamentals, and responsive web design to support modern digital brands.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0C1324]/75 hover:bg-[#0F172A] hover:border-[#E11D48]/50 p-6 sm:p-7 transition-colors duration-150"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono-tabular text-sm font-medium text-[#F43F5E]">
                    {service.index}
                  </span>
                  <a
                    href="#contact"
                    aria-label={`Inquire about ${service.title}`}
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-400 group-hover:text-white group-hover:border-[#E11D48]/50 group-hover:bg-[#E11D48]/10 transition-colors duration-150"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>

              <p className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                {service.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
