import { useEffect, useState } from 'react';
import { ArrowRight, Github, Instagram, Linkedin, Mail, User } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { PORTFOLIO_PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

const MARQUEE_ITEMS = [
  'Search Engine Optimization',
  'Social Media Marketing',
  'Meta Ads Strategy',
  'Google Ads',
  'Content Marketing',
  'Responsive Website Design',
  'Keyword Research',
  'Prompt Engineering',
];

function renderSocialIcon(platform: 'LinkedIn' | 'Instagram' | 'GitHub') {
  switch (platform) {
    case 'LinkedIn':
      return <Linkedin className="w-4 h-4" />;
    case 'Instagram':
      return <Instagram className="w-4 h-4" />;
    case 'GitHub':
      return <Github className="w-4 h-4" />;
  }
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [focusIndex, setFocusIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setFocusIndex((prev) => (prev + 1) % PORTFOLIO_PROFILE.rotatingFocus.length);
    }, 2800);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      id="top"
      className="relative pt-28 pb-10 sm:pt-32 lg:pt-36 overflow-hidden border-b border-white/10"
    >
      {/* Subtle Architectural Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-[#E11D48]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 w-[460px] h-[460px] rounded-full bg-slate-800/30 blur-[120px]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Identity & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
              <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-400">
                <span className="text-[#F43F5E] font-semibold">MUKUL BHATT</span>
                <span className="mx-2.5 text-slate-600" aria-hidden="true">
                  ·
                </span>
                <span>{PORTFOLIO_PROFILE.roleLine}</span>
              </p>

              {/* Hero Display Headline */}
              <h1 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.85rem)] font-bold leading-[1.06] tracking-tight text-white [text-wrap:balance]">
                Helping Brands Build Their{' '}
                <span className="text-[#F43F5E]">Digital Presence.</span>
              </h1>

              {/* Animated Focus Line */}
              <div className="mt-5 flex items-center gap-3 text-sm sm:text-base text-slate-300">
                <span className="text-slate-500 font-medium shrink-0">Core Focus:</span>
                <div className="relative h-6 overflow-hidden flex-1">
                  <motion.span
                    key={focusIndex}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="block font-semibold text-white whitespace-nowrap truncate"
                  >
                    {PORTFOLIO_PROFILE.rotatingFocus[focusIndex]}
                  </motion.span>
                </div>
              </div>

              {/* Short Introduction */}
              <p className="mt-6 text-base sm:text-[17px] leading-[1.7] text-slate-300 max-w-2xl">
                {PORTFOLIO_PROFILE.heroIntro}
              </p>
            </div>

            {/* CTAs & Social Row */}
            <div className="mt-9 pt-7 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#050811]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                >
                  Let&apos;s Connect
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5" aria-label="Social Media Links">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.platform}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} (opens in new tab)`}
                    title={item.isPlaceholder ? `${item.platform} (editable link)` : item.platform}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-[#0C1324] text-slate-300 hover:text-white hover:border-[#E11D48]/60 hover:bg-[#E11D48]/10 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                  >
                    {renderSocialIcon(item.platform)}
                  </a>
                ))}
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  aria-label="Send email to Mukul Bhatt"
                  title={PORTFOLIO_PROFILE.email}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-[#0C1324] text-slate-300 hover:text-white hover:border-[#E11D48]/60 hover:bg-[#E11D48]/10 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[380px] sm:min-h-[440px] lg:h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0C1324]">
              {!imgError ? (
                <img
                  src={PORTFOLIO_PROFILE.portraitPath}
                  alt="Mukul Bhatt – Digital Marketing Student and SEO Enthusiast"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8 bg-gradient-to-br from-[#0C1324] to-[#050811] text-slate-400">
                  <User className="w-12 h-12 text-[#E11D48]" />
                  <span className="font-display text-lg font-semibold text-white">
                    Mukul Bhatt
                  </span>
                  <span className="text-xs text-slate-400">
                    Digital Marketing Student · Chandigarh University
                  </span>
                </div>
              )}

              {/* Measured Scrim & Clean Glassmorphic Caption Bar */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050811]/90 via-[#050811]/20 to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-[#050811]/75 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">Mukul Bhatt</p>
                  <p className="text-xs text-slate-300">
                    BBA Digital Marketing · Chandigarh University
                  </p>
                </div>
                <span className="text-xs font-mono-tabular text-[#F43F5E] whitespace-nowrap shrink-0">
                  Class of 2029
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Editorial Marquee Divider */}
        <div className="mt-14 pt-6 border-t border-white/10 overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-slate-500">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={`${item}-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
                <span>{item}</span>
                <span className="text-[#E11D48]">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
