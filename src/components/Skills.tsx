import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, GitBranch, Briefcase } from 'lucide-react';
import type { SkillsData } from '../types/content';

interface SkillsProps {
  data: SkillsData;
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Languages & Frameworks': Code,
  'Architecture & Patterns': Server,
  'Data & Infrastructure': Database,
  'Styling & UI': Layout,
  'Engineering Practices': GitBranch,
  'Domain Expertise': Briefcase,
};

export default function Skills({ data }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? data.categories
      : data.categories.filter((c) => c.name === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Story Chapter 05: Interactive Tech Matrix with Discipline Filters"
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
              05 // ARSENAL
            </span>
            <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Interactive Tech Matrix with Discipline Filters
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Tools & technologies I use{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              every day.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            A clear breakdown of languages, frameworks, UI libraries, and tools I use to build fast, reliable products.
          </p>
        </motion.div>

        {/* Quick Category Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10 bg-zinc-100 dark:bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 w-fit">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
              selectedCategory === 'all'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            All Skills
          </button>
          {data.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none ${
                selectedCategory === cat.name
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categories Grid with Scroll-Triggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.name] || Code;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {cat.name}
                      </h3>
                      {cat.description && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors"
                      >
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-indigo-500 font-normal">
                            // {skill.level}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
