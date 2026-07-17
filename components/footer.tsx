export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-4 py-6 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted md:flex-row md:px-8">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-sm text-ink">TIMMY</span>
          <span className="h-1 w-1 bg-red" aria-hidden="true" />
        </div>
        <div className="text-center text-ink">© 2026 ADEGBOLA TIMOTHY — ALL RIGHTS RESERVED</div>
        <div>LAGOS × NIGERIA × 2026</div>
      </div>
    </footer>
  )
}
