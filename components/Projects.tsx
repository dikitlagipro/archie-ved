export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Things I've built.</h2>
          <p className="text-slate-400 text-lg max-w-xl">
            AI prototypes and vibe-coded tools — proof of work, not just case studies.
          </p>
        </div>

        <div className="relative rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 to-pink-600/10 p-16 text-center overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Coming Soon
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Portfolio in progress.
            </h3>
            <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
              Documenting my AI prototypes and vibe-coded tools. Check back soon — good things take a little time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
