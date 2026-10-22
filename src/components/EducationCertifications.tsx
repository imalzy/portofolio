import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ShieldCheck } from 'lucide-react';
import type { EducationData, CertificationsData } from '../types/content';

interface EduCertProps {
  educationData: EducationData;
  certificationsData: CertificationsData;
}

export default function EducationCertifications({
  educationData,
  certificationsData,
}: EduCertProps) {
  return (
    <section
      id="education"
      aria-label="Story Chapter 06: ECDSA Cryptography Thesis & Microfrontend Certifications"
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
              06 // ROOTS & CREDS
            </span>
            <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              ECDSA Cryptography Thesis & Microfrontend Certifications
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Education &{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              verified certifications.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Formal computer science degree and specialized training in scalable frontend architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Formal Education
              </h3>
            </div>

            {educationData.education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                    {item.institution}
                  </h4>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 w-fit">
                    {item.years}
                  </span>
                </div>

                <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {item.degree}
                </div>

                {item.thesis && (
                  <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200/80 dark:border-zinc-700/60 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                      <BookOpen className="w-4 h-4 text-indigo-500" />
                      <span>Bachelor Research Thesis</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                      "{item.thesis}"
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-mono">
                      Focus: Digital signatures (ECDSA) and data steganography techniques.
                    </p>
                  </div>
                )}

                {item.notes && (
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Certifications Column with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Certifications
              </h3>
            </div>

            {certificationsData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </div>

                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3 leading-snug">
                    {cert.title}
                  </h4>

                  {cert.summary && (
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                      {cert.summary}
                    </p>
                  )}

                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      {cert.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
