import { load } from 'js-yaml';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import type {
  ProfileData,
  ExperienceData,
  EducationData,
  SkillsData,
  ProjectsData,
  CertificationsData,
} from '../types/content';

// Import raw markdown content at build time from /content
import profileRaw from '../../content/profile.md?raw';
import experienceRaw from '../../content/experience.md?raw';
import educationRaw from '../../content/education.md?raw';
import skillsRaw from '../../content/skills.md?raw';
import projectsRaw from '../../content/projects.md?raw';
import certificationsRaw from '../../content/certifications.md?raw';

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: true,
});

/**
 * Universal markdown + YAML frontmatter parser
 */
export function parseMarkdownDoc<T>(rawContent: string): { data: T; body: string; htmlBody: string } {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    const html = DOMPurify.sanitize(marked.parse(rawContent) as string);
    return { data: {} as T, body: rawContent.trim(), htmlBody: html };
  }

  const rawYaml = match[1];
  const markdownBody = match[2].trim();
  const parsedData = (load(rawYaml) || {}) as T;
  const rawHtml = marked.parse(markdownBody) as string;
  const htmlBody = DOMPurify.sanitize(rawHtml);

  return {
    data: parsedData,
    body: markdownBody,
    htmlBody,
  };
}

export function getProfileData(): ProfileData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<ProfileData, 'body' | 'htmlBody'>>(profileRaw);
  return {
    ...data,
    body,
    htmlBody,
  };
}

export function getExperienceData(): ExperienceData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<ExperienceData, 'body' | 'htmlBody'>>(experienceRaw);
  return {
    experiences: data.experiences || [],
    mentoring: data.mentoring || [],
    body,
    htmlBody,
  };
}

export function getEducationData(): EducationData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<EducationData, 'body' | 'htmlBody'>>(educationRaw);
  return {
    education: data.education || [],
    body,
    htmlBody,
  };
}

export function getSkillsData(): SkillsData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<SkillsData, 'body' | 'htmlBody'>>(skillsRaw);
  return {
    categories: data.categories || [],
    body,
    htmlBody,
  };
}

export function getProjectsData(): ProjectsData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<ProjectsData, 'body' | 'htmlBody'>>(projectsRaw);
  return {
    projects: data.projects || [],
    body,
    htmlBody,
  };
}

export function getCertificationsData(): CertificationsData {
  const { data, body, htmlBody } = parseMarkdownDoc<Omit<CertificationsData, 'body' | 'htmlBody'>>(certificationsRaw);
  return {
    certifications: data.certifications || [],
    body,
    htmlBody,
  };
}
