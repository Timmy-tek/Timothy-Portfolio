'use client'

import { CornerCrosshairs } from '@/components/crosshair'

const SOCIALS = [
  { label: 'GITHUB', href: 'https://github.com' },
  { label: 'LINKEDIN', href: 'https://linkedin.com' },
  { label: 'BEHANCE', href: 'https://behance.net' },
  { label: 'TWITTER', href: 'https://twitter.com' },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center border-t border-line bg-paper"
    >
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <CornerCrosshairs />

      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-4 py-24 md:px-8">
        <div className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-ink">
          <span className="text-red">[</span> FIG. 08 — CONTACT <span className="text-red">]</span>
        </div>

        <h2
          className="font-display leading-[0.85] text-ink"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 11rem)' }}
        >
          LET&apos;S BUILD<span className="blink-red">_</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 border-t border-line pt-10 md:grid-cols-12">
          {/* email + socials */}
          <div className="md:col-span-8">
            <a
              href="mailto:adegbolatimothyjosh@gmail.com"
              className="group inline-flex items-center gap-3 font-mono text-lg tracking-tight text-ink md:text-2xl"
            >
              <span className="text-red">→</span>
              <span className="relative px-1">
                <span className="absolute inset-0 -z-0 w-0 bg-red transition-all duration-200 group-hover:w-full" />
                <span className="relative z-10 transition-colors duration-200 group-hover:text-[color:var(--color-surface)]">
                  adegbolatimothyjosh@gmail.com
                </span>
              </span>
            </a>

            <div className="mt-10 max-w-md border-t border-line">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-line py-3 font-mono text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:text-red"
                >
                  {s.label}
                  <span className="text-red opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* approval stamp */}
          <div className="flex items-end justify-start md:col-span-4 md:justify-end">
            <div className="flex h-20 w-20 items-center justify-center bg-red">
              <span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.15em] text-[color:var(--color-surface)]">
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
