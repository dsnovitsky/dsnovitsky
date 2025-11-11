import { LocaleProvider } from "@/contexts/LocaleContext"
import { Navigation } from "@/components/layout/Navigation"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { TechStack } from "@/components/sections/TechStack"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <LocaleProvider>
      <div className="min-h-screen">
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LocaleProvider>
  )
}

export default App
