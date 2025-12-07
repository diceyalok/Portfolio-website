import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const MagneticButton = ({ children, ...props }) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    const button = buttonRef.current;
    if (!button) return;
    const xTo = gsap.quickTo(button, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(button, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: buttonRef });

  return (
    <button ref={buttonRef} {...props}>
      {children}
    </button>
  );
};


const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/xqardzle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('succeeded');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div
        ref={containerRef}
        className="container max-w-4xl text-center rounded-[32px] border border-white/10 bg-white/5 px-8 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur"
      >
        <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
        </p>

        {submissionStatus === 'succeeded' ? (
          <div className="mt-10 max-w-xl mx-auto text-center bg-primary/10 border border-primary/20 text-primary rounded-lg p-6">
            <FiCheckCircle className="h-12 w-12 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Thank you for your message!</h3>
            <p className="mt-2 text-sm">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="form-input" placeholder="What's on your mind?" required></textarea>
            </div>

            {submissionStatus === 'error' && (
              <div className="mt-6 text-destructive-foreground bg-destructive/80 border border-destructive/90 rounded-md p-3 text-sm flex items-center gap-2">
                <FiAlertCircle />
                Something went wrong. Please try again or reach out via email.
              </div>
            )}

            <div className="mt-8 text-center">
              <MagneticButton
                type="submit"
                disabled={submissionStatus === 'submitting'}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 disabled:bg-primary/70 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                {submissionStatus !== 'submitting' && <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />}
              </MagneticButton>
            </div>
          </form>
        )}

        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm">
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:scale-110 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alok-kasyap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:scale-110 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
