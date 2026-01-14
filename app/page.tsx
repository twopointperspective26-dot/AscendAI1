import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import SkillsGrid from '../components/SkillsGrid'

export default function Page() {
  return (
    <div className="py-8">
      <NavBar />
      <main className="mt-8">
        <Hero />
        <section className="mt-12">
          <SkillsGrid />
        </section>
      </main>
    </div>
  )
}
