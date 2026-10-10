export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Canteen IPC Manager',
    description: 'Applicazione in C per la gestione di processi concorrenti e memoria condivisa via IPC Linux.',
    technologies: ['C', 'Linux IPC', 'Shared Memory', 'Makefile'],
    githubUrl: 'https://github.com/riccardocutro/SistemiOperativi',
  },
  {
    id: '2',
    title: 'Portfolio Next.js',
    description: 'Sito personale interattivo realizzato per sperimentare React, Next.js App Router e Tailwind CSS.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tuo-user/portfolio',
  },
];