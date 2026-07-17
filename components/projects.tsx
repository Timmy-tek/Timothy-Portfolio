'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'

type Category = 'WEBSITE' | 'MOBILE' | 'FULLSTACK'

type Project = {
  id: string
  name: string
  category: Category
  img: string
  link: string
  github: string
  color: string
  stats: { build: string; stack: string; responsive: string; status: string; live: boolean }
}

const PROJECTS: Project[] = [
  { id: 'PROJECT_ALPHA', name: '🥛SPYLT', category: 'WEBSITE', img: '/images/Spylt.png', link:'https://spylt-awesome-gsap-website.vercel.app', github: 'https://github.com/Timmy-tek/SPYLT-Awesome-GSAP-website', color: '#523122', stats: { build: '2 WK', stack: 'REACT.JS, GSAP', responsive: '100%', status: 'LIVE', live: true } },
  { id: 'PROJECT_BETA', name: '🍸MOJITO', category: 'WEBSITE', img: '/images/Mojito.png', link: 'https://mojito-cocktails-gsap-two.vercel.app', github: 'https://github.com/Timmy-tek/gsap_cocktails', color: '#2D4628', stats: { build: '1 WK', stack: 'REACT.JS, GSAP', responsive: '100%', status: 'BETA', live: true } },
  { id: 'PROJECT_GAMMA', name: '🔵CODEFLOW', category: 'WEBSITE', img: '/images/Codeflow.png', link: 'https://codeflow-react-website.vercel.app', github: 'https://github.com/Timmy-tek/modern-react-website', color: '#445FD9', stats: { build: '1 WK', stack: 'REACT.JS, TAILWIND', responsive: '100%', status: 'LIVE', live: true } },
  { id: 'PROJECT_DELTA', name: '🎬CINEMAX', category: 'WEBSITE', img: '/images/Cinemax.png', link: 'https://cinemax-indol.vercel.app', github: 'https://github.com/Timmy-tek/CINEMAX', color: '#E8A045', stats: { build: '1 DY', stack: 'JS, APIs', responsive: '100%', status: 'LIVE', live: true } },
  { id: 'PROJECT_EPSILON', name: '🪙PAYFLOW', category: 'WEBSITE', img: '/images/Payflow.png', link: 'https://it-liveptals.github.io/Payflow-Landing-Page/', github: 'https://it-liveptals.github.io/Payflow-Landing-Page/', color: '#0B57D0', stats: { build: '1 WK', stack: 'JS, APIs', responsive: '100%', status: 'WIP', live: true } },
  { id: 'PROJECT_ZETA', name: '🧑🏻‍💻G PORTFOLIO', category: 'WEBSITE', img: '/images/Portfolio.png', link: 'https://portfolio-website-theta-tawny-84.vercel.app/', github: 'https://github.com/Timmy-tek/portfolio-website', color: '#0A0A0A', stats: { build: '1 WK', stack: 'NEXT.JS', responsive: '100%', status: 'LIVE', live: true } },
  { id: 'PROJECT_ETA', name: '🧑🏻‍💻EDUCORE', category: 'FULLSTACK', img: '/images/Educore.png', link: 'https://educore-schools.infinityfreeapp.com/', github: 'https://educore-schools.infinityfreeapp.com/', color: '#0A0A0A', stats: { build: '1 WK', stack: 'PHP', responsive: '100%', status: 'LIVE', live: true } },
  // { id: 'PROJECT_ETA', name: 'GRID.CO', category: 'WEB APP', img: '/images/proj-landing.png', stats: { build: '4 WK', stack: 'REACT', responsive: '100%', status: 'LIVE', live: true } },
  // { id: 'PROJECT_THETA', name: 'VAULT', category: 'FULLSTACK', img: '/images/proj-fullstack.png', stats: { build: '5 MO', stack: 'NEXT.JS', responsive: '100%', status: 'WIP', live: false } },
]

const FILTERS = ['ALL', 'WEB APP', 'MOBILE', 'FULLSTACK'] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('ALL')

  const visible = useMemo(
    () => (filter === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="work" className="relative border-t border-line bg-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink">
          <span className="text-red">[</span> FIG. 05 — WORK <span className="text-red">]</span>
        </div>
        <h2 className="mb-10 font-display text-4xl text-ink md:text-6xl">SELECTED_WORK</h2>

        {/* filter tabs */}
        <div className="mb-10 flex flex-wrap gap-6 border-b border-line pb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="group relative font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink transition-colors hover:text-red"
            >
              [ {f} ]
              <span
                className={`absolute -bottom-4 left-1/2 h-px -translate-x-1/2 bg-red transition-all duration-200 ${
                  filter === f ? 'w-4' : 'w-0 group-hover:w-4'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { stats } = project
  return (
    <article
      data-cursor="view"
      className="group flex flex-col border border-ink bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-red"
      style={{ boxShadow: 'none' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-ink)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* top strip */}
      <div className="flex items-center justify-between border-b border-ink px-3 py-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink">
          PROJECT_{String(index + 1).padStart(2, '0')}
        </span>
        <span className="border border-ink px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-ink">
          {project.category}
        </span>
      </div>

      {/* name */}
      <div className="px-3 pt-4">
        <h3 className="font-display text-2xl text-ink">{project.name}</h3>
      </div>

      {/* screenshot */}
      <figure className="px-3 pt-3">
        <div className="relative aspect-[16/10] w-full border border-line grayscale transition-all duration-300 group-hover:grayscale-0">
          <Image
            src={project.img || '/placeholder.svg'}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <figcaption className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
          [ FIG. {String(index + 1).padStart(2, '0')} — SCREENSHOT ]
        </figcaption>
      </figure>

      {/* stats 2x2 */}
      <div className="mt-3 grid grid-cols-2 border-t border-ink">
        <Stat value={stats.build} label="Build Time" border />
        <Stat value={stats.stack} label="Stack" />
        <Stat value={stats.responsive} label="Responsive" border top />
        <Stat value={stats.status} label="Status" top red={stats.live} />
      </div>

      {/* footer link */}
      <div className="flex border-t border-ink">
        <a
          href={project.link} target="_blank"
          style={{ '--hover-color': project.color } as React.CSSProperties}
          className={`flex-1 flex items-center justify-between border-r border-ink px-3 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink group-hover:bg-amber-300`}
        >
          View Project
          <span className="text-red transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <a
          href={project.github} target="_blank"
          className={`flex-1 flex items-center justify-between px-3 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink group-hover:bg-red-200`}
        >
          View Github
          <span className="text-red transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  )
}

function Stat({
  value,
  label,
  border,
  top,
  red,
}: {
  value: string
  label: string
  border?: boolean
  top?: boolean
  red?: boolean
}) {
  return (
    <div
      className={`flex flex-col gap-0.5 px-3 py-2.5 ${border ? 'border-r border-ink' : ''} ${
        top ? 'border-t border-ink' : ''
      }`}
    >
      <span className={`font-mono text-sm ${red ? 'text-red' : 'text-ink'}`}>{value}</span>
      <span className="font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  )
}
