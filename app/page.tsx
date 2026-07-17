import { Preloader } from '@/components/preloader'
import { Cursor } from '@/components/cursor'
import { SmoothScroll } from '@/components/smooth-scroll'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { UIDesign } from '@/components/ui-design'
import { Stack } from '@/components/stack'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <Navbar />
      <main className="bg-paper">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        {/*<UIDesign />*/}
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
