import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { SecureLink } from '@/components/SecureLink';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "zahidhussain16042001@gmail.com";

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard!");
        setCopied(true);
      })
      .catch(() => {
        toast.error("Failed to copy email address.");
      });
  };

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
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-8 text-xl rounded-full"
              asChild
            >
              <SecureLink href={`mailto:${email}`}>
                <Mail className="mr-3 w-6 h-6" /> {email}
              </SecureLink>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all"
              onClick={handleCopy}
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
            </Button>
          </div>

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
