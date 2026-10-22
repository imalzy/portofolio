/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StoryTracker from './components/StoryTracker';
import {
  getProfileData,
  getExperienceData,
  getEducationData,
  getSkillsData,
  getProjectsData,
  getCertificationsData,
} from './lib/content';

export default function App() {
  // Statically load markdown data at build time
  const profile = useMemo(() => getProfileData(), []);
  const experience = useMemo(() => getExperienceData(), []);
  const education = useMemo(() => getEducationData(), []);
  const skills = useMemo(() => getSkillsData(), []);
  const projects = useMemo(() => getProjectsData(), []);
  const certifications = useMemo(() => getCertificationsData(), []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:text-indigo-200">
      <Navbar profile={profile} />
      <StoryTracker />

      <main className="flex-1 w-full overflow-x-hidden">
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience data={experience} />
        <Projects data={projects} />
        <Skills data={skills} />
        <EducationCertifications
          educationData={education}
          certificationsData={certifications}
        />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </div>
  );
}
