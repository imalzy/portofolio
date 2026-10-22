import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, Users, Terminal } from 'lucide-react';
import type { ProfileData } from '../types/content';

interface AboutProps {
  profile: ProfileData;
}

const PILLARS = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    description:
      'Designing modular frontend components and clean API boundaries using React, Next.js, and NestJS.',
    border: 'hover:border-blue-500/50',
  },
  {
    icon: ShieldCheck,
    title: 'High Reliability',
    description:
      'Building production apps that can handle high volume — including banking digital onboarding and accounting ledgers.',
    border: 'hover:border-emerald-500/50',
  },
  {
    icon: Zap,
    title: 'Fast Iteration',
    description:
      'Using reusable component systems and modern development tools to ship quality features quickly.',
    border: 'hover:border-amber-500/50',
  },
  {
    icon: Users,
    title: 'Team Player & Mentor',
    description:
      'Collaborating cross-functionally with designers and product managers, plus mentoring developers at bootcamps.',
    border: 'hover:border-purple-500/50',
  },
];

export default function About({ profile }: AboutProps) {
  return (
    <section
      id="about"
      aria-label="Story Chapter 02: Engineering Constitution & Bento Pillars"
      className="py-24 md:py-32 border-b border-zinc-200/80 dark:border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            02 // PHILOSOPHY
          </span>
          <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Engineering Constitution & Bento Pillars
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
              Simple code that scales and{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                stays easy to maintain.
              </span>
            </h2>

            {/* Rendered Markdown Body from /content/profile.md */}
            <div
              className="prose-content text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: profile.htmlBody }}
            />

            {/* Constitution Highlight Card */}
            <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/80 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                <Terminal className="w-4 h-4" />
                <span>MY RULE OF THUMB</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                "Keep components small, keep data flows predictable, and make sure every screen feels responsive on any device."
              </p>
            </div>
          </motion.div>

          {/* Bento Grid Pillars Column with Scroll Stagger */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className={`p-6 rounded-3xl bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${pillar.border}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
