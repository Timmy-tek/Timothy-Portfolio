'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { CornerCrosshairs } from '@/components/crosshair'

const ENTRIES = [
  {
    id: 'ENTRY_01',
    role: 'LYNKUP / UI-UX DESIGNER',
    period: 'DEC 2025 — PRESENT',
    status: 'ACTIVE',
    red: true,
    points: [
      'Designed and shipped the core product interface from spec to production.',
      'Built a reusable component system enforcing a strict layout grid.',
      'Collaborated with engineering to translate design tokens into code.',
    ],
  },
  {
    id: 'ENTRY_02',
    role: 'ROOMRADAR / PRODUCT DESIGNER',
    period: 'ONGOING',
    status: 'IN PROGRESS',
    red: false,
    points: [
      'Led end-to-end product design for a housing discovery platform.',
      'Ran user research and mapped flows into a calibrated design system.',
      'Prototyped motion and micro-interactions for key conversion paths.',
    ],
  },
  {
    id: 'ENTRY_03',
    role: 'LIVEPETAL SYSTEMS LTD / FRONTEND DEVELOPER',
    period: '2026',
    status: 'SIWES INTERNSHIP',
    red: false,
    points: [
      'Developed and maintained responsive web applications for internal and client projects.',
      'Translated UI designs into performant, accessible interfaces using modern frontend technologies.',
      'Collaborated across design and development teams to deliver production-ready features.',
    ],
  },]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.exp-line', {
        scaleY: 1,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 60%',
        },
      })
      gsap.from('.exp-entry', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 60%',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      className="relative bg-ink text-paper"
    >
      <div className="grid-overlay-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <CornerCrosshairs color="var(--color-paper)" />

      <div ref={ref} className="relative z-20 mx-auto max-w-[1600px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-paper">
          <span className="text-red">[</span> FIG. 04 — LOG <span className="text-red">]</span>
        </div>
        <h2 className="mb-16 font-display text-4xl text-paper md:text-6xl">WHERE I&apos;VE WORKED</h2>

        <div className="relative pl-6 md:pl-10">
          {/* timeline line */}
          <div className="exp-line absolute left-0 top-1 h-[calc(100%-1rem)] w-px origin-top scale-y-0 bg-paper" />

          <div className="flex flex-col gap-14">
            {ENTRIES.map((e) => (
              <article key={e.id} className="exp-entry relative">
                <span className="absolute -left-6 top-1.5 h-2 w-2 -translate-x-1/2 bg-red md:-left-10" aria-hidden="true" />
                <div className="flex flex-col gap-3 border-b border-white/20 pb-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-paper/70">
                      {e.id}
                    </div>
                    <span
                      className={`border px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                        e.red ? 'border-red text-red' : 'border-paper text-paper'
                      }`}
                    >
                      [ STATUS: {e.status} ]
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-paper md:text-3xl">{e.role}</h3>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-paper/60">
                    {e.period}
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {e.points.map((p, i) => (
                      <li key={i} className="flex gap-3 font-mono text-[0.85rem] leading-relaxed text-paper/80">
                        <span className="text-red">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
