import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

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

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        className="container max-w-4xl text-center rounded-[32px] border border-white/10 bg-white/5 px-8 py-14 shadow-2xl shadow-primary/10 backdrop-blur"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h2 className="text-3xl font-bold text-foreground">Contact</h2>
        <p className="mt-4 text-muted-foreground">
          I’m open to opportunities as a Frontend / Full Stack Developer or AI Engineer, especially on teams building thoughtful products with React, TypeScript, or applied AI.
        </p>
        <p className="mt-2 text-muted-foreground">
          If you’d like to work together, discuss a project, or just talk about UI and AI systems — feel free to reach out.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="mailto:alokkashyap166@gmail.com"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-primary transition hover:border-primary/40"
          >
            <FiMail /> alokkashyap166@gmail.com
          </a>
          <a
            href="https://github.com/diceyalok"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alok-kasyap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-muted-foreground transition hover:border-primary/40 hover:text-primary"
          >
            <FiLinkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
