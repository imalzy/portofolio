import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Compass, Sparkles } from 'lucide-react';

export const CHAPTERS = [
  {
    id: 'hero',
    number: '01',
    tag: 'ORIGIN',
    title: 'Hero & Architectural Console',
    desc: 'Introduction, live code console & quick stats',
  },
  {
    id: 'about',
    number: '02',
    tag: 'PHILOSOPHY',
    title: 'Engineering Constitution & Bento Pillars',
    desc: 'How I think about code quality & architecture',
  },
  {
    id: 'experience',
    number: '03',
    tag: 'TIMELINE',
    title: 'Milestone Checkpoint Career Journey',
    desc: '5+ years shipping at Bank Mandiri, Paper.id & more',
  },
  {
    id: 'projects',
    number: '04',
    tag: 'SHIP LOG',
    title: 'Case Study Mockups & Production Metrics',
    desc: '9 production web & mobile systems with previews',
  },
  {
    id: 'skills',
    number: '05',
    tag: 'ARSENAL',
    title: 'Interactive Tech Matrix with Discipline Filters',
    desc: 'Languages, frameworks, architecture & tools',
  },
  {
    id: 'education',
    number: '06',
    tag: 'ROOTS & CREDS',
    title: 'ECDSA Cryptography Thesis & Microfrontend Certifications',
    desc: 'Academic foundations & specialized training',
  },
  {
    id: 'contact',
    number: '07',
    tag: 'TRANSMIT',
    title: 'Direct Frequency, Instant Email Copy, and Mailto Composer',
    desc: 'Get in touch for engineering roles or consulting',
  },
];

export default function StoryTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const scrollPos = window.scrollY + 220;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapterIndex(i);
          return;
        }
      }
      setActiveChapterIndex(0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsExpanded(false);
    }
  };

  const activeChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <>
      {/* Top linear progress bar with glowing gradient */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(99,102,241,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Story Chapter Pill (Bottom Right) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-3 w-80 sm:w-96 rounded-3xl bg-zinc-950/95 text-white backdrop-blur-2xl border border-white/10 shadow-2xl p-4 overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  <span className="font-mono text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    Story Chapters
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  {Math.round(scrollProgress)}% read
                </span>
              </div>

              <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
                {CHAPTERS.map((ch, idx) => {
                  const isActive = activeChapterIndex === idx;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => jumpTo(ch.id)}
                      className={`w-full text-left p-2.5 rounded-2xl transition-all flex items-start gap-3 ${
                        isActive
                          ? 'bg-indigo-600/25 border border-indigo-500/50 text-white shadow-sm'
                          : 'hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs font-bold mt-0.5 px-1.5 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-indigo-500 text-white'
                            : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        {ch.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-xs font-semibold text-zinc-100">
                            {ch.tag}
                          </span>
                          <span className="text-[10px] text-zinc-500 truncate">
                            ({ch.title})
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 truncate mt-0.5">
                          {ch.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Pill Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-zinc-950/90 text-white backdrop-blur-xl border border-white/10 shadow-2xl cursor-pointer select-none"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-bold text-indigo-400">
              {activeChapter.number}
            </span>
            <span className="font-mono text-xs font-bold tracking-wider text-zinc-200">
              // {activeChapter.tag}
            </span>
          </div>

          <div className="hidden sm:block text-[11px] text-zinc-400 max-w-[170px] truncate border-l border-zinc-700 pl-2">
            {activeChapter.title}
          </div>

          {/* Quick-jump Dots */}
          <div className="flex items-center gap-1 pl-1">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={(e) => {
                  e.stopPropagation();
                  jumpTo(ch.id);
                }}
                className={`transition-all rounded-full focus:outline-none ${
                  activeChapterIndex === idx
                    ? 'w-4 h-2 bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]'
                    : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400'
                }`}
                title={`${ch.number} // ${ch.tag} (${ch.title})`}
                aria-label={`Jump to chapter ${ch.number}: ${ch.tag}`}
              />
            ))}
          </div>

          <ChevronUp
            className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-180 text-white' : ''
            }`}
          />
        </motion.div>
      </div>
    </>
  );
}
