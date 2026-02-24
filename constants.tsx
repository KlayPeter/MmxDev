
import React from 'react';
import { Project, Blog, Note } from './types';

// Re-export from data files
export { PROJECTS } from './data/projects';
export { BLOGS } from './data/blogs';
export { NOTES } from './data/notes';

export const COLORS = {
  blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', glow: 'shadow-blue-200' },
  purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', glow: 'shadow-purple-200' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', glow: 'shadow-emerald-200' },
  rose: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', glow: 'shadow-rose-200' },
  amber: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', glow: 'shadow-amber-200' },
};

export const ICONS = {
  Vibe: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12V22L22 10H13V2Z" fill="currentColor"/></svg>,
  LLM: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  RAG: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M4 10H20M10 4V20" stroke="currentColor" strokeWidth="2"/></svg>,
  Agent: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L19 21L12 17L5 21L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Prompt: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 17L10 11L4 5M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};
