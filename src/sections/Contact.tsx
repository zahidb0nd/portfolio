import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SecureLink } from '@/components/SecureLink';

const Contact = () => {
  return (
    <section id="contact" className="section-padding container-px bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Open to Frontend Engineering Roles
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          I'm currently looking to join a high-performance engineering team where I can contribute to scalable products and clean architecture.
        </p>

        <div className="flex flex-col items-center gap-8">
          <Button
            className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-8 text-xl rounded-full"
            asChild
          >
            <SecureLink href="mailto:zahidhussain16042001@gmail.com">
              <Mail className="mr-3 w-6 h-6" /> zahidhussain16042001@gmail.com
            </SecureLink>
          </Button>

          <div className="flex gap-6 mt-4">
            <SecureLink
              href="https://linkedin.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </SecureLink>
            <SecureLink
              href="https://github.com"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              target="_blank"
            >
              <Github className="w-5 h-5" /> GitHub
            </SecureLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
