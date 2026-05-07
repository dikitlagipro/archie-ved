const pillars = [
  {
    icon: '🤖',
    title: 'AI-Augmented PM',
    desc: 'Actually uses Claude, vibe coding, and prompt engineering in real PM workflows — not just talks about it. Cuts documentation time by ~50%.',
    gradient: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/30',
  },
  {
    icon: '🏢',
    title: 'Enterprise Product',
    desc: '3+ years at Populix managing internal tools, complex workflows, and stakeholders across orgs. Shipped redirect link initiative that drove measurable revenue growth.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
  },
  {
    icon: '🛤️',
    title: 'IT → PM Journey',
    desc: "Started as a systems engineer. That technical background makes me unusually good at bridging both sides — and unusually fast at validating ideas before involving engineering.",
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Always Learning,<br />Always Growing.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I set the big picture vision and strategy while staying close to the work —
            chatting with customers, crunching data, and getting to the heart of the problem.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            My edge? I'm a PM who actually ships things. With vibe coding and AI tools,
            I prototype and validate ideas before engineering ever gets involved — cutting
            cycle time significantly.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Customer First', 'Data-Driven', 'AI-Native', 'Vibe Coder'].map((tag) => (
              <span
                key={tag}
                className="text-sm px-4 py-2 rounded-full border border-violet-500/30 text-violet-300 bg-violet-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {pillars.map(({ icon, title, desc, gradient, border }) => (
            <div
              key={title}
              className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border ${border} hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
