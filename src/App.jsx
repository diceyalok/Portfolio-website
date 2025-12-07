import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './lib/lenis'; // Import the lenis instance
import Navbar from './components/sections/Navbar';
import PersonaStrip from './components/ui/PersonaStrip';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const container = useRef();

  useGSAP(() => {
    // Initial fade-in
    gsap.fromTo('.orb-glow', 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 0.6, scale: 1, duration: 2.5, ease: 'power1.inOut' }
    );

    // Scroll-based parallax for orbs
    const orbs = gsap.utils.toArray('.orb-glow');
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        yPercent: (i + 1) * 10,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

  }, { scope: container });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground" ref={container}>
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="orb-glow absolute -top-16 right-0 h-48 w-48 rounded-full bg-primary/20 blur-[100px] md:-top-32 md:right-10 md:h-72 md:w-72 md:blur-[120px]" />
        <div className="orb-glow absolute top-20 -left-12 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px] md:top-40 md:-left-24 md:h-96 md:w-96 md:blur-[140px]" />
        <div className="orb-glow absolute bottom-0 right-0 h-48 w-48 rounded-full bg-emerald-400/10 blur-[100px] md:h-64 md:w-64 md:blur-[120px]" />
        <div className="orb-glow absolute top-1/2 right-1/2 h-64 w-64 rounded-full bg-blue-200/10 blur-2xl md:h-80 md:w-80 md:blur-3xl" />
      </div>
      <div className="relative">
        <Navbar />
        <PersonaStrip />
        <main className="container mx-auto px-4 py-16 space-y-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
