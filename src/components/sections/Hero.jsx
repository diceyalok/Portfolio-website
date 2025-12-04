import { motion } from 'framer-motion';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const heroHighlights = ['AI-native UX', 'Full-stack systems', 'Latency-obsessed', 'Design systems'];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <motion.div
        className="container grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative text-center md:text-left space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-sm text-muted-foreground backdrop-blur"
            variants={itemVariants}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for full-time & high-impact freelance
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight drop-shadow"
            variants={itemVariants}
          >
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Alok
            </span>{' '}
            — Full Stack &amp; AI Engineer
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground"
            variants={itemVariants}
          >
            I build fast, immersive web experiences and production-grade AI assistants.
          </motion.p>
          <motion.p className="text-muted-foreground/80 max-w-xl mx-auto md:mx-0" variants={itemVariants}>
            From visually addictive React apps to GPU-aware AI systems, I love turning ideas into polished, real-world products.
          </motion.p>
          <motion.div className="flex flex-wrap justify-center md:justify-start gap-3" variants={itemVariants}>
            {heroHighlights.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-muted-foreground backdrop-blur transition hover:border-primary/60 hover:text-primary"
              >
                {label}
              </span>
            ))}
          </motion.div>
          <motion.div className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Projects
            </motion.a>
            <motion.a
              href="/Alok-kumar-kasyap-FlowCV.pdf"
              download
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        <motion.div className="relative" variants={itemVariants}>
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Core Stack</p>
                <p className="mt-2 text-xl font-semibold text-foreground">React · FastAPI · vLLM · Tailwind</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-center">
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Ship-ready projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-center">
                  <p className="text-3xl font-bold text-indigo-400">4</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Years leading builds</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-sm text-muted-foreground">
                “Everything I build balances craft + latency: micro-interactions up front, observability and cost controls behind the scenes.”
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
