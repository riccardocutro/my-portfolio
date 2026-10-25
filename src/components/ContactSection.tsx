import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const CONTACTS = [
  {
    label: 'Email',
    value: 'riccardocutro@gmail.com',
    href: 'mailto:riccardocutro@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'GitHub',
    value: 'riccardocutro',
    href: 'https://github.com/riccardocutro',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Riccardo Cutrò',
    href: 'https://www.linkedin.com/in/riccardo-cutr%C3%B2',
    icon: FaLinkedin,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="mt-20 scroll-mt-24 space-y-6">
      <h2 className="border-b border-slate-800 pb-3 text-2xl font-bold text-white">
        Contatti
      </h2>
      <p className="max-w-xl text-slate-400">
        Cerco opportunità di stage e collaborazioni nello sviluppo software.
        Scrivimi pure, rispondo volentieri.
      </p>
      <ul className="grid gap-4 sm:grid-cols-3">
        {CONTACTS.map(({ label, value, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-emerald-500/50 hover:bg-slate-900"
            >
              <Icon className="h-5 w-5 text-emerald-400" aria-hidden />
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{label}</span>
                <span className="block truncate text-sm font-medium text-slate-200">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
