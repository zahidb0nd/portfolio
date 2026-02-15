import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for text lines
      gsap.from(".philosophy-line", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out"
      });

      // Image or visual reveal
      gsap.from(".philosophy-visual", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center py-32 px-6 bg-onyx relative overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#52525B 1px, transparent 1px), linear-gradient(90deg, #52525B 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[90rem] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Editorial Content */}
          <div className="lg:col-span-7" ref={textRef}>
            <span className="block text-indigo-500 font-mono text-sm tracking-widest uppercase mb-8 philosophy-line">
              01. The Philosophy
            </span>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-ether leading-[1.1] mb-12">
              <span className="block philosophy-line">Code is a commodity.</span>
              <span className="block philosophy-line text-ether-muted">Craft is the differentiator.</span>
            </h2>

            <div className="space-y-8 max-w-2xl">
              <p className="text-xl md:text-2xl text-ether/80 font-light leading-relaxed philosophy-line">
                I partner with ambitious brands to architect digital assets that don't just function—they dominate.
              </p>
              <p className="text-lg text-ether-muted leading-relaxed philosophy-line">
                In a world saturated with templates and noise, I offer silence and precision.
                My work is defined not by what is added, but by what is removed.
                Every pixel serves a purpose; every interaction has a weight.
              </p>
            </div>

            <div className="mt-16 philosophy-line">
              <div className="flex gap-12">
                <div>
                  <span className="block text-3xl font-display text-indigo-400">03+</span>
                  <span className="text-sm text-ether-muted uppercase tracking-wider">Years Exp</span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-indigo-400">12+</span>
                  <span className="text-sm text-ether-muted uppercase tracking-wider">Projects</span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-indigo-400">100%</span>
                  <span className="text-sm text-ether-muted uppercase tracking-wider">Commitment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Visual / Negative Space Marker */}
          <div className="lg:col-span-5 h-full min-h-[400px] relative philosophy-visual">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-sm border border-white/5 backdrop-blur-sm">
              {/* Abstract "Architectural" lines */}
              <div className="absolute top-12 left-0 w-full h-px bg-white/10" />
              <div className="absolute top-0 right-12 w-px h-full bg-white/10" />
              <div className="absolute bottom-12 left-12 right-0 h-px bg-indigo-500/20" />

              <div className="absolute bottom-8 left-8 text-xs font-mono text-indigo-400/50">
                FIG 1.0 — SYSTEM ARCHITECTURE
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
