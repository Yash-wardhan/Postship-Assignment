import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MiddleSection from './components/MiddleSection';
import FooterSection from './components/FooterSection';
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      inertia: 0.75,
      smoothMobile: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container>
      {/* Navbar */}
      <Navbar />
      <hr className='border-gray-700 w-full border-[1.59px]'/>
      {/* Main content sections */}
      <section data-scroll-section>
        <HeroSection />  
      </section>
      <section data-scroll-section>
        <MiddleSection />
      </section>
      <section data-scroll-section>
        <FooterSection />
      </section>
    </main>
  );
}

export default App;