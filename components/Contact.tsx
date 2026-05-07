export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-6xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-pink-600/20 border border-violet-500/20 rounded-3xl" />
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's build<br />something great.
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Open to interesting conversations — PM roles, collabs, AI tools, or just talking
            shop about product. Chill, no hype.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/archieprima"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
            >
              Connect on LinkedIn →
            </a>
            <a
              href="mailto:archieprima@gmail.com"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
            >
              Send an Email →
            </a>
          </div>

          <p className="text-slate-600 text-sm mt-12 font-mono">archie-ved.online</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 flex items-center justify-between text-slate-600 text-sm">
        <span className="font-mono">Archie Prima · {new Date().getFullYear()}</span>
        <span className="font-mono">Built with Next.js + AI</span>
      </div>
    </section>
  )
}
