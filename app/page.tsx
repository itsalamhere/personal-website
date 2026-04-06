import Hero from '@/app/components/sections/Hero'
import DataAnalystSection from '@/app/components/sections/DataAnalystSection'
import DataScientistSection from '@/app/components/sections/DataScientistSection'
import ProjectManagerSection from '@/app/components/sections/ProjectManagerSection'
import Contact from '@/app/components/sections/Contact'

// Home Page
export default function Home() {
  return (
    <main>
      <Hero />
      <DataAnalystSection />
      <DataScientistSection />
      <ProjectManagerSection />
      <Contact />
    </main>
  )
}
