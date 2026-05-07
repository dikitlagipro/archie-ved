export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-600/25 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Currently @ Populix · Jakarta, Indonesia
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
          <span className="block text-white mb-1">Hi, I'm Archie.</span>
          <span className="block gradient-text">I build products</span>
          <span className="block text-white">with AI.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          PM who bridges tech roots and customer empathy — using AI tools to ship faster,
          think clearer, and build products people actually love.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
          >
            View My Work ↓
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            Let's Connect →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-24 flex items-center justify-center gap-12 flex-wrap">
          {[
            { value: '5+', label: 'Years in Product' },
            { value: '3+', label: 'AI Tools Built' },
            { value: '3', label: 'Companies Scaled' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{value}</div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
