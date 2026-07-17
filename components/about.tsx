'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { CornerCrosshairs } from '@/components/crosshair'

// const BIO_LINES = [
//   'I am Adegbola Timothy — a creative frontend developer and',
//   'UI/UX designer operating out of Lagos, Nigeria. I build',
//   'interfaces where engineering precision and editorial design',
//   'meet, treating every layout like a calibrated instrument.',
//   'My work lives at the intersection of motion, systems and',
//   'craft — shipping products that feel deliberate down to the',
//   'last hairline. I believe the interface is the product.',
// ]
const BIO_LINES = [
  'I am Adegbola Timothy — a creative frontend developer and UI/UX designer operating out of Lagos, Nigeria.',
  'I design and build digital experiences that are intuitive, visually refined, and built with purpose.',
  'My work sits at the intersection of design, interaction, and modern frontend development—crafting products that feel seamless, thoughtful, and engaging.',
  'I believe great interfaces don\'t just look beautiful;',
  'they communicate, guide, and leave a lasting impression.',
]

const DATA = [
  { k: 'Location', v: 'Lagos, NG' },
  { k: 'Role', v: 'Creative Developer' },
  { k: 'Status', v: 'Available', red: true },
  { k: 'Experience', v: '3+ Years' },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = ref.current?.querySelectorAll('.bio-line')
    if (!lines) return
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 110,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 65%',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="relative border-t border-line bg-paper">
      <CornerCrosshairs />
      <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-ink">
          <span className="text-red">[</span> FIG. 03 — PROFILE <span className="text-red">]</span>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* LEFT */}
          <div className="md:col-span-4">
            <figure>
              <div className="relative aspect-[4/5] w-full border border-line grayscale">
                <Image
                  src="/images/portrait.jpg"
                  alt="Portrait of Adegbola Timothy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted">
                [ SUBJECT: A. TIMOTHY ]
              </figcaption>
            </figure>

            <dl className="mt-6 border-t border-line">
              {DATA.map((d) => (
                <div key={d.k} className="flex items-center justify-between border-b border-line py-2.5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    {d.k}
                  </dt>
                  <dd
                    className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] ${
                      d.red ? 'text-red' : 'text-ink'
                    }`}
                  >
                    {d.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-8 md:pl-8">
            <div className="max-w-2xl">
              {BIO_LINES.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <p
                    className={`bio-line py-0.5 text-xl leading-relaxed text-ink md:text-2xl ${
                      i === 4 ? 'inline-block border-b-2 border-red' : ''
                    }`}
                  >
                    {line}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <p className="font-mono tracking-[0.15em] text-ink">Studies:</p>
              {['FUTA — B.TECH CS', 'ALTSCHOOL — CLOUD ENG'].map((chip) => (
                <span
                  key={chip}
                  className="border border-ink px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink"
                >
                  [{chip}]
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
