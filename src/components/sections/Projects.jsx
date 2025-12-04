import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projectsData = [
    {
        name: 'Picsum Explorer – Immersive React Image Gallery',
        tags: ['React', 'Vite', 'Tailwind CSS', 'Web Audio API'],
        description: 'A beautiful, immersive gallery built with React, Vite, and Tailwind CSS for exploring the Lorem Picsum collection.',
        bullets: [
            'Infinite scroll with Intersection Observer for smooth, automatic loading',
            'Masonry/Pinterest-style layout that adapts to varying image sizes',
            'Unsplash-style blur-up image loading with thumbnails → full-resolution fade-in',
            'Ambient Focus Mode with fullscreen carousel, smooth crossfades, dimmed background, and soft brown-noise audio',
            'Optimized with lazy loading, preloading, and responsive design for a fast, fluid experience',
        ],
        liveLink: 'https://picsum-explorer.netlify.app/',
        codeLink: '#',
    },
    {
        name: 'Notes App – React + Tailwind, Theme Engine & Shortcuts',
        tags: ['React', 'Tailwind CSS'],
        description: 'A fast, aesthetic notes app focused on speed, theming, and a smooth writing experience.',
        bullets: [
            'Create notes with titles, details, tags, and media (image/video via URL)',
            'Custom theme engine with animated glows and preset palettes, persisted using localStorage',
            'Powerful tag system with multi-tag filtering and one-click “Clear Filters”',
            'Keyboard shortcuts (Ctrl/Cmd + K to focus title, Ctrl/Cmd + Enter to submit note)',
            'Fully client-side and ideal for quick, personal note-taking',
        ],
        liveLink: 'https://hashira-ember-nexus-codex.netlify.app',
        codeLink: '#',
    },
    {
        name: 'Book Finder — Open Library Search App',
        tags: ['React', 'Open Library API', 'PWA'],
        description: 'A no-login React app for students to search Open Library by title, author, subject, or ISBN and save favorites locally.',
        bullets: [
            'Multi-mode search with debounced queries and URL parameter sync',
            'Glanceable book cards with cover, title, author, year, and details link',
            'Resilient UX with skeleton loaders, explicit empty/error states, retry, and cancelable requests',
            'Keyboard-friendly navigation: / to focus search, arrow keys to paginate, “s” to save a focused card',
            'Client-side filters: language chips, ebook-only toggle, and a year range slider',
            'Favorites workspace with localStorage persistence and CSV export',
            'Minimal PWA shell for offline-readiness and voice search using the Web Speech API',
        ],
        liveLink: 'https://bookfinderall.netlify.app/',
        codeLink: '#',
    },
    {
        name: 'Eva Lite — AI Voice & Chat Assistant (Production Project)',
        tags: ['FastAPI', 'vLLM', 'Redis', 'ChromaDB', 'XTTS', 'Docker', 'AI'],
        description: 'A production-ready Telegram AI assistant built with GPU-aware microservices and cost-optimized model serving.',
        bullets: [
            'Built with FastAPI, async Python, Redis, ChromaDB, and vLLM (LLaMA-based) for reasoning-heavy responses',
            'GPU-aware microservices for model serving, vector search, and text-to-speech (XTTS), orchestrated with Docker Compose',
            'Applied LoRA adapters, quantization, and pruning for cost-efficient deployment',
            'Integrated health checks, structured logging, Prometheus metrics, and Sentry alerts',
        ],
        liveLink: '#',
        codeLink: '#',
    },
    {
        name: 'MERN E-commerce Website',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        description: 'A full-stack e-commerce website built using the MERN stack.',
        bullets: [
            'Express backend for products, orders, and user management',
            'MongoDB for efficient data storage and retrieval',
            'Responsive React UI for browsing products and checkout flows',
            'Basic secure payment flow integration',
        ],
        liveLink: '#',
        codeLink: '#',
    },
    {
        name: 'CouponSpace – Coupon Sharing Web App',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
        description: 'A simple coupon-sharing platform where users can share and browse coupons.',
        bullets: [
            'Built with HTML, CSS, and JavaScript on the frontend',
            'Node.js and MongoDB on the backend for storing coupons',
            'Clean UI designed for easy browsing and future feature extension',
        ],
        liveLink: '#',
        codeLink: '#',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container max-w-6xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-foreground tracking-tight">Projects</h2>
                    <p className="mt-2 text-muted-foreground">
                        A selection of work that shows how I think about UX, performance, and real-world impact.
                    </p>
                    <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto" />
                </div>
                <motion.div
                    className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projectsData.map((project, index) => (
                <motion.div
                            key={index}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary/5 backdrop-blur"
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                scale: 1.01,
                                boxShadow: '0px 20px 45px rgba(79,70,229,0.25)',
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-card-foreground">{project.name}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                                </div>
                                <div className="h-14 w-14 rounded-2xl border border-white/15 bg-primary/10 text-primary/80 flex items-center justify-center text-sm font-semibold">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs uppercase tracking-wide rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground">{tag}</span>
                                ))}
                            </div>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground/90">
                                {project.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                            <div className="mt-6 flex gap-6 text-sm font-semibold">
                                {project.liveLink && project.liveLink !== '#' && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
                                        <FiExternalLink />
                                        View Live
                                    </a>
                                )}
                                {project.codeLink && project.codeLink !== '#' && (
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary">
                                        <FiGithub />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
