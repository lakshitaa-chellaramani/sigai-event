import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scaleValue = 1 + scrollPosition / 1000; // Adjust the value to control the zoom effect
      heroImageRef.current.style.transition = 'transform 0.4s ease-in-out'; // Add CSS transition for smoothness
      heroImageRef.current.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
    <section className='h-screen   '>
    <h1 ref={heroImageRef} className='text-center mt-80 mb-48 hero-image  font-bold text-transparent text-4xl lg:text-8xl bg-clip-text bg-gradient-to-r from-teal-300 to-blue-600'>ARTIFICIAL INTELLIGENCE WECLOMES YOU</h1>
    </section>
    </div>
  )
}

export default Hero
