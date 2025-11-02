// Type definitions matching MongoDB schema

export interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack' | 'ai';
  createdAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  author: string;
  publishedAt: string;
  tags: string[];
  image?: string;
  readTime: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

export interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  icon: string;
  proficiency: number; // 1-100
}

export interface BuildLogEntry {
  _id: string;
  date: string;
  title: string;
  description: string;
  milestone: boolean;
}
