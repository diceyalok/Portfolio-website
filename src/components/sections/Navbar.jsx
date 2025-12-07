import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import lenis from '../../lib/lenis';

const navLinks = [
  { title: 'Home', href: '#hero' },
  { title: 'About', href: '#about' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const linksContainerRef = useRef(null);
  const underlineRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.3, ease: 'power3.out' });
    } else {
      gsap.to(mobileMenuRef.current, { opacity: 0, height: 0, duration: 0.3, ease: 'power3.out' });
    }
  }, { dependencies: [isOpen]});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Navbar shrink
      gsap.to(headerRef.current, { 
        height: scrollY > 50 ? '3.5rem' : '4rem',
        ease: 'power3.out',
        duration: 0.3
      });

      // Active link tracking
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          if (activeLink !== navLinks[i].href) {
            setActiveLink(navLinks[i].href);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  const handleLinkHover = (e) => {
    gsap.to(underlineRef.current, {
      left: e.target.offsetLeft,
      width: e.target.offsetWidth,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleLinksMouseLeave = () => {
    const activeLinkEl = linksContainerRef.current.querySelector(`a[href="${activeLink}"]`);
    if (activeLinkEl) {
      gsap.to(underlineRef.current, {
        left: activeLinkEl.offsetLeft,
        width: activeLinkEl.offsetWidth,
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  };

  useGSAP(() => {
    const activeLinkEl = linksContainerRef.current.querySelector(`a[href="${activeLink}"]`);
    if (activeLinkEl) {
        gsap.to(underlineRef.current, {
            left: activeLinkEl.offsetLeft,
            width: activeLinkEl.offsetWidth,
            duration: 0.3,
            ease: 'power3.out'
        });
    }
  }, { dependencies: [activeLink], scope: linksContainerRef });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    lenis.scrollTo(href);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
            >
              Alok Kumar Kasyap
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
                <div ref={linksContainerRef} onMouseLeave={handleLinksMouseLeave} className="relative flex items-center space-x-4">
                    {navLinks.map((link) => (
                        <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        onMouseEnter={handleLinkHover}
                        className={`relative text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all ${activeLink === link.href ? 'text-primary' : ''}`}
                        >
                        {link.title}
                        </a>
                    ))}
                    <div ref={underlineRef} className="absolute bottom-1 h-0.5 bg-primary" />
                </div>
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div ref={mobileMenuRef} className="md:hidden border-t border-white/10" style={{ opacity: 0, height: 0, overflow: 'hidden' }}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium ${activeLink === link.href ? 'text-primary' : ''}`}
            >
              {link.title}
            </a>
          ))}
          <div className="pt-4 pb-3 border-t border-white/10">
            <div className="flex items-center px-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;