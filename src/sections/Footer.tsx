import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainHeading = document.getElementById('main-heading');
    if (mainHeading) {
      mainHeading.focus({ preventScroll: true });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-slate-950 border-t border-white/5">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">

        {/* Left: Copyright */}
        <div className="flex flex-col gap-2">
          <span className="text-slate-100 font-display text-2xl font-bold tracking-tight">Zahid Hussain.</span>
          <p className="text-slate-400 text-sm font-mono uppercase tracking-wider">
            © {currentYear} zahidhussain.me
          </p>
        </div>

        {/* Right: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm"
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
