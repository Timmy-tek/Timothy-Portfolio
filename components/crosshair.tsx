type CrosshairProps = {
  className?: string
  color?: string
}

// A single registration crosshair mark built from two thin lines.
export function Crosshair({ className = '', color = 'var(--color-ink)' }: CrosshairProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none relative inline-block h-3 w-3 ${className}`}
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
  )
}

// Places crosshair marks at the four corners of a relatively-positioned section.
export function CornerCrosshairs({ color = 'var(--color-ink)' }: { color?: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      <Crosshair color={color} className="absolute left-4 top-4 md:left-6 md:top-6" />
      <Crosshair color={color} className="absolute right-4 top-4 md:right-6 md:top-6" />
      <Crosshair color={color} className="absolute left-4 bottom-4 md:left-6 md:bottom-6" />
      <Crosshair color={color} className="absolute right-4 bottom-4 md:right-6 md:bottom-6" />
    </div>
  )
}
