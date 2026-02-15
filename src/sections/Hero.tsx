import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/MagneticButton';
import gsap from 'gsap';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Luxury Positioning Copy
  const headline = "DIGITAL REALITY.";
  const headlineSub = "UNDEFINED.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle fade in for main elements
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        skewY: 7,
      })
        .from(subtitleRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
        }, "-=1")
        .from(buttonsRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
        }, "-=0.8");

      // Background subtle parallax or movement
      gsap.to(".bg-gradient-orb", {
        scale: 1.2,
        opacity: 0.4,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-onyx"
    >
      {/* Ambient Background - The "Ether" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-gradient-orb absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-glow blur-[120px] rounded-full opacity-20 mix-blend-screen" />
        <div className="bg-gradient-orb absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[100px] rounded-full opacity-10 mix-blend-screen" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#52525B 1px, transparent 1px), linear-gradient(90deg, #52525B 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[90rem] w-full mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">

          {/* Massive Editorial Headline */}
          <h1 ref={titleRef} className="font-display font-bold leading-[0.9] tracking-tighter text-ether mix-blend-difference">
            <div className="overflow-hidden">
              <span className="hero-line block text-[12vw] md:text-[8rem] lg:text-[10rem] whitespace-nowrap">
                {headline}
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-[12vw] md:text-[8rem] lg:text-[10rem] whitespace-nowrap text-ether/40">
                {headlineSub}
              </span>
            </div>
          </h1>

          {/* Strategic Subtitle & CTA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7 lg:col-span-6">
              <p ref={subtitleRef} className="text-xl md:text-2xl lg:text-3xl font-light text-ether-muted leading-relaxed max-w-2xl">
                Strategic frontend architecture for those who refuse to compete.
                Engineering digital scarcity through <span className="text-ether">precision</span> and <span className="text-ether">restraint</span>.
              </p>
            </div>

            <div className="md:col-span-5 lg:col-span-6 flex justify-start md:justify-end" ref={buttonsRef}>
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton strength={20}>
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="group relative px-8 py-8 bg-ether text-onyx hover:bg-white text-lg rounded-none border-none tracking-tight transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-3 font-semibold">
                      Start a Dialogue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </MagneticButton>

                <MagneticButton strength={10}>
                  <Button
                    onClick={() => scrollToSection('#projects')}
                    variant="outline"
                    className="group px-8 py-8 bg-transparent text-ether border-ether/20 hover:bg-ether/5 text-lg rounded-none tracking-tight transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      Selected Work <span className="opacity-50 text-sm align-top">04</span>
                    </span>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Architecture */}
      <div className="absolute bottom-12 left-6 md:left-12 flex gap-4 text-xs font-mono text-ether/20 tracking-widest uppercase writing-mode-vertical">
        <span>Est. 2024</span>
        <span>Dhaka / Global</span>
      </div>

    </section>
  );
};

export default Hero;
