import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { SecureLink } from '@/components/SecureLink';
import { toast } from 'sonner';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "zahidhussain16042001@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        toast.success("Email copied to clipboard");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => {
        toast.error("Failed to copy email");
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

        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Button
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 text-lg rounded-full"
                asChild
              >
                <SecureLink href={`mailto:${email}`}>
                  <Mail className="mr-2 w-5 h-5" /> Send Email
                </SecureLink>
              </Button>

              <Button
                variant="outline"
                className="bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 px-8 py-6 text-lg rounded-full transition-all duration-300"
                onClick={handleCopyEmail}
              >
                {isCopied ? (
                  <>
                    <Check className="mr-2 w-5 h-5 text-green-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 w-5 h-5" /> Copy Email
                  </>
                )}
              </Button>
            </div>
            <p className="text-slate-500 text-sm font-mono">
              {email}
            </p>
          </div>

          <div className="flex gap-6">
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
