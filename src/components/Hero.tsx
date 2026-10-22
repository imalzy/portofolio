import { useState } from 'react';
import {
  FileDown,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  Phone,
  Terminal,
  Code2,
  Activity,
  Check,
  Copy,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import type { ProfileData } from '../types/content';

interface HeroProps {
  profile: ProfileData;
}

type TabType = 'code' | 'terminal' | 'stats';

export default function Hero({ profile }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>('code');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const hasPortfolioLink = Boolean(profile.social?.portfolio && profile.social.portfolio.trim() !== '');
  const hasGithubLink = Boolean(profile.social?.github && profile.social.github.trim() !== '');
  const hasLinkedinLink = Boolean(profile.social?.linkedin && profile.social.linkedin.trim() !== '');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (e) {}
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Story Chapter 01: Origin"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-b from-zinc-50 via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-900"
    >
      {/* Background Cyber Mesh Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-cyan-500/10 via-blue-500/10 to-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chapter 01 Milestone Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            01 // ORIGIN
          </span>
          <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            Hero & Architectural Console
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium ml-auto sm:ml-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Senior Engineering Roles</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative Headline */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08]">
              Building web apps that are{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-violet-500 bg-clip-text text-transparent">
                fast, clean, and reliable.
              </span>
            </h1>

            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 tracking-tight">
                {profile.name}
              </p>
              <p className="text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                <span>{profile.title}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                  {profile.location}
                </span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {profile.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.resumeUrl}
                download="CV_Imal_Zaya_Harahap.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 font-bold text-sm shadow-xl shadow-indigo-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <FileDown className="w-4 h-4 text-indigo-400 dark:text-indigo-600" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-xs sm:text-sm border border-zinc-200/80 dark:border-zinc-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span className="font-mono">{profile.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Links / Socials */}
            <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
              {hasLinkedinLink && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              )}
              {hasGithubLink && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {hasPortfolioLink && (
                <a
                  href={profile.social.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Architecture Console (No person photo!) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/90 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-zinc-400 text-[11px] ml-2">arch-console v5.2</span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'code'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    architecture.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'terminal'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    terminal
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === 'stats'
                        ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    telemetry
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 text-zinc-300 min-h-[300px] sm:min-h-[320px] flex flex-col justify-between overflow-x-auto">
                {activeTab === 'code' && (
                  <div className="space-y-1.5 leading-relaxed">
                    <p className="text-zinc-500">// System Architecture Blueprint</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-indigo-400">engineer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">identity:</span>{' '}
                      <span className="text-emerald-400">"{profile.name}"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">role:</span>{' '}
                      <span className="text-emerald-400">"Senior Full-Stack & Architect"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-zinc-400">specialization:</span> [
                    </p>
                    <p className="pl-8 text-cyan-300">
                      "Microfrontends", "Fintech Ledgers", "Real-Time WebRTC"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-zinc-400">coreStack:</span> [
                    </p>
                    <p className="pl-8 text-amber-300">
                      "TypeScript", "React", "Next.js 14", "NestJS", "Node.js"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-zinc-400">battleTestedAt:</span> [
                    </p>
                    <p className="pl-8 text-pink-400">
                      "Bank Mandiri", "Paper.id", "weddingMarket", "Lapang Data"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-zinc-400">status:</span>{' '}
                      <span className="text-emerald-400">"READY_TO_DEPLOY"</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 leading-relaxed">
                    <p className="text-zinc-500">$ pnpm run audit:architecture</p>
                    <p className="text-emerald-400">✓ Type safety: 100% strict adherence</p>
                    <p className="text-emerald-400">✓ Double-entry bookkeeping: Invariants validated</p>
                    <p className="text-emerald-400">✓ National bank KYC video latency: &lt; 200ms</p>
                    <p className="text-indigo-400">✓ 572 vendors onboarded via Next.js + React Native</p>
                    <p className="text-cyan-400">✓ Microfrontends shell: Zero decoupled runtime drift</p>
                    <div className="pt-2 text-zinc-400 flex items-center gap-1.5">
                      <span className="text-indigo-400">imal@arch-node:~$</span>
                      <span className="w-2 h-4 bg-indigo-400 inline-block animate-pulse" />
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-zinc-400">Experience Runtime:</span>
                      <span className="text-emerald-400 font-bold">5+ Years (Production)</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-zinc-400">Vendor Launch Scale:</span>
                      <span className="text-cyan-400 font-bold">572 Vendors Onboarded</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-zinc-400">System Availability:</span>
                      <span className="text-emerald-400 font-bold">99.99% Uptime Track Record</span>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <span className="text-zinc-400">Domain Authority:</span>
                      <span className="text-purple-400 font-bold">Fintech, KYC, Ledgers</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Distributed Leadership:</span>
                      <span className="text-indigo-400 font-bold">Remote & Hybrid Lead</span>
                    </div>
                  </div>
                )}

                {/* Footer status pill inside console */}
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-zinc-400">System Healthy</span>
                  </div>
                  <span className="font-mono text-zinc-500">Node v22 • Next.js 14 • NestJS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Stats Banner */}
        {profile.stats && profile.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {profile.stats.map((stat, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
                    {stat.value}
                  </span>
                  <Sparkles className="w-4 h-4 text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
