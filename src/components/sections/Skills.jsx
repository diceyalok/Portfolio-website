import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    category: 'Databases & Storage',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'ChromaDB'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Linux', 'Git', 'GitHub', 'basic CI', 'Sentry', 'Prometheus'],
  },
  {
    category: 'AI & ML',
    skills: ['PyTorch', 'vLLM', 'LoRA', 'quantization', 'pruning', 'basic RAG patterns'],
  },
  {
    category: 'Other',
    skills: ['Web Audio API', 'PWA', 'performance optimization', 'keyboard-first UX'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills</h2>
          <p className="mt-2 text-muted-foreground">
            The tools and technologies I’m most comfortable using to ship real products.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto" />
        </div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary/5 backdrop-blur"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground"
                    variants={itemVariants}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
