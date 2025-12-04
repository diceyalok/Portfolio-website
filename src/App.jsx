import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="orb-glow absolute -top-32 right-10 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
        <div className="orb-glow absolute top-40 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-[140px]" />
        <div className="orb-glow absolute bottom-0 right-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-[120px]" />
      </div>
      <div className="relative">
        <Navbar />
        <main className="container mx-auto px-4 py-16 space-y-28">
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
