'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'

export function Preloader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obj = { v: 0 }
    const tl = gsap.timeline()

    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onUpdate: () => setCount(Math.round(obj.v)),
    })
      // crosshair "clicks" into a lock position
      .to(markRef.current, {
        scale: 1.25,
        duration: 0.18,
        ease: 'back.out(3)',
      })
      .to(markRef.current, { scale: 1, duration: 0.12 })
      // lines draw in from edges
      .to('.pl-line-h', { scaleX: 1, duration: 0.5, ease: 'power3.inOut' }, '-=0.1')
      .to('.pl-line-v', { scaleY: 1, duration: 0.5, ease: 'power3.inOut' }, '<')
      .to(rootRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power3.inOut',
        delay: 0.15,
        onComplete: () => setDone(true),
      })

    return () => {
      tl.kill()
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-paper"
    >
      {/* drawing grid lines */}
      <div className="pl-line-h absolute left-0 top-1/3 h-px w-full origin-left scale-x-0 bg-line" />
      <div className="pl-line-h absolute left-0 top-2/3 h-px w-full origin-right scale-x-0 bg-line" />
      <div className="pl-line-v absolute left-1/4 top-0 h-full w-px origin-top scale-y-0 bg-line" />
      <div className="pl-line-v absolute left-3/4 top-0 h-full w-px origin-bottom scale-y-0 bg-line" />

      <div className="flex items-center gap-6">
        <div ref={markRef} className="relative h-8 w-8">
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-red" />
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-ink">
          Calibrating...{' '}
          <span className="tabular-nums">{count.toString().padStart(3, '0')}</span>
        </div>
      </div>
    </div>
  )
}
