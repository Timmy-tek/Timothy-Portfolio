'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import { CornerCrosshairs } from '@/components/crosshair'

const WORD = 'TIMMY'.split('')

export function Hero() {
  const wordRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const letters = wordRef.current?.querySelectorAll('.hero-letter')
    if (!letters) return
    gsap.set(letters, { yPercent: 110 })
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.1,
      delay: 0.2,
    })
  }, [])

  return (
    <section
      id="index"
      className="relative min-h-screen w-full overflow-hidden bg-paper pt-14"
    >
      {/* blueprint 12-col grid */}
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <CornerCrosshairs />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-[1600px] flex-col px-4 md:px-8">
        {/* TOP STRIP */}
        <div className="flex items-center justify-between border-b border-line py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
          <span>Portfolio / Design + Code / 2026</span>
          <span className="hidden sm:inline">[ FIG. 01 — INDEX ]</span>
        </div>

        {/* CENTER */}
        <div className="flex flex-1 flex-col justify-center py-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-red">*</span>
            <span>Creative Dev + UI Designer</span>
          </div>

          <h1
            ref={wordRef}
            className="flex overflow-hidden font-display leading-[0.82] text-ink"
            style={{ fontSize: 'clamp(5rem, 16vw, 13rem)' }}
            aria-label="TIMMY"
          >
            {WORD.map((ch, i) => (
              <span key={i} className="hero-letter inline-block will-change-transform">
                {ch}
              </span>
            ))}
          </h1>

          {/* two-column strip */}
          <div className="mt-10 grid grid-cols-1 border-t border-line md:grid-cols-12">
            <div className="border-line py-6 md:col-span-8 md:border-r md:pr-8">
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink md:text-xl">
                {/*The reinvention of interfaces through code as craft.*/}
                Adegbola Timothy
              </p>
              <p className="mt-3 font-mono text-xs italic tracking-wide text-muted">
                {/*/ a design + engineering practice /*/}
                / making the world look better /
              </p>
            </div>

            {/* red accent block */}
            {/*<div className="md:col-span-4 md:pl-8 md:py-6">*/}
            {/*  <div className="flex flex-col justify-between bg-red p-5 text-[color:var(--color-surface)]">*/}
            {/*    <div className="flex items-center gap-5" aria-hidden="true">*/}
            {/*      <TechMark variant={0} />*/}
            {/*      <TechMark variant={1} />*/}
            {/*      <TechMark variant={2} />*/}
            {/*    </div>*/}
            {/*    <div className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.2em]">*/}
            {/*      Design / Code / Systems*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>

        {/* scattered corner thumbnails */}
        {/*<div className="pointer-events-none absolute right-4 top-28 hidden w-40 md:block">*/}
        {/*  <FigTile src="/images/workstation.png" caption="[ FIG. 01 — WORKSTATION ]" alt="Developer workstation" />*/}
        {/*</div>*/}
        {/*<div className="pointer-events-none absolute right-8 top-[52%] hidden w-32 lg:block">*/}
        {/*  <FigTile src="/images/sketchbook.png" caption="[ FIG. 02 — SKETCH BOOK ]" alt="UI wireframe sketchbook" />*/}
        {/*</div>*/}

        {/* BOTTOM STAT STRIP */}
        <div className="grid grid-cols-3 border-t border-line">
          {[
            { n: '10+', l: 'Projects Built' },
            { n: '3+', l: 'Years Exp' },
            { n: '5+', l: 'Technologies' },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`flex flex-col gap-1 py-5 ${i > 0 ? 'border-l border-line pl-4 md:pl-6' : ''}`}
            >
              <span className="font-display text-2xl text-ink md:text-3xl">{s.n}</span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FigTile({ src, caption, alt }: { src: string; caption: string; alt: string }) {
  return (
    <figure>
      <div className="relative aspect-square w-full border border-line grayscale">
        <Image src={src || '/placeholder.svg'} alt={alt} fill className="object-cover" sizes="160px" />
      </div>
      <figcaption className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}

// Abstract circuit-path line marks (not a generic icon set).
function TechMark({ variant }: { variant: number }) {
  const paths = [
    'M2 12h5l3-6 3 12 3-6h5',
    'M3 5h8v8M3 5v14h14M11 13l8 8',
    'M4 20V8l6-4 6 4v12M4 14h12M10 4v16',
  ]
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d={paths[variant]} />
    </svg>
  )
}
