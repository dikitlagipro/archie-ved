const projects = [
  {
    tag: 'Vibe Code · In Progress',
    tagColor: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    title: 'Formo',
    desc: 'A product built with AI-assisted development. More details and a live demo coming soon — watch this space.',
    tools: ['AI-Assisted', 'Product Build', 'Vibe Code'],
    status: 'Coming Soon',
    statusColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    gradient: 'from-violet-600/20 to-pink-600/20',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    href: '#',
    disabled: true,
  },
  {
    tag: 'Vibe Code · Lovable',
    tagColor: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    title: 'Real-time Submission Dashboard',
    desc: 'Client-facing dashboard showing live survey submission progress. Built with Lovable for instant stakeholder visibility without waiting on engineering.',
    tools: ['Lovable', 'Real-time', 'Dashboard', 'Client-Facing'],
    status: 'Live',
    statusColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    href: '#',
    disabled: false,
  },
  {
    tag: 'Vibe Code · Gemini Canvas',
    tagColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    title: 'Excel → Survey Builder Importer',
    desc: 'Automated tool that converts Excel questionnaires into the survey builder format. Solved SLA bottlenecks for scripters — hours of manual work, gone.',
    tools: ['Gemini', 'Canvas', 'Automation', 'Internal Tool'],
    status: 'Live',
    statusColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    href: '#',
    disabled: false,
  },
  {
    tag: 'Vibe Code · Lovable',
    tagColor: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
    title: 'Padel Scoring System',
    desc: "Personal project — tracks match scores and rankings for padel games. Proof that PMs who vibe code ship for fun too, not just for work.",
    tools: ['Lovable', 'Sports Tech', 'Side Project', 'Personal'],
    status: 'Live',
    statusColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    gradient: 'from-pink-600/20 to-rose-600/20',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    href: '#',
    disabled: false,
  },
]

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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ tag, tagColor, title, desc, tools, status, statusColor, gradient, border, href, disabled }) => (
            <a
              key={title}
              href={href}
              aria-disabled={disabled}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${gradient} border ${border} transition-all duration-300 hover:-translate-y-1 block ${disabled ? 'cursor-default' : ''}`}
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <span className={`text-xs font-mono px-3 py-1.5 rounded-full border ${tagColor}`}>{tag}</span>
                <span className={`text-xs px-3 py-1.5 rounded-full border ${statusColor} flex-shrink-0`}>{status}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>

              {!disabled && (
                <div className="absolute bottom-8 right-8 text-slate-600 group-hover:text-white transition-colors text-lg">
                  →
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
