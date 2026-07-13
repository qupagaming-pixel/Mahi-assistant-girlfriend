/**
 * Types for Mahi AI Informational and Legal Pages System
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HelpArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  summary: string;
  tags: string[];
}

export interface TutorialCard {
  id: string;
  title: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  steps: string[];
  description: string;
}

export interface ReleaseNote {
  version: string;
  date: string;
  title: string;
  features: string[];
  improvements: string[];
  futurePlanned: string[];
}
