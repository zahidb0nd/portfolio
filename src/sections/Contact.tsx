import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry Received.", {
        description: "I will review your brief and respond within 24 hours.",
        style: {
          background: '#0E0E0E',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff'
        }
      });
      setFormData({ name: "", email: "", project: "" });
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center py-32 px-6 bg-onyx relative overflow-hidden"
    >
      <div className="max-w-[90rem] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left: Strategic Context */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="block text-indigo-500 font-mono text-sm tracking-widest uppercase mb-8 contact-reveal">
                03. The Dialogue
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-ether mb-12 contact-reveal">
                Start a <br />
                <span className="text-ether-muted">Conversation</span>.
              </h2>
              <p className="text-xl text-ether/60 font-light leading-relaxed max-w-md contact-reveal">
                I am currently accepting new strategic partnerships for Q3 2024.
                Let’s discuss how we can engineer value for your users.
              </p>
            </div>

            <div className="mt-16 contact-reveal">
              <a href="mailto:zahidhussain16042001@gmail.com" className="group flex items-center gap-4 text-ether hover:text-indigo-400 transition-colors duration-300">
                <span className="text-lg font-mono">zahidhussain16042001@gmail.com</span>
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Minimalist Form */}
          <div className="contact-reveal">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
              <div className="group relative">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-6 text-2xl text-ether placeholder:text-white/20 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div className="group relative">
                <Input
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-6 text-2xl text-ether placeholder:text-white/20 focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div className="group relative">
                <Textarea
                  placeholder="Tell me about the project..."
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  required
                  rows={4}
                  className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 py-6 text-2xl text-ether placeholder:text-white/20 resize-none focus:border-indigo-500 focus:ring-0 transition-colors"
                />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-onyx hover:bg-indigo-500 hover:text-white rounded-none px-12 py-8 text-lg font-medium transition-all duration-300 w-full md:w-auto"
                >
                  {isSubmitting ? "Processing..." : "Initiate Request"}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
