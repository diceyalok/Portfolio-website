import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const PersonaStrip = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(container.current, {
      y: -100,
      duration: 1,
      ease: 'power2.out',
      delay: 0.1,
    });
  }, { scope: container });

  return (
    <div
      className="bg-background/80 backdrop-blur-lg border-b border-white/5"
      ref={container}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-12 text-sm">
          <p>
            <span>🚀</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-indigo-400/80">
              &nbsp;Currently building UI + AI systems | Based in India | 10+ Projects Shipped
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonaStrip;
