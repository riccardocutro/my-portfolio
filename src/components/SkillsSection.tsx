import { SKILL_CATEGORIES, LEVEL_LABELS, type Skill } from '@/src/data/skills';

function LevelDots({ level }: { level: number }) {
  return (
    <div
      className="flex gap-1.5"
      role="img"
      aria-label={`Livello ${level} su 5: ${LEVEL_LABELS[level]}`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-2 w-2 rounded-full ${
            n <= level ? 'bg-emerald-400' : 'bg-slate-700'
          }`}
        />
      ))}
    </div>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <li className="flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-3">
      <Icon className="h-7 w-7 shrink-0" style={{ color: skill.color }} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{skill.name}</p>
        <p className="text-xs text-slate-500">{LEVEL_LABELS[skill.level]}</p>
      </div>
      <LevelDots level={skill.level} />
    </li>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="mb-20 scroll-mt-24 space-y-8">
      <h2 className="border-b border-slate-800 pb-3 text-2xl font-bold text-white">
        Competenze
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-400">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
