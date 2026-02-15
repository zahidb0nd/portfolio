import { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Briefcase, Terminal, Code, Shield, Award } from 'lucide-react';
import Card3D from '@/components/Card3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const terminalContent = [
    { label: 'Location', value: 'Bengaluru, India', icon: MapPin },
    { label: 'Education', value: 'BCA (Pursuing)', icon: GraduationCap },
    { label: 'Focus', value: 'AppSec & Pentesting', icon: Briefcase },
    { label: 'Status', value: 'Open to Internships', icon: Terminal },
  ];

  const stats = [
    { value: '2+', label: 'Years Coding', icon: Code },
    { value: '5+', label: 'Projects', icon: Shield },
    { value: '1', label: 'Certification', icon: Award },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Content animation
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Terminal animation
      gsap.from(terminalRef.current, {
        scrollTrigger: {
          trigger: terminalRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Stats cards animation
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stat-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    // Terminal typing effect
    const timer = setTimeout(() => {
      terminalContent.forEach((line, index) => {
        setTimeout(() => {
          setTerminalLines((prev) => [...prev, `${line.label}: ${line.value}`]);
        }, index * 400);
      });
    }, 1000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center py-24 px-4 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-matrix-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-matrix-green/50" />
            <span className="text-matrix-green/60 font-mono text-sm tracking-widest uppercase">01. About</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-matrix-green/50" />
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
            <span className="text-matrix-green">&lt;</span>About Me
            <span className="text-matrix-green">/&gt;</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-5">
              <p className="text-xl text-foreground/80 leading-relaxed">
                I am a BCA student at{' '}
                <span className="text-matrix-green font-semibold">
                  BMS College of Commerce and Management
                </span>{' '}
                with a deep passion for cybersecurity.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                My focus is on vulnerability research, application security, and penetration testing. 
                I thrive in Linux environments and love automating security tasks with Python.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Currently seeking internship or entry-level opportunities to leverage my skills 
                in penetration testing and security analysis while continuing to grow as a cybersecurity professional.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat) => (
                <Card3D key={stat.label} intensity={10} className="stat-card">
                  <div className="bg-gradient-to-br from-matrix-surface/40 to-matrix-surface/10 border border-matrix-green/20 rounded-xl p-5 text-center hover:border-matrix-green/40 transition-colors">
                    <stat.icon className="w-6 h-6 text-matrix-green mx-auto mb-3" />
                    <div className="text-3xl font-mono font-bold text-matrix-green mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground/50">{stat.label}</div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Terminal */}
          <div ref={terminalRef}>
            <Card3D intensity={8}>
              <div className="bg-gradient-to-br from-[#0a1a0a] to-[#051005] border border-matrix-green/30 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-gradient-to-r from-matrix-green/10 to-transparent border-b border-matrix-green/20 px-5 py-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="flex-1 text-center text-xs text-foreground/40 font-mono">
                    zahid@portfolio:~$
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm min-h-[320px]">
                  <div className="flex items-center gap-2 mb-6 text-foreground/50">
                    <span className="text-matrix-green">$</span>
                    <span className="typing-cursor">cat profile.json</span>
                  </div>

                  <div className="space-y-4">
                    {terminalContent.map((item, index) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-4 p-4 rounded-lg bg-matrix-green/5 border border-matrix-green/10 transition-all duration-500 ${
                          index < terminalLines.length
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-4'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-matrix-green/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-matrix-green" />
                        </div>
                        <div>
                          <div className="text-matrix-green/70 text-xs mb-1">{item.label}</div>
                          <div className="text-foreground/90">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-foreground/50">
                    <span className="text-matrix-green">$</span>
                    <span className="typing-cursor w-2 h-4 bg-matrix-green/50" />
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
