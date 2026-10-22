export interface SocialLinks {
  linkedin?: string;
  github?: string;
  portfolio?: string;
  twitter?: string;
  [key: string]: string | undefined;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  shortBio: string;
  social: SocialLinks;
  resumeUrl: string;
  avatar?: string;
  stats?: StatItem[];
  body: string;
  htmlBody: string;
}

export interface HighlightItem {
  title: string;
  period: string;
  role: string;
  description: string;
  skills?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  isCurrent?: boolean;
  achievements?: string[];
  summary?: string;
  highlights?: HighlightItem[];
}

export interface MentoringItem {
  organization: string;
  role: string;
  period: string;
  details: string;
}

export interface ExperienceData {
  experiences: ExperienceItem[];
  mentoring: MentoringItem[];
  body: string;
  htmlBody: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  location?: string;
  thesis?: string;
  notes?: string;
}

export interface EducationData {
  education: EducationItem[];
  body: string;
  htmlBody: string;
}

export interface SkillItem {
  name: string;
  level?: string;
}

export interface SkillCategory {
  name: string;
  description?: string;
  skills: SkillItem[];
}

export interface SkillsData {
  categories: SkillCategory[];
  body: string;
  htmlBody: string;
}

export interface ProjectItem {
  title: string;
  role: string;
  period: string;
  company: string;
  description: string;
  techStack: string[];
  link?: string;
  secondaryLink?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
  metric?: string;
}

export interface ProjectsData {
  projects: ProjectItem[];
  body: string;
  htmlBody: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  credentialId?: string;
  skills?: string[];
  summary?: string;
  link?: string;
}

export interface CertificationsData {
  certifications: CertificationItem[];
  body: string;
  htmlBody: string;
}
