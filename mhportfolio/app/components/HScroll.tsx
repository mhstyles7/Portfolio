'use client'
import Hero from './panels/Hero'
import Work from './panels/Work'
import About from './panels/About'
import Skills from './panels/Skills'
import Research from './panels/Research'
import Contact from './panels/Contact'

export default function HScroll() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Research />
      <Contact />
    </main>
  )
}
