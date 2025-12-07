import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Badge } from '../ui/badge';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        name: 'Picsum Explorer – React Image Gallery',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Framer Motion'],
        description: 'An immersive gallery for exploring the Lorem Picsum collection with a masonry layout and ambient focus mode.',
        bullets: [
            'Infinite scroll with Intersection Observer for smooth, automatic loading.',
            'Unsplash-style blur-up image loading with a fade-in effect.',
            'Ambient Focus Mode with a fullscreen carousel and soft brown-noise audio.',
            'Optimized with lazy loading, preloading, and a responsive design.',
        ],
        liveLink: 'https://picsum-explorer.netlify.app/',
        codeLink: '#',
    },
    {
        name: 'Notes App – React + Tailwind',
        tags: ['React', 'Tailwind CSS', 'Vite', 'Zustand'],
        description: 'A fast, aesthetic notes app focused on speed, theming, and a smooth writing experience.',
        bullets: [
            'Create notes with titles, details, tags, and media URLs.',
            'Custom theme engine with animated glows and localStorage persistence.',
            'Powerful multi-tag filtering system.',
            'Keyboard shortcuts for quick note creation and navigation.',
        ],
        liveLink: 'https://hashira-ember-nexus-codex.netlify.app',
        codeLink: '#',
    },
    {
        name: 'Book Finder — Open Library Search',
        tags: ['React', 'Open Library API', 'PWA', 'Zustand'],
        description: 'A no-login React app for searching Open Library and saving favorites locally.',
        bullets: [
            'Multi-mode search with debounced queries and URL parameter sync.',
            'Resilient UX with skeleton loaders, error states, and cancelable requests.',
            'Client-side filters for language, ebooks, and year range.',
            'Minimal PWA shell for offline-readiness and voice search.',
        ],
        liveLink: 'https://bookfinderall.netlify.app/',
        codeLink: '#',
    },
    {
        name: 'Eva Lite — AI Voice & Chat Assistant',
        tags: ['FastAPI', 'vLLM', 'Redis', 'ChromaDB', 'Docker', 'AI'],
        description: 'A production-ready Telegram AI assistant with GPU-aware microservices and optimized model serving.',
        bullets: [
            'Built with FastAPI, async Python, Redis, and ChromaDB.',
            'GPU-aware microservices for model serving, vector search, and TTS.',
            'Applied LoRA adapters and quantization for cost-efficient deployment.',
            'Integrated health checks, structured logging, and Prometheus metrics.',
        ],
        liveLink: '#',
        codeLink: '#',
    },
    {
        name: 'MERN E-commerce Website',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        description: 'A full-stack e-commerce website built using the MERN stack with basic payment flow integration.',
        bullets: [
            'Express backend for products, orders, and user management.',
            'MongoDB for efficient data storage.',
            'Responsive React UI for browsing and checkout.',
        ],
        liveLink: '#',
        codeLink: '#',
    },
    {
        name: 'CouponSpace – Coupon Sharing App',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        description: 'A simple coupon-sharing platform where users can browse and share coupons, built with Node.js.',
        bullets: [
            'Built with vanilla HTML, CSS, and JavaScript.',
            'Node.js and MongoDB backend for storing coupons.',
            'Clean UI designed for easy browsing.',
        ],
        liveLink: '#',
        codeLink: '#',
    },
];

const ProjectCard = ({ project, openPreview }) => {
    const cardRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        const xTo = gsap.quickTo(card, "x", { duration: 0.8, ease: "power3.out" });
        const yTo = gsap.quickTo(card, "y", { duration: 0.8, ease: "power3.out" });
        const rTo = gsap.quickTo(card, "rotation", { duration: 0.8, ease: "power3.out" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { top, left, width, height } = card.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x / 50);
            yTo(y / 50);
            rTo(x / 100);
        };

        const handleMouseEnter = () => {
            gsap.to(card, { 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 40px 80px -20px rgba(0,0,0,0.3)',
                duration: 0.4, 
                ease: 'power3.out' 
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, { 
                y: 0, 
                scale: 1,
                rotation: 0,
                x: 0,
                boxShadow: '0 24px 80px rgba(15,23,42,0.08)',
                duration: 0.6, 
                ease: 'power3.out' 
            });
            xTo(0);
            yTo(0);
            rTo(0);
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, { scope: cardRef });

    return (
        <div ref={cardRef} className="project-card relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg" style={{ willChange: 'transform' }}>
            <div className="project-card-content flex flex-grow flex-col p-6">
                <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground h-10">{project.description}</p>
                <div className="mt-4 flex overflow-x-auto gap-2 pb-2 no-scrollbar flex-nowrap">
                    {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                    ))}
                </div>
                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground/90 flex-grow">
                    {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                    ))}
                </ul>
                <div className="mt-6 flex justify-end gap-4 text-sm font-semibold">
                    {project.liveLink && project.liveLink !== '#' && (
                        <button
                            type="button"
                            onClick={() => openPreview(project)}
                            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground transition hover:scale-105"
                        >
                            <FiExternalLink /> Live Preview
                        </button>
                    )}
                    {project.codeLink && project.codeLink !== '#' && (
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
                            <FiGithub /> View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


const Projects = () => {
    const [previewProject, setPreviewProject] = useState(null);
    const container = useRef(null);
    const modalRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card');
        cards.forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 100,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                }
            });
        });
    }, { scope: container });

    useGSAP(() => {
        if (previewProject) {
            gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3 });
        }
    }, { dependencies: [previewProject] });

    const openPreview = (project) => setPreviewProject(project);

    const closePreview = () => {
        gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.3, onComplete: () => setPreviewProject(null) });
    };

    return (
        <section id="projects" className="relative py-20" ref={container}>
            <div className="container max-w-6xl text-center">
                <h2 className="text-3xl font-bold text-foreground tracking-tight">Projects</h2>
                <p className="mt-2 text-muted-foreground">A selection of work that shows how I think about UX, performance, and real-world impact.</p>
                <div className="mt-4 h-1 w-24 rounded-full bg-primary mx-auto" />
            </div>
            
            <div className="container max-w-6xl mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} openPreview={openPreview} />
                ))}
            </div>

            {previewProject && (
                 <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
                    onClick={closePreview}
                    ref={modalRef}
                >
                    <div
                        className="relative w-full max-w-5xl mx-4 rounded-3xl border border-white/10 bg-background/95 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                            <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Live playground</p>
                                <h3 className="text-lg font-semibold text-foreground">{previewProject.name}</h3>
                            </div>
                            <button
                                type="button"
                                onClick={closePreview}
                                className="rounded-full border border-white/20 px-3 py-1 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary"
                            >
                                Close
                            </button>
                        </div>
                        <div className="relative aspect-video w-full overflow-hidden rounded-b-3xl bg-black/80">
                            <iframe
                                src={previewProject.liveLink}
                                title={previewProject.name}
                                className="h-full w-full border-0"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 ...">
                                {/* ... (modal content) ... */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;