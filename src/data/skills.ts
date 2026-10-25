import type { IconType } from 'react-icons';
import {
  FaJava, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiC, SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiSpringboot, SiExpress, SiNodedotjs, SiPostgresql,
  SiLinux, SiGit, SiPandas, SiMongodb, SiCplusplus, SiAssemblyscript, SiRiscv,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Linguaggi',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820', level: 5 },
      { name: 'C', icon: SiC, color: '#a8b9cc', level: 3 },
      { name: 'C++', icon: SiCplusplus, color: '#a8b9cc', level: 3 },
      { name: 'Python', icon: SiPython, color: '#3776ab', level: 2 },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', level: 3 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 3 },
      { name: 'RiscV Assembly', icon: SiRiscv, color: '#3178c6', level: 2 },
    ],
  },
  {
    title: 'Framework e librerie',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f', level: 5 },
      { name: 'Express', icon: SiExpress, color: '#e2e8f0', level: 3 },
      { name: 'React', icon: SiReact, color: '#61dafb', level: 2 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#e2e8f0', level: 2 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', level: 2 },
      { name: 'Pandas', icon: SiPandas, color: '#a78bfa', level: 3 },
    ],
  },
  {
    title: 'Web, database e strumenti',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#e34f26', level: 5 },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', level: 4 },
      { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e', level: 3 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1', level: 5 },
      { name: 'Linux', icon: SiLinux, color: '#fcc624', level: 3 },
      { name: 'Git', icon: SiGit, color: '#f05032', level: 4 },
      { name: 'MongoDB', icon: SiMongodb, color: '#5fa04e', level: 2 },
    ],
  },
];

export const LEVEL_LABELS: Record<number, string> = {
  1: 'Base',
  2: 'Elementare',
  3: 'Intermedio',
  4: 'Avanzato',
  5: 'Esperto',
};
