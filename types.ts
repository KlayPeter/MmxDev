
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'AI' | 'Web' | 'Mobile';
}

export interface Blog {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  date: string;
  tags: string[];
  url?: string;
  content?: string;
}

export interface Note {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  url?: string;
}

export interface AISkill {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}