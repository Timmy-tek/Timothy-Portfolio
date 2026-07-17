'use client'

import { useEffect, useRef, useState } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState<'default' | 'link' | 'view'>('default')

  useEffect(() => {
    // Disable on touch / coarse pointers.
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none-all')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const target = { ...pos }
    let rafId: number

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY

      const el = e.target as HTMLElement | null
      if (el?.closest('[data-cursor="view"]')) {
        setMode('view')
      } else if (el?.closest('a, button, [data-cursor="link"]')) {
        setMode('link')
      } else {
        setMode('default')
      }
    }

    const render = () => {
      // small easing for a precise, tight follow
      pos.x += (target.x - pos.x) * 0.35
      pos.y += (target.y - pos.y) * 0.35
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
      }
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      document.documentElement.classList.remove('cursor-none-all')
    }
  }, [])

  if (!enabled) return null

  const red = 'var(--color-red)'
  const ink = 'var(--color-ink)'
  const color = mode === 'default' ? ink : red

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ willChange: 'transform' }}
    >
      {mode === 'view' ? (
        <span
          className="flex items-center justify-center px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-surface)]"
          style={{ backgroundColor: red }}
        >
          View
        </span>
      ) : (
        <span
          className="relative block transition-all duration-150"
          style={{
            width: mode === 'link' ? 30 : 20,
            height: mode === 'link' ? 30 : 20,
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
            style={{ backgroundColor: color }}
          />
          <span
            className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
            style={{ backgroundColor: color }}
          />
        </span>
      )}
    </div>
  )
}
