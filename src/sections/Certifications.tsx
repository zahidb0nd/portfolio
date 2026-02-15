import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, CheckCircle, Sparkles, TrendingUp, Shield } from 'lucide-react';
import Card3D from '@/components/Card3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image?: string;
}

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  const certifications: Certification[] = [
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2024',
      description:
        'Comprehensive certification covering ethical hacking methodologies, penetration testing techniques, and security assessment skills.',
      skills: [
        'Footprinting & Reconnaissance',
        'Scanning Networks',
        'Enumeration',
        'Vulnerability Analysis',
        'System Hacking',
        'Malware Threats',
        'Sniffing',
        'Social Engineering',
      ],
      image: '/ceh-badge.png',
    },
  ];

  const futureCerts = ['eJPT', 'OSCP', 'CompTIA Security+', 'CISSP'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.certs-header', {
        scrollTrigger: {
          trigger: '.certs-header',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Badge animation
      gsap.from(badgeRef.current, {
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      // Content animation
      gsap.from('.cert-content', {
        scrollTrigger: {
          trigger: '.cert-content',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Skills animation
      gsap.from('.cert-skill', {
        scrollTrigger: {
          trigger: '.cert-skill',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // Future certs animation
      gsap.from('.future-cert', {
        scrollTrigger: {
          trigger: '.future-cert',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    // Continuous badge rotation
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);

    return () => {
      ctx.revert();
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="min-h-screen flex items-center py-24 px-4 relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="certs-header text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyber-gold/50" />
            <span className="text-cyber-gold/60 font-mono text-sm tracking-widest uppercase">04. Certifications</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyber-gold/50" />
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Professional Credentials
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Professional certifications validating my expertise in cybersecurity
            and ethical hacking.
          </p>
        </div>

        {/* Certification Card */}
        {certifications.map((cert) => (
          <Card3D key={cert.name} intensity={4}>
            <div className="bg-gradient-to-br from-matrix-surface/30 to-matrix-surface/10 border border-cyber-gold/20 rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
                {/* Badge */}
                <div ref={badgeRef} className="lg:col-span-2 flex items-center justify-center">
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-cyber-gold/20 rounded-full blur-3xl scale-150 animate-pulse" />
                    
                    {/* Rotating Ring */}
                    <div 
                      className="absolute inset-[-30px] border-2 border-dashed border-cyber-gold/30 rounded-full"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    />
                    
                    {/* Second Ring */}
                    <div 
                      className="absolute inset-[-50px] border border-cyber-gold/10 rounded-full"
                      style={{ transform: `rotate(${-rotation * 0.5}deg)` }}
                    />
                    
                    {/* Badge Image */}
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="relative w-48 h-48 lg:w-64 lg:h-64 object-contain animate-float drop-shadow-2xl"
                    />
                    
                    {/* Sparkles */}
                    <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-cyber-gold animate-pulse" />
                    <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-cyber-gold animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="cert-content lg:col-span-3 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-cyber-gold/10 flex items-center justify-center border border-cyber-gold/30">
                        <Award className="w-6 h-6 text-cyber-gold" />
                      </div>
                      <span className="text-cyber-gold font-mono text-sm uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="font-mono text-2xl lg:text-4xl font-bold text-white mb-3">
                      {cert.name}
                    </h3>
                    <div className="flex items-center gap-2 text-foreground/60">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Earned {cert.date}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div>
                    <h4 className="font-mono text-sm text-foreground/60 mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-matrix-green" />
                      Skills Covered:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cert.skills.map((skill) => (
                        <div
                          key={skill}
                          className="cert-skill flex items-center gap-3 p-3 rounded-lg bg-matrix-green/5 border border-matrix-green/10 hover:border-matrix-green/30 hover:bg-matrix-green/10 transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-matrix-green flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        ))}

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-matrix-green" />
            <h3 className="font-mono text-xl text-white">Future Certifications</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {futureCerts.map((cert) => (
              <div
                key={cert}
                className="future-cert px-6 py-3 bg-matrix-surface/20 border border-matrix-green/20 rounded-xl hover:border-matrix-green/50 hover:bg-matrix-green/5 transition-all duration-300 cursor-default group"
              >
                <span className="text-foreground/60 group-hover:text-matrix-green transition-colors font-mono">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
