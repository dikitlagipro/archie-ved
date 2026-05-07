const skillGroups = [
  {
    label: 'AI & Emerging Tech',
    color: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    skills: ['Claude AI', 'Vibe Coding', 'Prompt Engineering', 'AI-Powered User Research', 'LLM-Augmented PRD Writing', 'Lovable', 'Gemini Canvas'],
  },
  {
    label: 'Product Management',
    color: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
    skills: ['Product Roadmapping', 'Stakeholder Management', 'Requirements Gathering', 'OKR Setting & Alignment', 'Data Analysis', 'Financial Analysis', 'Customer Research'],
  },
  {
    label: 'Tools & Platforms',
    color: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    skills: ['Jira', 'CleverTap', 'Zendesk', 'Microsoft BI', 'SAP', 'SQL', 'Cisco', 'Mikrotik'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">What I bring.</h2>

        <div className="flex flex-col gap-12 mb-24">
          {skillGroups.map(({ label, color, skills }) => (
            <div key={label}>
              <h3 className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-5">{label}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm border ${color} transition-all duration-200 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-5">Education</p>
            <h4 className="text-white font-semibold text-lg mb-1">BINUS University</h4>
            <p className="text-slate-400 text-sm">Bachelor's, Information System</p>
            <p className="text-slate-600 text-xs mt-2 font-mono">2008 – 2012</p>
          </div>

          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-5">Certifications</p>
            <ul className="space-y-3">
              {[
                'SAP Business One',
                'SQL Fundamentals — Sololearn',
              ].map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-slate-400 text-sm">
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-violet-400 text-xs">✓</span>
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
