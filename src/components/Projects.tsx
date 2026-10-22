import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Sparkles,
  Building2,
  Maximize2,
  X,
  ArrowUpRight,
  Shield,
  Layers,
} from 'lucide-react';
import type { ProjectsData, ProjectItem } from '../types/content';

interface ProjectsProps {
  data: ProjectsData;
}

type FilterCategory = 'all' | 'fintech' | 'enterprise' | 'mobile-ai';

export default function Projects({ data }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = data.projects.filter((project) => {
    if (activeFilter === 'fintech') {
      return (
        project.company.includes('Mandiri') ||
        project.company.includes('Paper.id') ||
        project.company.includes('LedgerOne') ||
        project.title.toLowerCase().includes('bookkeeping')
      );
    }
    if (activeFilter === 'enterprise') {
      return (
        project.company.includes('Lapang Data') ||
        project.company.includes('MinerbaOne') ||
        project.company.includes('Mandiri') ||
        project.company.includes('Offline Apps')
      );
    }
    if (activeFilter === 'mobile-ai') {
      return (
        project.company.includes('Medly AI') ||
        project.company.includes('Fammi') ||
        project.techStack.includes('React Native') ||
        project.techStack.includes('Ionic Framework')
      );
    }
    return true;
  });

  return (
    <section
      id="projects"
      aria-label="Story Chapter 04: Ship Log & Production Systems"
      className="py-24 md:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header with scroll fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                04 // SHIP LOG
              </span>
              <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                Case Study Mockups & Production Metrics
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
              Real projects built for{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                real users.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              A curated collection of web apps, mobile products, and backend systems shipped to production with measurable impact.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-zinc-100 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
                activeFilter === 'all'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              All Projects ({data.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('fintech')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
                activeFilter === 'fintech'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Fintech & Banking
            </button>
            <button
              onClick={() => setActiveFilter('enterprise')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
                activeFilter === 'enterprise'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Enterprise Web
            </button>
            <button
              onClick={() => setActiveFilter('mobile-ai')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
                activeFilter === 'mobile-ai'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Mobile & AI
            </button>
          </div>
        </motion.div>

        {/* Project Cards Grid with Scroll-Triggered Fade-In & Slide-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const hasPrimaryLink = Boolean(project.link && project.link.trim() !== '');
            const hasSecondaryLink = Boolean(project.secondaryLink && project.secondaryLink.trim() !== '');
            const hasRepo = Boolean(project.repo && project.repo.trim() !== '');
            const hasAnyLink = hasPrimaryLink || hasSecondaryLink || hasRepo;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div>
                  {/* Project Image Preview Container */}
                  <div
                    className="relative aspect-video w-full overflow-hidden bg-zinc-950 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-600 font-mono text-xs">
                        [Preview]
                      </div>
                    )}

                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Top badging on image */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg bg-zinc-950/80 text-white backdrop-blur-md border border-white/10">
                        {project.company}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="p-1.5 rounded-lg bg-zinc-950/80 text-white hover:text-indigo-400 backdrop-blur-md border border-white/10 transition-colors"
                        title="Enlarge preview"
                        aria-label="Enlarge preview"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Impact Metric Floating Callout */}
                    {project.metric && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-950/90 text-white backdrop-blur-md border border-emerald-500/30 text-xs font-semibold shadow-lg">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{project.metric}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-200/60 dark:border-indigo-900/60">
                        {project.role}
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-500 font-mono">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links: Rendered ONLY if a valid link exists */}
                  {hasAnyLink ? (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {hasPrimaryLink && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-xs hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                        >
                          <span>Live Portal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hasSecondaryLink && (
                        <a
                          href={project.secondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                        >
                          <span>Kopra</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hasRepo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="pt-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 italic flex items-center gap-1">
                      <Shield className="w-3 h-3 text-zinc-400" />
                      <span>Proprietary Client System</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Full Image Inspection */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
              <div>
                <h3 className="font-bold text-white text-base">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {selectedProject.company} • {selectedProject.role}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            {selectedProject.image && (
              <div className="relative aspect-video w-full bg-zinc-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Modal Details */}
            <div className="p-6 bg-zinc-900 space-y-4">
              {selectedProject.metric && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>{selectedProject.metric}</span>
                </div>
              )}
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
