import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    scrollToElement(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="font-mono text-slate-900 text-lg font-bold hover:text-slate-700 transition-all flex items-center gap-2 group"
            >
              <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              &lt;ZH/&gt;
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-brand-600 bg-slate-100 font-medium'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-300"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute inset-x-0 top-16 p-6 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="space-y-2">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`block px-6 py-4 rounded-xl font-mono text-lg transition-all duration-300 ${
                    isActive
                      ? 'text-brand-600 bg-slate-100 border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    animation: isMenuOpen ? `fadeInRight 0.5s ease ${index * 0.05}s forwards` : 'none',
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
