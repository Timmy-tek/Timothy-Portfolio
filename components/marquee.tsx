const ITEMS = ['REACT', 'GSAP', 'NEXT.JS', 'FIGMA', 'TAILWIND', 'NODE.JS', 'TYPESCRIPT', 'FRAMER']

export function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-3">
      <div className="marquee-track flex w-max whitespace-nowrap will-change-transform">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {row.map((item, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center font-mono text-sm uppercase tracking-[0.2em] text-paper"
              >
                <span className="px-6">{item}</span>
                <span className="text-red">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
