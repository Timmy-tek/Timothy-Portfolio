'use client'

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ExternalLink, CodeXml } from 'lucide-react'

type Category = 'WEBSITE' | 'MOBILE' | 'FULLSTACK'

type Project = {
  id: string
  name: string
  category: Category
  img: string
  link: string
  github: string
  color1: string
  color2: string
  stats: { build: string; stack: string; responsive: string; status: string; live: boolean }
  description?: {
    details: string
    images: string[]
    stack: string[]
  }
}

const PROJECTS: Project[] = [
  {
    id: 'PROJECT_ALPHA',
    name: '🥛SPYLT',
    category: 'WEBSITE',
    img: '/images/Spylt.png',
    link: 'https://spylt-awesome-gsap-website.vercel.app',
    github: 'https://github.com/Timmy-tek/SPYLT-Awesome-GSAP-website',
    color1: '#8c4c2e',
    color2: '#fb7498',
    stats: { build: '2 WK', stack: 'REACT.JS, GSAP', responsive: '100%', status: 'LIVE', live: true },
    description: {
      details: 'An awesome website showcasing GSAP animations and smooth scrolling effects.',
      images: ['/images/Spylt.png', '/images/Spylt1.png', '/images/Spylt2.png', '/images/Spylt3.png'],
      stack: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion']
    }
  },
  {
    id: 'PROJECT_BETA',
    name: '🍸MOJITO',
    category: 'WEBSITE',
    img: '/images/Mojito.png',
    link: 'https://mojito-cocktails-gsap-two.vercel.app',
    github: 'https://github.com/Timmy-tek/gsap_cocktails',
    color1: '#2d8f1b',
    color2: '#d5d229',
    stats: { build: '1 WK', stack: 'REACT.JS, GSAP', responsive: '100%', status: 'BETA', live: true },
    description: {
      details: 'A stylish cocktail recipe explorer with smooth GSAP transitions.',
      images: ['/images/Mojito.png', '/images/Mojito1.png', '/images/Mojito2.png', ],
      stack: ['React', 'GSAP', 'Tailwind CSS']
    }
  },
  {
    id: 'PROJECT_GAMMA',
    name: '🔵CODEFLOW',
    category: 'WEBSITE',
    img: '/images/Codeflow.png',
    link: 'https://codeflow-react-website.vercel.app',
    github: 'https://github.com/Timmy-tek/modern-react-website',
    color1: '#445FD9',
    color2: '#44d9b6',
    stats: { build: '1 WK', stack: 'REACT.JS, TAILWIND', responsive: '100%', status: 'LIVE', live: true },
    description: {
      details: 'A modern React website with a focus on clean design and performance.',
      images: ['/images/Codeflow.png', '/images/Codeflow1.png',],
      stack: ['React', 'Tailwind CSS', 'Framer Motion']
    }
  },
  {
    id: 'PROJECT_DELTA',
    name: '🎬CINEMAX',
    category: 'WEBSITE',
    img: '/images/Cinemax.png',
    link: 'https://cinemax-indol.vercel.app',
    github: 'https://github.com/Timmy-tek/CINEMAX',
    color1: '#E8A045',
    color2: '#d52b2b',
    stats: { build: '1 DY', stack: 'JS, APIs', responsive: '100%', status: 'LIVE', live: true },
    description: {
      details: 'A movie database application using external APIs to fetch real-time data.',
      images: ['/images/Cinemax.png', '/images/Cinemax1.png', '/images/Cinemax2.png'],
      stack: ['JavaScript', 'APIs', 'CSS']
    }
  },
  {
    id: 'PROJECT_EPSILON',
    name: '🪙PAYFLOW',
    category: 'WEBSITE',
    img: '/images/Payflow.png',
    link: 'https://it-liveptals.github.io/Payflow-Landing-Page/',
    github: 'https://it-liveptals.github.io/Payflow-Landing-Page/',
    color1: '#0B57D0',
    color2: '#d1e2ff',
    stats: { build: '1 WK', stack: 'JS, APIs', responsive: '100%', status: 'WIP', live: true },
    description: {
      details: 'A landing page for a financial application focusing on user flow and conversions.',
      images: ['/images/Payflow.png'],
      stack: ['JavaScript', 'APIs', 'CSS']
    }
  },
  {
    id: 'PROJECT_ZETA',
    name: '🧑🏻‍💻G PORTFOLIO',
    category: 'WEBSITE',
    img: '/images/Portfolio.png',
    link: 'https://portfolio-website-theta-tawny-84.vercel.app/',
    github: 'https://github.com/Timmy-tek/portfolio-website',
    color1: '#838383',
    color2: '#c1c1c1',
    stats: { build: '1 WK', stack: 'NEXT.JS', responsive: '100%', status: 'LIVE', live: true },
    description: {
      details: 'A personal portfolio website built with Next.js to showcase creative work.',
      images: ['/images/Portfolio.png'],
      stack: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    }
  },
  {
    id: 'PROJECT_ETA',
    name: '🧑🏻‍💻EDUCORE',
    category: 'FULLSTACK',
    img: '/images/Educore.png',
    link: 'https://educore-schools.infinityfreeapp.com/',
    github: 'https://educore-schools.infinityfreeapp.com/',
    color1: '#768dea',
    color2: '#bf76ea',
    stats: { build: '1 WK', stack: 'PHP', responsive: '100%', status: 'LIVE', live: true },
    description: {
      details: 'Asides from my skills in frontend development, I recently dived into PHP, bilding this fullstack project. EduCore is a modern, multi-tenant school management platform built to simplify and digitize the administrative, academic, and financial operations of secondary schools. Designed with Nigerian secondary education workflows in mind, EduCore brings together everything a school needs to run efficiently — from student registration and fee tracking to result management and parent communication — all within a single, beautifully organized system.  A demo account has been added. Sign up using-- email: johndoe@gmail.com, password: admin123',
      images: ['/images/Educore.png', '/images/Educore1.png', '/images/Educore2.png', '/images/Educore3.png',],
      stack: ['PHP', 'MySQL', 'Tailwind']
    }
  },
]

const FILTERS = ['ALL', 'WEBSITE', 'MOBILE', 'FULLSTACK'] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const visible = useMemo(
    () => (filter === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  useEffect(() => {
    const lenis = (window as any).lenis
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      if (lenis) lenis.stop()
    } else {
      document.body.style.overflow = 'unset'
      if (lenis) lenis.start()
    }
  }, [selectedProject])

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
            <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelectedProject(p)} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[80vh] overflow-y-auto border border-ink bg-paper shadow-[8px_8px_0_var(--color-ink)] transition-all duration-300"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
                style={{
                  boxShadow: 'none',
                  '--hover-color1': selectedProject.color1,
                  '--hover-color2': selectedProject.color2,
                } as React.CSSProperties}
                className="sticky top-0 z-10 flex items-center justify-between border-b border-ink bg-paper px-6 py-4">
              <h3 className="font-display text-2xl text-[var(--hover-color1)] md:text-3xl">{selectedProject.name}</h3>
              <button 
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-2 border border-ink p-2 transition-colors hover:bg-[var(--hover-color1)] hover:text-white"
              >
                <span className="hidden font-mono text-[0.6rem] uppercase tracking-widest md:block">Close</span>
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Description & Info */}
              <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr,250px]">
                <div>
                  <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Description</h4>
                  <p className="font-sans text-lg leading-relaxed text-ink">
                    {selectedProject.description?.details}
                  </p>
                </div>
                
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.description?.stack.map((item) => (
                        <span key={item} className="border border-ink px-2 py-1 font-mono text-[0.8rem] uppercase tracking-wider text-ink">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div
                      style={{
                        boxShadow: 'none',
                        '--hover-color1': selectedProject.color1,
                        '--hover-color2': selectedProject.color2,
                      } as React.CSSProperties}
                  >
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Links</h4>
                    <div className="flex flex-row w-full gap-2">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        className="flex items-center justify-between border border-ink px-4 py-2 font-mono text-[0.8rem] uppercase tracking-widest text-ink hover:bg-[var(--hover-color1)]  hover:text-white gap-2"
                      >
                        Visit Site <ExternalLink size={14} />
                      </a>
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        className="flex items-center justify-between border border-ink px-4 py-2 font-mono text-[0.8rem] uppercase tracking-widest text-ink hover:bg-[var(--hover-color2)] hover:text-white gap-2"
                      >
                        Github <CodeXml size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Gallery</h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {selectedProject.description?.images.map((img, i) => (
                    <div key={i} className="relative aspect-video w-full border border-ink">
                      <Image
                        src={img}
                        alt={`${selectedProject.name} gallery image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const { stats } = project
  return (
    <article
      data-cursor="view"
      className="group flex flex-col border border-ink bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-red cursor-pointer"
      style={{
        boxShadow: 'none',
        '--hover-color1': project.color1,
        '--hover-color2': project.color2,
      } as React.CSSProperties}

      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-ink)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      {/* top strip */}
      <div
          className="flex items-center justify-between border-b border-ink px-3 py-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink">
          PROJECT_{String(index + 1).padStart(2, '0')}
        </span>
        <span className="border border-ink px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-ink">
          {project.category}
        </span>
      </div>

      {/* name */}
      <div className="px-3 pt-4">
        <h3 className="font-display text-2xl text-ink group-hover:text-[var(--hover-color1)] ">{project.name}</h3>
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
      <div
          className="flex border-t border-ink">
        <a
          href={project.link} target="_blank"
          onClick={(e) => e.stopPropagation()}
          className={`flex-1 flex items-center justify-between border-r border-ink px-3 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink hover:bg-[var(--hover-color1)]`}
        >
          View Project
          <span className="text-red transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <a
          href={project.github} target="_blank"
          onClick={(e) => e.stopPropagation()}
          className={`flex-1 flex items-center justify-between px-3 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink hover:bg-[var(--hover-color2)]`}
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
