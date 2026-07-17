'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type Cat = 'MOBILE' | 'WEB' | 'BRANDING'

type Item = { id: number; title: string; cat: Cat; img: string }

const ITEMS: Item[] = [
  { id: 1, title: 'PAYFLOW — MOBILE BANKING', cat: 'MOBILE', img: '/images/ui-1.png' },
  { id: 2, title: 'ATLAS — ANALYTICS DASHBOARD', cat: 'WEB', img: '/images/ui-2.png' },
  { id: 3, title: 'MONO — BRAND IDENTITY', cat: 'BRANDING', img: '/images/ui-3.png' },
  { id: 4, title: 'SHOPGRID — COMMERCE APP', cat: 'MOBILE', img: '/images/ui-4.png' },
  { id: 5, title: 'CONSOLE — SAAS SETTINGS', cat: 'WEB', img: '/images/ui-5.png' },
  { id: 6, title: 'VOYAGE — TRAVEL BOOKING', cat: 'MOBILE', img: '/images/ui-6.png' },
]

const FILTERS = ['ALL', 'MOBILE', 'WEB', 'BRANDING'] as const

export function UIDesign() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('ALL')
  const [active, setActive] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'ALL' ? ITEMS : ITEMS.filter((i) => i.cat === filter)),
    [filter],
  )

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((cur) => {
        if (cur === null) return cur
        const idx = visible.findIndex((i) => i.id === cur)
        const next = (idx + dir + visible.length) % visible.length
        return visible[next].id
      })
    },
    [visible],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, step])

  const activeItem = ITEMS.find((i) => i.id === active) ?? null

  return (
    <section id="design" className="relative border-t border-line bg-paper">
      <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8 md:py-28">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-ink">
          <span className="text-red">[</span> FIG. 06 — DESIGN <span className="text-red">]</span>
        </div>
        <h2 className="mb-10 font-display text-4xl text-ink md:text-6xl">UI_GALLERY</h2>

        <div className="mb-0 flex flex-wrap gap-6 border-b border-line pb-4">
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

        {/* contact sheet grid divided by hairlines */}
        <div className="grid grid-cols-2 border-l border-t border-line md:grid-cols-3">
          {visible.map((item, i) => (
            <button
              key={item.id}
              data-cursor="view"
              onClick={() => setActive(item.id)}
              className="group relative border-b border-r border-line text-left"
            >
              <figure>
                <div className="relative aspect-[4/3] w-full grayscale transition-all duration-300 group-hover:grayscale-0">
                  <Image
                    src={item.img || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-2 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-muted">
                  <span>[ FIG. {String(i + 1).padStart(2, '0')} ]</span>
                  <span>{item.cat}</span>
                </figcaption>
              </figure>

              {/* hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-ink/0 p-3 opacity-0 transition-all duration-200 group-hover:bg-ink/85 group-hover:opacity-100">
                <span className="font-display text-lg text-paper">{item.title}</span>
                <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-red">
                  View →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-paper/95 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink">
              <span>{activeItem.title}</span>
              <button onClick={() => setActive(null)} className="text-red" aria-label="Close">
                [ ESC — CLOSE ]
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full border border-ink bg-surface">
              <Image
                src={activeItem.img || '/placeholder.svg'}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            {/* crosshair-style nav arrows */}
            <button
              onClick={() => step(-1)}
              aria-label="Previous"
              className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink bg-paper font-mono text-ink transition-colors hover:text-red md:-left-14"
            >
              ←
            </button>
            <button
              onClick={() => step(1)}
              aria-label="Next"
              className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink bg-paper font-mono text-ink transition-colors hover:text-red md:-right-14"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
