import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: 'Founding Engineer',
    company: 'Elegans Solution',
    dates: 'Sep 2024 – Oct 2025',
    bullets: [
      'Designed & deployed Eva Lite (AI assistant) using FastAPI, vLLM, and GPU microservices.',
      'Built GPU-aware infrastructure, CI automation, and monitoring (Sentry, Prometheus).',
      'Applied AI optimizations (LoRA, quantization) to reduce infrastructure costs.',
      'Mentored engineers in backend, DevOps, and applied AI.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Postulate Info Tech',
    dates: 'Jun 2023 – Jul 2023',
    bullets: [
      'Built a full-stack web app with Pug, Node.js, Express.js, and MongoDB.',
      'Collaborated with a team of interns to deliver features on time.',
    ],
  },
];

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });

    tl.from('.experience-title', {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, 0)
    .from('.experience-item', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.3,
    }, 0.2);
  }, { scope: container });

  return (
    <section id="experience" className="py-20" ref={container}>
      <div className="container max-w-5xl">
        <div className="text-center experience-title">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">Experience</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-primary mx-auto" />
        </div>
        <div
          className="relative mt-12 max-w-3xl mx-auto space-y-10 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary before:to-transparent" // Increased contrast
        >
          {experienceData.map((job, index) => (
            <div
              key={index}
              className="relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur experience-item"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -6, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
            >
              <div className="absolute -left-10 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md"> {/* Accent-colored dot with number */}
                {index + 1}
              </div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-card-foreground">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.dates}</p>
              </div>
              <p className="text-md font-semibold text-muted-foreground/80 mt-1">{job.company}</p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
