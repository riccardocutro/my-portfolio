import Image from 'next/image';
import { PROJECTS } from '@/src/data/projects';
import { ProjectCard } from '@/src/components/projectCard';
import { SkillsSection } from '@/src/components/SkillsSection';
import { ContactSection } from '@/src/components/ContactSection';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-24 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="flex-1 space-y-5">
          <p className="text-sm text-emerald-400">Software Developer & AI Student</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Sviluppo applicazioni web e software, sistemi backend e AI.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-400">
            Sono Riccardo, studente di informatica. Qui trovi i miei progetti di backend,
            sistemi operativi e sviluppo web, con le tecnologie che uso ogni giorno.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Vedi i progetti
            </a>
            <a
              href="https://github.com/riccardocutro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <FaGithub className="h-5 w-5" aria-hidden />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/riccardo-cutr%C3%B2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5 text-sky-400" aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500/50 shadow-lg shadow-emerald-500/10 sm:h-52 sm:w-52">
          <Image
            src="/profile.jpg"
            alt="Foto di Riccardo Cutrò"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <SkillsSection />

      {/* Progetti */}
      <section id="projects" className="scroll-mt-24 space-y-6">
        <h2 className="border-b border-slate-800 pb-3 text-2xl font-bold text-white">
          Progetti in evidenza
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
