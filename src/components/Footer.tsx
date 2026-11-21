import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
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

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050811] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-display text-xl font-bold text-white">
              {PORTFOLIO_PROFILE.name}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {PORTFOLIO_PROFILE.roleLine}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-[#0C1324] text-slate-300 hover:text-white hover:border-[#E11D48]/50 transition-colors"
              >
                {renderSocialIcon(item.platform)}
              </a>
            ))}
            <a
              href={`mailto:${PORTFOLIO_PROFILE.email}`}
              aria-label="Email Mukul Bhatt"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-[#0C1324] text-slate-300 hover:text-white hover:border-[#E11D48]/50 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>Copyright &copy; 2026 Mukul Bhatt. All Rights Reserved.</p>
          <a
            href={`mailto:${PORTFOLIO_PROFILE.email}`}
            className="hover:text-white transition-colors"
          >
            {PORTFOLIO_PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
