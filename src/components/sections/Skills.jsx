import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaLinux, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiPytorch, SiFastapi, SiVuedotjs, SiTensorflow, SiJupyter, SiAnaconda, SiNumpy, SiPandas } from 'react-icons/si';
import { DiAws } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { BiSolidCloudUpload } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";


gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: TbBrandNextjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'ChromaDB', icon: FaDatabase },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Linux', icon: FaLinux },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'AWS', icon: DiAws },
      { name: 'CI/CD', icon: BiSolidCloudUpload },
      { name: 'Sentry', icon: BsCheckCircle },
      { name: 'Prometheus', icon: null },
    ],
  },
  {
    category: 'AI & ML',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Jupyter', icon: SiJupyter },
      { name: 'Anaconda', icon: SiAnaconda },
      { name: 'Numpy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'vLLM', icon: null },
      { name: 'LoRA', icon: null },
      { name: 'quantization', icon: null },
      { name: 'pruning', icon: null },
      { name: 'basic RAG patterns', icon: null },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Web Audio API', icon: null },
      { name: 'PWA', icon: null },
      { name: 'performance optimization', icon: null },
      { name: 'keyboard-first UX', icon: null },
    ],
  },
];

const SkillBadge = ({ skill }) => {
  const badgeRef = useRef(null);

  useGSAP(() => {
    const badge = badgeRef.current;
    gsap.set(badge, { transformPerspective: 1000 }); // Set perspective for 3D tilt

    const handleMouseEnter = () => {
      gsap.to(badge, {
        rotationX: gsap.utils.random(-3, 3), // Tilt X by -3 to 3 degrees
        rotationY: gsap.utils.random(-3, 3), // Tilt Y by -3 to 3 degrees
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(badge, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.7)',
      });
    };

    badge.addEventListener('mouseenter', handleMouseEnter);
    badge.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      badge.removeEventListener('mouseenter', handleMouseEnter);
      badge.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: badgeRef });

  const IconComponent = skill.icon;

  return (
    <div
      ref={badgeRef}
      className="skill-badge group flex items-center gap-1.5 cursor-default rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary transition-all duration-300 ease-out will-change-transform"
    >
      {IconComponent && <IconComponent className="h-4 w-4 text-primary" />}
      {skill.name}
    </div>
  );
};

const Skills = () => {
  const container = useRef();
  const skillBadgesRef = useRef([]);

  useGSAP(() => {
    gsap.from(skillBadgesRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.05, // Stagger individual skill badges
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: container });

  return (
    <section id="skills" className="py-20" ref={container}>
      <div className="container max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills</h2>
          <p className="mt-2 text-muted-foreground">
            The tools and technologies I’m most comfortable using to ship real products.
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-primary mx-auto" />
        </div>
        <div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <SkillBadge
                    key={i}
                    skill={skill}
                    ref={el => skillBadgesRef.current[i + (index * 100)] = el} // Unique ref for each skill badge
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
