import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, Shield, Terminal, Lock, Cpu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/MagneticButton';
import gsap from 'gsap';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'ZAHID HUSSAIN';
  const indexRef = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with typing effect
      const typingInterval = setInterval(() => {
        if (indexRef.current < fullText.length) {
          setDisplayText(fullText.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(typingInterval);
          // Glow pulse after typing completes
          gsap.to('.title-glow', {
            textShadow: '0 0 40px rgba(0, 255, 65, 1), 0 0 80px rgba(0, 255, 65, 0.8), 0 0 120px rgba(0, 255, 65, 0.6)',
            duration: 0.5,
            yoyo: true,
            repeat: 3,
          });
        }
      }, 100);

      // Badge animation
      gsap.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)',
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Buttons animation
      gsap.from(buttonsRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 1,
        ease: 'back.out(1.7)',
      });

      // Stats animation
      gsap.from(statsRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.2,
        ease: 'back.out(1.7)',
      });

      // Floating icons animation
      gsap.to('.floating-icon', {
        y: '+=15',
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: {
          each: 0.5,
          from: 'random',
        },
      });

      // Pulse rings
      gsap.to('.pulse-ring', {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        ease: 'power2.out',
        repeat: -1,
        stagger: 0.5,
      });

      return () => clearInterval(typingInterval);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Shield, position: 'top-[15%] left-[8%]', delay: 0 },
    { Icon: Terminal, position: 'top-[20%] right-[12%]', delay: 0.5 },
    { Icon: Lock, position: 'bottom-[25%] left-[5%]', delay: 1 },
    { Icon: Cpu, position: 'top-[40%] left-[3%]', delay: 1.5 },
    { Icon: Globe, position: 'bottom-[30%] right-[8%]', delay: 2 },
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '5+', label: 'Projects' },
    { value: 'CEH', label: 'Certified' },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position }, index) => (
        <div
          key={index}
          className={`floating-icon absolute ${position} opacity-[0.08] hidden lg:block`}
        >
          <Icon className="w-12 h-12 text-matrix-green" />
        </div>
      ))}

      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="pulse-ring absolute border border-matrix-green/20 rounded-full"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-[0.02] hidden lg:block">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon 
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" 
                fill="none" 
                stroke="#00FF41" 
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Role Badge */}
        <div className="hero-badge mb-8">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-matrix-green/40 bg-matrix-green/5 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matrix-green opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-matrix-green" />
            </span>
            <span className="text-matrix-green font-mono text-sm tracking-wider">
              Aspiring Cybersecurity Analyst
            </span>
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={titleRef}
          className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 min-h-[1.2em]"
        >
          <span className="title-glow inline-block" style={{ textShadow: '0 0 30px rgba(0, 255, 65, 0.8)' }}>
            {displayText}
          </span>
          <span className="text-matrix-green animate-pulse">_</span>
        </h1>

        {/* Tagline */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Protecting digital assets through{' '}
          <span className="text-matrix-green font-semibold">rigorous analysis</span>{' '}
          and{' '}
          <span className="text-cyber-cyan font-semibold">ethical hacking</span>.
          <br className="hidden sm:block" />
          <span className="text-lg text-foreground/50">
            Passionate about vulnerability research and application security.
          </span>
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <MagneticButton strength={30}>
            <Button
              onClick={() => scrollToSection('#projects')}
              className="group relative bg-transparent border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-matrix-bg font-mono px-10 py-7 text-lg transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-matrix-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View My Work
              </span>
            </Button>
          </MagneticButton>
          
          <MagneticButton strength={30}>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="group relative bg-matrix-green text-matrix-bg hover:bg-matrix-dark font-mono px-10 py-7 text-lg transition-all duration-500 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                Contact Me
              </span>
            </Button>
          </MagneticButton>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center group cursor-default"
            >
              <div className="text-4xl sm:text-5xl font-mono font-bold text-matrix-green mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ textShadow: '0 0 20px rgba(0, 255, 65, 0.5)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-foreground/50 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-3 text-matrix-green/50 hover:text-matrix-green transition-colors group"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-24 left-8 w-24 h-24 border-l-2 border-t-2 border-matrix-green/20 hidden lg:block" />
      <div className="absolute top-24 right-8 w-24 h-24 border-r-2 border-t-2 border-matrix-green/20 hidden lg:block" />
      <div className="absolute bottom-24 left-8 w-24 h-24 border-l-2 border-b-2 border-matrix-green/20 hidden lg:block" />
      <div className="absolute bottom-24 right-8 w-24 h-24 border-r-2 border-b-2 border-matrix-green/20 hidden lg:block" />
    </section>
  );
};

export default Hero;
