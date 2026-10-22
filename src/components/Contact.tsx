import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import type { ProfileData } from '../types/content';

interface ContactProps {
  profile: ProfileData;
}

export default function Contact({ profile }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (e) {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Contact'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = async () => {
    const draftText = `To: ${profile.email}\nSubject: ${formData.subject || 'Opportunity / Collaboration'}\n\nHi Imal,\n\n${formData.message || "I'd like to connect regarding an engineering role or project."}\n\nBest regards,\n${formData.name || 'Your Name'} (${formData.email || 'Your Email'})`;
    try {
      await navigator.clipboard.writeText(draftText);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2000);
    } catch (e) {}
  };

  return (
    <section
      id="contact"
      aria-label="Story Chapter 07: Direct Frequency, Instant Email Copy, and Mailto Composer"
      className="py-24 md:py-32 relative"
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
              07 // TRANSMIT
            </span>
            <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Direct Frequency, Instant Email Copy, and Mailto Composer
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              great together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Available for Senior Software Engineer, Frontend Architect, and Tech Lead roles. Based in Jakarta and open to remote work worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                Direct Email
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            {/* Phone Card */}
            {profile.phone && (
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Phone & WhatsApp
                </div>
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            )}

            {/* Location & Social Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {profile.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {profile.social?.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-500" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                )}
                {profile.social?.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mailto Composer with Scroll Fade-In */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/90 p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
          >
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
              <MessageSquare className="w-5 h-5" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Send a Message
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              Fill out the form below to open your email client with a pre-written draft, or copy the text.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Engineering Role / Project Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your project, team, or role..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-sm border border-zinc-200 dark:border-zinc-700 transition-colors"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500 font-bold">Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
