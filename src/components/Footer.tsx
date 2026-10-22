import { ArrowUp, Heart, Code2 } from 'lucide-react';
import type { ProfileData } from '../types/content';

interface FooterProps {
  profile: ProfileData;
}

export default function Footer({ profile }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-bold text-xs flex items-center justify-center">
              IZ
            </div>
            <div>
              <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                {profile.name}
              </span>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {profile.title}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-400 dark:text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>Content loaded statically from </span>
            <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              /content/*.md
            </code>
          </div>
        </div>
      </div>
    </footer>
  );
}
