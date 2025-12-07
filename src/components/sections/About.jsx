import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

gsap.registerPlugin(ScrollTrigger);

const quickFacts = [
  { icon: '🎯', text: 'Current Focus: React, AI assistants, performance-first UIs' },
  { icon: '👨‍💻', text: 'Role: Full Stack Developer & AI Engineer' },
  { icon: '📍', text: 'Location: India' },
];

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });

    tl.from('.about-title', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
    }, 0)
    .from('.about-title-sub', {
        opacity: 0,
        y: 10,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out'
    }, 0.2)
    .from('.about-p', {
        opacity: 0,
        y: 20,
        stagger: 0.3,
        duration: 0.6,
        ease: 'power2.out'
    }, 0.4)
    .from('.quick-fact', {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out'
    }, 0.6);
  }, { scope: container });

  return (
    <section id="about" className="py-20" ref={container}>
      <div className="container max-w-5xl">
        <div className="text-center md:text-left">
          <p className="tracking-[0.2em] text-xs text-slate-400 uppercase mb-2 about-title-sub">About</p>
          <div className="overflow-hidden">
            <h2 className="text-4xl font-bold text-foreground about-title">Who I Am</h2>
          </div>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary mx-auto md:mx-0 about-title-sub" />
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-lg text-foreground/90 about-p">
              I’m a full stack developer and AI engineer who enjoys building things that feel smooth, intentional, and practical — whether it’s a calming image gallery, a focused notes app, or a voice-enabled AI assistant.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur about-p">
              <p>
              Recently, I worked as a Founding Engineer at Elegans Solution, where I helped design and deploy Eva Lite, a production-ready AI assistant using FastAPI, vLLM, Redis, ChromaDB, and XTTS. I focus a lot on performance, cost optimization, and developer experience.
              </p>
              <p className="mt-4">
              On the front-end side, I love working with React, Vite, and Tailwind CSS, building UIs that feel fast, responsive, and a little addictive to use.
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground about-p">Always exploring</p>
            <p className="about-p">When I’m not coding, you’ll probably find experimenting with new UI ideas, tweaking animations, or reading about systems and tooling that make engineers faster.</p>
          </div>
          <div className="space-y-4">
            <Card className="border-none bg-transparent shadow-none">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl font-semibold text-foreground about-p">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col space-y-3">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center space-x-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground backdrop-blur quick-fact">
                      <span className="text-lg">{fact.icon}</span>
                      <p>{fact.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;