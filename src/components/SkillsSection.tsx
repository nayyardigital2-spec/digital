import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SKILLS, type SkillItem } from '../data/portfolioData';

type SkillFilter = 'All' | SkillItem['category'];

const FILTER_OPTIONS: { label: string; value: SkillFilter }[] = [
  { label: 'All Skills', value: 'All' },
  { label: 'Digital Marketing', value: 'Digital Marketing' },
  { label: 'Website & Technical', value: 'Website & Technical' },
  { label: 'Professional', value: 'Professional' },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillFilter>('All');
  const prefersReducedMotion = useReducedMotion();

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
              My Skills
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Capabilities Across Marketing, Web &amp; Business.
            </h2>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#0C1324] border border-white/10 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((tab) => {
              const isSelected = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(tab.value)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] ${
                    isSelected
                      ? 'bg-[#E11D48] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Skill Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout={!prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.22,
                delay: prefersReducedMotion ? 0 : Math.min(idx * 0.025, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl border border-white/10 bg-[#0C1324]/70 hover:bg-[#0F172A] hover:border-[#E11D48]/50 p-5 sm:p-6 transition-colors duration-150"
            >
              <p className="text-xs font-medium text-slate-400">
                {skill.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white group-hover:text-[#F43F5E] transition-colors duration-150">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skill.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
