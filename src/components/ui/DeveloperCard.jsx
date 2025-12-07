import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiCode, FiGrid } from 'react-icons/fi';

const DeveloperCard = () => {
  const container = useGSAP();

  const handleMouseEnter = () => {
    gsap.to(container.current, {
      boxShadow: '0px 0px 30px rgba(79, 70, 229, 0.3)',
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(container.current, {
      boxShadow: 'none',
      duration: 0.3,
    });
  };

  return (
    <div
      className="relative"
      ref={container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-panel relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60" />
        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <FiGrid className="text-primary" size={24} />
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Developer Card
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
            <FiCode className="text-primary" size={24} />
            <pre className="mt-2 text-xs text-muted-foreground">
              <code>
                {`const developer = {
  name: 'Alok',
  skills: ['React', 'AI', 'Design'],
};`}
              </code>
            </pre>
          </div>
          <div className="text-center text-muted-foreground text-sm">
            React · FastAPI · LLaMA · Tailwind
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Ship-ready projects
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/60 p-4 text-center">
              <p className="text-3xl font-bold text-indigo-400">2</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Years leading builds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
    </div>
  );
};

export default DeveloperCard;
