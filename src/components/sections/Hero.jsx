import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiEye, FiDownload } from 'react-icons/fi';
import DeveloperCard from '../ui/DeveloperCard';

const heroHighlights = ['AI-native UX', 'Full-stack systems', 'Latency-obsessed', 'Design systems'];

const Hero = () => {
  const container = useRef(null);
  const devCardContainer = useRef(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(devCardContainer.current, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(devCardContainer.current, "y", { duration: 0.8, ease: "power3.out" });
    const rTo = gsap.quickTo(devCardContainer.current, "rotation", { duration: 0.8, ease: "power3.out" });

    const parallax = (e) => {
      if (window.innerWidth < 1024) return;
      const R = devCardContainer.current.getBoundingClientRect();
      xTo((e.clientX - (R.left + R.width / 2)) / 25);
      yTo((e.clientY - (R.top + R.height / 2)) / 25);
      rTo((e.clientX - (R.left + R.width / 2)) / 200);
    };
    window.addEventListener('mousemove', parallax);

    // Timeline
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from('.headline-word', {
      y: '100%',
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power3.out'
    }, 0.8)
    .from('.subheading', {
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, 1.2)
    .from('.hero-badge', {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.3,
      ease: 'power3.out'
    }, 1.5)
    .from('.cta-button', {
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power3.out'
    }, 1.7)
    .from('.developer-card', {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, 0.5);

    return () => {
      window.removeEventListener('mousemove', parallax);
    };

  }, { scope: container });

  return (
    <section id="hero" className="min-h-screen flex items-center" ref={container}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary backdrop-blur hero-badge">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Currently exploring React + AI product teams
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight drop-shadow">
            <span className="inline-block headline-word">Hi,</span>{' '}
            <span className="inline-block headline-word">I’m</span>{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent inline-block headline-word">Alok</span>{' '}
            <span className="inline-block headline-word">—</span>{' '}
            <span className="inline-block headline-word">Full</span>{' '}
            <span className="inline-block headline-word">Stack</span>{' '}
            <span className="inline-block headline-word">&amp;</span>{' '}
            <span className="inline-block headline-word">AI</span>{' '}
            <span className="inline-block headline-word">Engineer</span>
          </h1>
          <p className="text-lg text-muted-foreground subheading">
            I care about latency, UX, and the invisible details that make products feel alive.
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 subheading">
            I build fast, immersive web experiences and production-grade AI assistants, turning ideas into polished, real-world products.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {heroHighlights.map((label) => (
              <span key={label} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary backdrop-blur hero-badge">
                {label}
              </span>
            ))}
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiEye />
              <span>View My Projects</span>
            </a>
            <a
              href="/Alok-kumar-kasyap-FlowCV.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-primary/50 text-primary/90 px-6 py-3 rounded-full font-semibold text-lg cta-button"
            >
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        <div className="max-w-md self-end developer-card order-first md:order-last" ref={devCardContainer} style={{ willChange: 'transform' }}>
          <DeveloperCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
