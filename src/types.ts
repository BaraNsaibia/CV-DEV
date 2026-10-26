export type Language = 'en' | 'fr';
export type Theme = 'dark' | 'light';

export interface BilingualText {
  en: string;
  fr: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: BilingualText;
  badge: BilingualText;
  type: string;
  organization?: string;
  period: string;
  description: BilingualText;
  problemStatement: BilingualText;
  engineeringChallenges: BilingualText[];
  keyOutcomes: BilingualText[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageFallbackGradient: string;
  metrics?: BilingualText[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: BilingualText;
  location: BilingualText;
  employmentType: BilingualText;
  period: BilingualText;
  isCurrent?: boolean;
  summary: BilingualText;
  contributions: BilingualText[];
  technologies: string[];
  badgeColor?: string;
}

export interface SkillCategory {
  id: string;
  name: BilingualText;
  description: BilingualText;
  skills: {
    name: string;
    level: string; // e.g. "Core Stack", "Proficient", "Familiar"
    highlight?: boolean;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'ai' | 'cs' | 'cloud' | 'language' | 'leadership';
  description: BilingualText;
  credentialUrl?: string;
  badgeText?: string;
}

export interface DocumentItem {
  id: string;
  title: BilingualText;
  description: BilingualText;
  fileEn: string;
  fileFr: string;
  pageCount: string;
  type: 'cv' | 'report';
}
