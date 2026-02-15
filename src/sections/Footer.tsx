import { ArrowUp, Heart, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zahidb0nd', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/zahid-hussain', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zahidhussain16042001@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-matrix-green/20 relative">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-matrix-green/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-matrix-green text-xl font-bold hover:glow-text transition-all mb-3 group"
            >
              <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              &lt;ZH/&gt;
            </a>
            <p className="text-foreground/50 text-sm">
              © {currentYear} Zahid Hussain. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group w-11 h-11 rounded-xl bg-matrix-surface/30 border border-matrix-green/20 flex items-center justify-center text-foreground/60 hover:text-matrix-green hover:border-matrix-green hover:bg-matrix-green/10 hover:scale-110 hover:shadow-glow transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <MagneticButton strength={15}>
            <button
              onClick={scrollToTop}
              className="group w-11 h-11 rounded-xl bg-matrix-green/10 border border-matrix-green/30 flex items-center justify-center text-matrix-green hover:bg-matrix-green hover:text-matrix-bg transition-all duration-300 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </MagneticButton>
        </div>

        {/* Made with love */}
        <div className="mt-10 pt-8 border-t border-matrix-green/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <p className="text-foreground/40 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using
            </p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-matrix-green/10 text-matrix-green text-xs font-mono">React</span>
              <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-xs font-mono">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-cyber-gold/10 text-cyber-gold text-xs font-mono">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
