import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Method = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      id: '01',
      title: 'Discovery',
      desc: 'Uncovering the signal in the noise. I analyze market gaps and competitive landscapes to define a winning digital strategy.',
      icon: Search
    },
    {
      id: '02',
      title: 'Architecture',
      desc: 'Building scalable, weightless systems. I engineer robust front-end foundations that favor performance and maintainability.',
      icon: PenTool
    },
    {
      id: '03',
      title: 'Velocity',
      desc: 'High-performance execution. Deploying globally optimized assets that load instantly and convert consistently.',
      icon: Zap
    }
  ];

  const techStack = [
    "React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "WebGL", "PostgreSQL", "AWS"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".method-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex flex-col justify-center py-32 px-6 bg-onyx relative border-t border-white/5"
    >
      <div className="max-w-[90rem] w-full mx-auto relative z-10">

        {/* Header */}
        <div className="mb-24 md:w-2/3">
          <span className="block text-indigo-500 font-mono text-sm tracking-widest uppercase mb-8">
            02. The Method
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-ether leading-tight">
            Systems thinking meets <br />
            <span className="text-indigo-400">artistic intuition</span>.
          </h2>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {steps.map((step) => (
            <div key={step.id} className="method-card group p-10 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
              <div className="flex justify-between items-start mb-12">
                <span className="text-5xl font-display text-white/5 group-hover:text-indigo-500/20 transition-colors duration-500">
                  {step.id}
                </span>
                <step.icon className="w-6 h-6 text-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-2xl text-ether font-medium mb-4">{step.title}</h3>
              <p className="text-ether-muted leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Arsenal (Minimal) */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <span className="text-sm font-mono text-ether-muted uppercase tracking-widest shrink-0">
              Technical Arsenal
            </span>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {techStack.map((tech) => (
                <span key={tech} className="text-lg text-ether/60 hover:text-indigo-400 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Method;
