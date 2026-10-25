export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-500">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; Portfolio Personal. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/riccardocutro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/riccardo-cutr%C3%B2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}