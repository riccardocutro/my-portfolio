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
    title: 'Gestionale mensa universitaria',
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
  {
    id: '3',
    title: 'MovieVerse',
    description: 'Progetto universitario della materia Tecnologie Web: Backend in SpringBoot ed Express. Frontend in HTML, CSS e JavaScript.',
    technologies: ['Java', 'SpringBoot', 'Express', 'CSS', 'HTML', 'JavaScript', 'Node', 'Jupiter Notebook', 'Python', 'Pandas'],
    githubUrl: 'https://github.com/riccardocutro/MovieVerse',
  },
  {
    id: '4',
    title: 'Sviluppo Applicazioni Software',
    description: 'Progetto universitario della materia Sviluppo Applicazioni Software: Backend in SpringBoot ed Express. Frontend in HTML, CSS e JavaScript.',
    technologies: ['Java', 'jUnit', 'PostgreSQL'],
    githubUrl: 'https://github.com/riccardocutro/SAS',
  },
  
];