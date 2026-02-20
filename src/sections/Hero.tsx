import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SecureLink } from '@/components/SecureLink';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center section-padding container-px bg-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Zahid Hussain
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-500 font-medium mb-8">
          Frontend Engineer
          <span className="block text-lg md:text-xl text-slate-400 font-normal mt-2">
            React | TypeScript | Next.js
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12">
          Building scalable, high-performance web interfaces with clean architecture and measurable performance.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            onClick={scrollToContact}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-md"
          >
            Contact Me <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="border-slate-200 hover:bg-slate-50 hover:text-slate-900 text-slate-600 px-6 py-6 text-lg rounded-md gap-2"
          >
            <FileText className="w-5 h-5" /> Resume
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-14 w-14 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            asChild
          >
            <SecureLink href="https://github.com" target="_blank" aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </SecureLink>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-14 w-14 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            asChild
          >
            <SecureLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </SecureLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
