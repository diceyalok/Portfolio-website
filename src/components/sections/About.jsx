import { motion } from 'framer-motion';

const quickFacts = [
  'Current Focus: React, AI assistants, performance-first UIs',
  'Role: Full Stack Developer & AI Engineer',
  'Location: India',
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        className="container max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-foreground tracking-tight">About</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-indigo-500 mx-auto md:mx-0" />
        </motion.div>
        <motion.div className="mt-10 grid md:grid-cols-3 gap-8" variants={itemVariants}>
          <div className="md:col-span-2 space-y-6 text-muted-foreground">
            <p className="text-lg text-foreground/90">
              I’m a full stack developer and AI engineer who enjoys building things that feel smooth, intentional, and practical — whether it’s a calming image gallery, a focused notes app, or a voice-enabled AI assistant.
            </p>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p>
              Recently, I worked as a Founding Engineer at Elegans Solution, where I helped design and deploy Eva Lite, a production-ready AI assistant using FastAPI, vLLM, Redis, ChromaDB, and XTTS. I focus a lot on performance, cost optimization, and developer experience.
              </p>
              <p className="mt-4">
              On the front-end side, I love working with React, Vite, and Tailwind CSS, building UIs that feel fast, responsive, and a little addictive to use.
              </p>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Always exploring</p>
            <p>When I’m not coding, you’ll probably find me experimenting with new UI ideas, tweaking animations, or reading about systems and tooling that make engineers faster.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Quick Facts</h3>
            <motion.div className="flex flex-col space-y-3" variants={containerVariants}>
              {quickFacts.map((fact, index) => (
                <motion.div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground backdrop-blur" variants={itemVariants}>
                  {fact}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
