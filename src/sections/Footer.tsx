import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-onyx border-t border-white/5">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">

        {/* Left: Copyright */}
        <div className="flex flex-col gap-2">
          <span className="text-ether font-display text-2xl font-bold tracking-tight">Zahid Hussain.</span>
          <p className="text-ether-muted text-sm font-mono uppercase tracking-wider">
            © {currentYear} zahidhussain.me
          </p>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-ether-muted hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-mono uppercase tracking-widest">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
