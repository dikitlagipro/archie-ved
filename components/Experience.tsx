const experiences = [
  {
    role: 'Product Manager · Internal',
    company: 'Populix',
    period: 'Jan 2023 – Present',
    dotColor: 'bg-violet-500',
    highlights: [
      'Integrated Claude AI into daily PM workflows, cutting documentation time by ~50%',
      'Built interactive mockups via vibe coding — faster stakeholder alignment without engineering',
      'Spearheaded revenue enhancement through redirect link initiative with measurable uplift',
      'AI-assisted customer feedback analysis to surface patterns and drive faster iteration',
      'Streamlined sprint planning, backlog grooming, and OKR alignment using AI',
    ],
  },
  {
    role: 'Product Manager · Poplite',
    company: 'Populix',
    period: 'Feb 2022 – Jan 2023',
    dotColor: 'bg-blue-500',
    highlights: [
      'Architected Poplite product — integrated payment and a robust survey builder from scratch',
      'Drove user acquisition, retention improvement, and churn reduction strategies',
      'Led UX revitalization initiatives aligned with user needs and industry trends',
      'Used metrics and data analysis to inform all strategic product decisions',
    ],
  },
  {
    role: 'Product · Customer Experience',
    company: 'Modalku',
    period: 'Feb 2019 – May 2022',
    dotColor: 'bg-cyan-500',
    highlights: [
      'Managed Modalku Apps experience, ensuring a seamless and engaging user journey',
      'Oversaw customer onboarding and addressed pain points to improve satisfaction and retention',
      'Maintained retention and churn analytics, driving continuous improvement',
      'Defined value-driven metrics to support product goals and validate development plans',
    ],
  },
  {
    role: 'System Engineer',
    company: 'Gill Capital Group',
    period: 'Dec 2016 – Feb 2019',
    dotColor: 'bg-emerald-500',
    highlights: [
      'Planned and executed site systems for H&M, Zippy, Chicco, Brandy Melville, Candylicious',
      'Managed network infrastructure: Cisco Firewall ASA, Windows Server, MS SQL, SAP Basis',
      'Led project management, timelines, and retail management operations',
    ],
  },
  {
    role: 'IT Staff',
    company: 'ISMAYA GROUP',
    period: 'Mar 2014 – Sep 2016',
    dotColor: 'bg-amber-500',
    highlights: [
      'Built Mikrotik-based internet infrastructure for outlets and restaurants',
      'Created WiFi/Hotspot systems and maintained full IT infrastructure across locations',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 max-w-6xl mx-auto px-6">
      <p className="text-violet-400 text-sm font-mono uppercase tracking-widest mb-4">Experience</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Where I've been.</h2>

      <div className="relative">
        <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-blue-500 via-cyan-500 to-slate-700" />

        <div className="flex flex-col gap-10">
          {experiences.map(({ role, company, period, dotColor, highlights }, i) => (
            <div key={i} className="relative pl-14">
              <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full ${dotColor} flex items-center justify-center shadow-lg`}>
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>

              <div className="group p-6 rounded-2xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">{role}</h3>
                    <span className="text-slate-500 text-sm">{company}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 flex-shrink-0">
                    {period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                      <span className="text-violet-500 mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
