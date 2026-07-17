'use client'

import { CornerCrosshairs } from '@/components/crosshair'

const COLUMNS = [
  { title: 'FRONTEND', items: ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'HTML/CSS'] },
  { title: 'ANIMATION', items: ['GSAP', 'FRAMER MOTION', 'LENIS', 'CSS ANIM'] },
  { title: 'DESIGN', items: ['FIGMA', 'DESIGN SYSTEMS', 'PROTOTYPING', 'WIREFRAMING'] },
  { title: 'BACKEND', items: ['PHP', 'NODE.JS', 'POSTGRES', 'REST APIS', 'GIT'] },
]

export function Stack() {
  return (
    <section id="stack" className="relative bg-ink text-paper">
      <div className="grid-overlay-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <CornerCrosshairs color="var(--color-paper)" />

      <div className="relative z-20 mx-auto max-w-[1600px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-paper">
          <span className="text-red">[</span> FIG. 07 — INDEX <span className="text-red">]</span>
        </div>
        <h2 className="mb-16 font-display text-4xl text-paper md:text-6xl">TECHNICAL_STACK</h2>

        <div className="grid grid-cols-1 gap-y-12 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-red">
                / {col.title}
              </h3>
              <ul>
                {col.items.map((item, i) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-b border-white/15 py-3 font-mono text-sm uppercase tracking-[0.1em] text-paper transition-colors hover:text-red"
                  >
                    <span className="text-red opacity-0 transition-opacity group-hover:opacity-100">
                      +
                    </span>
                    <span className="text-paper/40 group-hover:text-red">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
