import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GitHubActivity from '@/components/GitHubActivity'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
