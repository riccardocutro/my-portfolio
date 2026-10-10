import { PROJECTS } from '@/src/data/projects';
import { ProjectCard } from '@/src/components/projectCard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20 space-y-4">
        <span className="text-emerald-400 font-mono text-sm tracking-wide">
          // Software Developer & AI Student
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Sviluppo software pulito, sistemi backend e AI.
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          Benvenuto nel mio portfolio. Qui trovi una selezione dei miei progetti di sviluppo,
          architetture backend e sperimentazioni con React e Next.js.
        </p>
        <div className="pt-4 flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            Contatti
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
          Progetti in evidenza
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}