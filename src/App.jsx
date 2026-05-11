import React from 'react'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import About from './components/About'
import Values from './components/Values'
import Services from './components/Services'
import TeamAndPartners from './components/TeamAndPartners'
import ContactAndFooter from './components/ContactAndFooter'
import Service from './components/Services'
import { HelmetProvider } from 'react-helmet-async'
import Feature from './components/Feature'
import Features from './components/Feature'
const App = () => {
  return (
    <HelmetProvider>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Values />
        <Features />
        <Services />
        <TeamAndPartners />
        <ContactAndFooter />
      </main>
    </HelmetProvider>
  )
}

export default App