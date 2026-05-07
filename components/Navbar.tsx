'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight gradient-text">AP</span>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://linkedin.com/in/archieprima"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-sm px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 text-violet-300 hover:bg-violet-600/30 transition-all duration-200"
        >
          LinkedIn →
        </a>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors py-1"
            >
              {item}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/archieprima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 text-sm"
          >
            LinkedIn →
          </a>
        </div>
      )}
    </nav>
  )
}
