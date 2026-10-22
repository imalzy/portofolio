import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import type { ExperienceData } from '../types/content';

interface ExperienceProps {
  data: ExperienceData;
}

type TabType = 'all' | 'enterprise' | 'freelance' | 'mentoring';

export default function Experience({ data }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const enterpriseCompanies = [
    'Lapang Data',
    'Paper.id',
    'PT Bank Mandiri (Persero) Tbk.',
    'PT. Fammi Indonesia Edutech',
    'PT. Katalis Indonesia Santosa',
    'it-mudah.com',
  ];

  const filteredExperiences = data.experiences.filter((exp) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'enterprise') return enterpriseCompanies.includes(exp.company);
    if (activeTab === 'freelance') return exp.company.toLowerCase().includes('freelance');
    return false;
  });

  return (
    <section
      id="experience"
      aria-label="Story Chapter 03: Milestone Checkpoint Career Journey"
      className="py-24 md:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header with scroll fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              03 // TIMELINE
            </span>
            <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Milestone Checkpoint Career Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Where I've worked &{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              what I delivered.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Over 5 years of engineering experience spanning enterprise banking, fintech invoicing, and full-stack client applications.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-14 bg-zinc-100 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
              activeTab === 'all'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            All Work ({data.experiences.length + data.mentoring.length})
          </button>
          <button
            onClick={() => setActiveTab('enterprise')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
              activeTab === 'enterprise'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Companies ({enterpriseCompanies.length})
          </button>
          <button
            onClick={() => setActiveTab('freelance')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
              activeTab === 'freelance'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Contracts & Engagements
          </button>
          <button
            onClick={() => setActiveTab('mentoring')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
              activeTab === 'mentoring'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            Mentoring & Instruction ({data.mentoring.length})
          </button>
        </div>

        {/* Experience Timeline with Scroll-Triggered Fade-In */}
        {activeTab !== 'mentoring' && (
          <div className="relative pl-6 sm:pl-10 border-l-2 border-indigo-500/20 dark:border-indigo-500/20 space-y-12">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-zinc-900 border-2 border-indigo-500 text-indigo-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className="bg-white dark:bg-zinc-900/90 p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all">
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-zinc-100">
                        {exp.role}
                      </h3>
                      <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.startDate} – {exp.endDate}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {exp.summary && (
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                      {exp.summary}
                    </p>
                  )}

                  {/* Highlights Grid for Freelance */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {exp.highlights.map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              {h.title}
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                              {h.period}
                            </span>
                          </div>
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                            {h.role}
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
                            {h.description}
                          </p>
                          {h.skills && (
                            <div className="flex flex-wrap gap-1.5">
                              {h.skills.map((s, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {exp.achievements.map((item, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mentoring Section */}
        {(activeTab === 'all' || activeTab === 'mentoring') && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className={activeTab === 'all' ? 'mt-20 pt-16 border-t border-zinc-200/80 dark:border-zinc-800/80' : ''}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100">
                  Mentoring & Teaching
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Helping other developers level up through bootcamps, masterclasses, and code reviews.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.mentoring.map((item, mIdx) => (
                <div
                  key={mIdx}
                  className="p-6 rounded-3xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {item.role}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {item.organization}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
