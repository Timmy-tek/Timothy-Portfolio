'use client'

const NAV = [
  { label: '00_INDEX', href: '#index' },
  { label: '01_WORK', href: '#work' },
  { label: '02_DESIGN', href: '#design' },
  { label: '03_STACK', href: '#stack' },
  { label: '04_CONTACT', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[500] border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <nav className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 md:px-8">
        {/* LEFT — wordmark */}
        <a href="#index" className="flex items-baseline gap-1">
          <span className="font-display text-[1.1rem] leading-none text-ink">TIMMY</span>
          <span className="h-1.5 w-1.5 bg-red" aria-hidden="true" />
        </a>

        {/* CENTER — nav index */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink transition-colors hover:text-red"
              >
                [ {item.label} ]
                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-red transition-all duration-200 group-hover:w-3" />
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — status */}
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink">
          Status:{' '}
          <span className="text-red">[</span>
          <span className="text-ink">AVAILABLE</span>
          <span className="text-red">]</span>
        </div>
      </nav>
    </header>
  )
}
