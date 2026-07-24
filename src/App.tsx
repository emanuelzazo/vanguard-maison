import { LanguageProvider } from './context/LanguageContext'
import LanguageToggle from './components/LanguageToggle'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Atelier from './components/Atelier'
import Heritage from './components/Heritage'
import Press from './components/Press'
import Journal from './components/Journal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="w-full bg-neutral-950">
        <LanguageToggle />
        <Header />
        <Hero />
        <Collection />
        <Atelier />
        <Heritage />
        <Press />
        <Journal />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
