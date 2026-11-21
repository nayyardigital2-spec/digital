import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#F43F5E]">
            My Projects &amp; Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
            Practical Digital Projects Built Through Experimentation.
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Hands-on projects combining digital marketing principles, modern web design, and structured AI workflows.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => {
            const hasFailed = Boolean(failedImages[project.id]);
            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0C1324]/80 hover:border-[#E11D48]/50 overflow-hidden transition-colors duration-200"
              >
                <div>
                  {/* Project Thumbnail */}
                  <div className="relative aspect-[4/3] w-full bg-[#050811] border-b border-white/10 overflow-hidden">
                    {!hasFailed ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                        }
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-[#0C1324] to-[#050811] text-slate-400">
                        <Layers className="w-10 h-10 text-[#E11D48]" />
                        <span className="font-display text-lg font-semibold text-white">
                          {project.name}
                        </span>
                      </div>
                    )}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0C1324]/70 via-transparent to-transparent"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-medium text-[#F43F5E]">
                      {project.subtitle}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-300">
                      {project.shortDescription}
                    </p>

                    {/* Technologies Used (Clean Unboxed Text with Separators) */}
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <span className="block text-xs font-medium text-slate-400 mb-1.5">
                        Technologies Used
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {project.technologies.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1324]"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {/^https?:\/\//i.test(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
