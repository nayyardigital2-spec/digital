import { useEffect } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import { type ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0C1324] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 bg-[#050811]/85 text-white hover:bg-[#E11D48] hover:border-[#E11D48] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Preview Image */}
        <div className="relative aspect-[16/10] w-full bg-[#050811] border-b border-white/10 overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C1324] via-transparent to-transparent"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-xs font-medium text-[#F43F5E]">{project.subtitle}</p>
          <h3 id="project-modal-title" className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
            {project.name}
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            {project.fullDescription}
          </p>

          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Focus Areas
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((point) => (
                <li key={point} className="text-sm text-slate-300 flex items-start gap-2.5">
                  <span className="text-[#F43F5E] font-mono-tabular mt-0.5" aria-hidden="true">
                    —
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies &amp; Disciplines Used
            </h4>
            <p className="mt-2 text-sm text-slate-200">
              {project.technologies.join(' · ')}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/^https?:\/\//i.test(project.liveUrl) && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Discuss This Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
