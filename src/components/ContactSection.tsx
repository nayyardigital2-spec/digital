import { FormEvent, useState } from 'react';
import {
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_PROFILE, SOCIAL_LINKS } from '../data/portfolioData';

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

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your name (at least 2 characters).');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (trimmedSubject.length < 2) {
      setErrorMessage('Please enter a subject.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || 'Unable to send message. Please try again.');
        return;
      }

      setSuccessMessage(
        data.message || 'Thank you for reaching out. Your message has been received.'
      );
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch {
      setErrorMessage('Network error while sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Details & Editable Social Links */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Let&apos;s Build Something Great Together.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Open to internships, freelance digital marketing collaborations, SEO audits, and web design projects. Send a note below or reach out directly.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <div className="rounded-xl border border-white/10 bg-[#0C1324]/80 p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#E11D48]/15 text-[#F43F5E] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Email</p>
                    <a
                      href={`mailto:${PORTFOLIO_PROFILE.email}`}
                      className="text-sm font-medium text-white hover:text-[#F43F5E] transition-colors truncate block"
                    >
                      {PORTFOLIO_PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="rounded-xl border border-white/10 bg-[#0C1324]/80 p-4 sm:p-5 flex items-center gap-3.5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#E11D48]/15 text-[#F43F5E] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-medium text-white">
                    {PORTFOLIO_PROFILE.locationFull}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Social Profiles
              </p>
              <div className="mt-3.5 space-y-2.5">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.platform}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#0C1324]/60 hover:bg-[#0F172A] hover:border-[#E11D48]/45 px-4 py-3 text-sm transition-colors duration-150"
                  >
                    <span className="flex items-center gap-3 text-white font-medium">
                      <span className="text-[#F43F5E]">{renderSocialIcon(item.platform)}</span>
                      <span>{item.platform}</span>
                    </span>
                    <span className="text-xs text-slate-400 truncate">
                      {item.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Backend-Connected Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-[#0C1324]/85 backdrop-blur-md p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="SEO collaboration, internship, or project inquiry"
                  className="w-full rounded-lg border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your goals, project, or opportunity..."
                  className="w-full rounded-lg border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E11D48] focus:ring-1 focus:ring-[#E11D48] transition-colors resize-y"
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-[#E11D48]/40 bg-[#E11D48]/10 px-4 py-3 text-sm text-rose-200"
                >
                  <AlertCircle className="w-4 h-4 text-[#F43F5E] shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div
                  role="status"
                  className="flex items-start gap-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{successMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1324]"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
