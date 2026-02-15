import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Card3D from "@/components/Card3D";
import MagneticButton from "@/components/MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zahidhussain16042001@gmail.com",
      href: "mailto:zahidhussain16042001@gmail.com",
      color: "#00FF41",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/zahid-hussain",
      href: "https://linkedin.com/in/zahid-hussain",
      color: "#00FFFF",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/zahidb0nd",
      href: "https://github.com/zahidb0nd",
      color: "#FFD700",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
      color: "#00FF41",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Contact info animation
      gsap.from(".contact-info-item", {
        scrollTrigger: {
          trigger: ".contact-info-item",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      // USING YOUR SPECIFIC FORMSPREE URL HERE
      const response = await fetch("https://formspree.io/f/mbdalzod", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Error", {
          description: "Oops! There was a problem submitting your form.",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "Oops! There was a problem submitting your form.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center py-24 px-4 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-matrix-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-matrix-green/50" />
            <span className="text-matrix-green/60 font-mono text-sm tracking-widest uppercase">
              05. Contact
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-matrix-green/50" />
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Initiate{" "}
            <span className="text-matrix-green glow-text">Connection</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss cybersecurity? Let's
            connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-info-item group flex items-center gap-5 p-6 bg-gradient-to-r from-matrix-surface/20 to-transparent border border-matrix-green/20 rounded-xl hover:border-matrix-green/50 transition-all duration-500"
                style={{
                  boxShadow: `0 0 0 ${item.color}00`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, transparent)`,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-foreground/50 mb-1">
                    {item.label}
                  </div>
                  <div className="text-white font-mono text-sm truncate group-hover:text-matrix-green transition-colors">
                    {item.value}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-foreground/30 group-hover:text-matrix-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}

            {/* Availability Card */}
            <Card3D intensity={8}>
              <div className="p-6 bg-gradient-to-br from-matrix-green/10 to-transparent border border-matrix-green/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-matrix-green rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-matrix-green rounded-full animate-ping" />
                  </div>
                  <span className="text-matrix-green font-mono font-semibold">
                    Available for opportunities
                  </span>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Currently seeking internships and entry-level positions in
                  cybersecurity and penetration testing. Open to remote and
                  on-site roles.
                </p>
              </div>
            </Card3D>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <Card3D intensity={5}>
              <div className="bg-gradient-to-br from-matrix-surface/30 to-matrix-surface/10 border border-matrix-green/20 rounded-2xl p-8">
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mbdalzod"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-mono flex items-center gap-2 transition-colors duration-300 ${
                        focusedField === "name"
                          ? "text-matrix-green"
                          : "text-foreground/60"
                      }`}
                    >
                      <span className="text-matrix-green">$</span> name
                      {focusedField === "name" && (
                        <Zap className="w-3 h-3 animate-pulse" />
                      )}
                    </label>
                    <Input
                      type="text"
                      name="name" // ADDED: Required for Formspree
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-matrix-bg/50 border-matrix-green/30 text-white placeholder:text-foreground/40 focus:border-matrix-green focus:ring-matrix-green/20 font-mono transition-all duration-300 h-12"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-mono flex items-center gap-2 transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-matrix-green"
                          : "text-foreground/60"
                      }`}
                    >
                      <span className="text-matrix-green">$</span> email
                      {focusedField === "email" && (
                        <Zap className="w-3 h-3 animate-pulse" />
                      )}
                    </label>
                    <Input
                      type="email"
                      name="email" // ADDED: Required for Formspree
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-matrix-bg/50 border-matrix-green/30 text-white placeholder:text-foreground/40 focus:border-matrix-green focus:ring-matrix-green/20 font-mono transition-all duration-300 h-12"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-mono flex items-center gap-2 transition-colors duration-300 ${
                        focusedField === "message"
                          ? "text-matrix-green"
                          : "text-foreground/60"
                      }`}
                    >
                      <span className="text-matrix-green">$</span> message
                      {focusedField === "message" && (
                        <Zap className="w-3 h-3 animate-pulse" />
                      )}
                    </label>
                    <Textarea
                      name="message" // ADDED: Required for Formspree
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="bg-matrix-bg/50 border-matrix-green/30 text-white placeholder:text-foreground/40 focus:border-matrix-green focus:ring-matrix-green/20 font-mono resize-none transition-all duration-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton strength={20}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-matrix-green to-matrix-dark text-matrix-bg hover:from-matrix-dark hover:to-matrix-green font-mono py-7 text-lg transition-all duration-500 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-matrix-bg/30 border-t-matrix-bg rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
