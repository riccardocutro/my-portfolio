import Link from 'next/link';

export const metadata = {
  title: 'Curriculum Vitae | Portfolio',
  description: 'Visualizza e scarica il mio Curriculum Vitae.',
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12 max-w-5xl mx-auto flex flex-col items-center">
      {/* Intestazione e Bottone Scarica PDF */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Curriculum Vitae</h1>
          <p className="text-slate-400 text-sm mt-1">
            Visualizza l'anteprima online o scarica il file in formato PDF.
          </p>
        </div>

        <a
          href="/cv.pdf"
          download="Curriculum_Vitae.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Scarica PDF
        </a>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="w-full h-[80vh] rounded-xl border border-slate-800 overflow-hidden bg-slate-900">
        <iframe
          src="/cv.pdf"
          className="w-full h-full border-none"
          title="Anteprima Curriculum Vitae"
        />
      </div>
    </main>
  );
}