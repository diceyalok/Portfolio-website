import { motion } from 'framer-motion';

const experienceData = [
  {
    title: 'Founding Engineer',
    company: 'Elegans Solution',
    dates: 'Sep 2024 – Oct 2025',
    bullets: [
      'Orchestrated the design and deployment of Eva Lite, a production-ready AI assistant using FastAPI, vLLM, Redis, ChromaDB, XTTS, and GPU-aware microservices.',
      'Built Docker Compose–based GPU-aware infrastructure, CI automation, and monitoring with Sentry & Prometheus to keep systems observable and reliable.',
      'Implemented AI optimization strategies (LoRA, quantization, pruning, distillation) to keep infrastructure costs under control.',
      'Mentored engineers and interns in backend, DevOps, and applied AI systems.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Postulate Info Tech',
    dates: 'Jun 2023 – Jul 2023',
    bullets: [
      'Built a full-stack web app using Pug, CSS, Node.js, Express.js, MongoDB with real-time APIs for dynamic data rendering.',
      'Collaborated with a team of interns to deliver features on time with smooth communication and coordination.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">Experience</h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto" />
        </div>
        <motion.div
          className="relative mt-12 max-w-3xl mx-auto space-y-10 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/40 before:to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-primary/5 backdrop-blur"
              variants={itemVariants}
            >
              <span className="absolute -left-10 top-8 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-background text-xs text-muted-foreground">{index + 1}</span>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
