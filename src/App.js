import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MiddleSection from './components/MiddleSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      <hr className='border-gray-400 border-[1.59px]'/>
      <main>
       <HeroSection />  
       <MiddleSection />
       <FooterSection />
      </main>
    </main>
  )
}

export default App
