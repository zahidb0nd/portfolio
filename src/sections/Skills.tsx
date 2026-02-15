import { useEffect, useRef, useState } from 'react';
import { Code, Shield, Server, Target, Layers } from 'lucide-react';
import Card3D from '@/components/Card3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
  gradient: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code,
      color: '#00FFFF',
      gradient: 'from-cyan-500/20 to-transparent',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Bash/Shell', level: 70 },
      ],
    },
    {
      title: 'Security',
      icon: Shield,
      color: '#00FF41',
      gradient: 'from-green-500/20 to-transparent',
      skills: [
        { name: 'Penetration Testing', level: 80 },
        { name: 'Reconnaissance', level: 85 },
        { name: 'XSS', level: 75 },
        { name: 'Vulnerability Research', level: 70 },
        { name: 'Network Security', level: 65 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Server,
      color: '#FFD700',
      gradient: 'from-yellow-500/20 to-transparent',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'Networking', level: 70 },
        { name: 'CI/CD', level: 60 },
      ],
    },
  ];

  const additionalTools = [
    'Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'OWASP ZAP',
    'Nikto', 'SQLMap', 'John the Ripper', 'Hashcat', 'Kali Linux', 'Ubuntu', 'VS Code',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.skills-header', {
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Cards animation
      gsap.from('.skill-card-wrapper', {
        scrollTrigger: {
          trigger: '.skill-card-wrapper',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Progress bars animation
      gsap.from('.progress-bar', {
        scrollTrigger: {
          trigger: '.progress-bar',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        width: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Tools animation
      gsap.from('.tool-tag', {
        scrollTrigger: {
          trigger: '.tool-tag',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center py-24 px-4 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-matrix-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="skills-header text-center mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-matrix-green/50" />
            <span className="text-matrix-green/60 font-mono text-sm tracking-widest uppercase">02. Skills</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-matrix-green/50" />
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-matrix-green">[</span>Technical Arsenal
            <span className="text-matrix-green">]</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through hands-on experience in
            cybersecurity and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card-wrapper">
              <Card3D intensity={12}>
                <div className="bg-gradient-to-br from-matrix-surface/40 to-matrix-surface/10 border border-matrix-green/20 rounded-2xl p-8 h-full hover:border-matrix-green/40 transition-all duration-500">
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-10">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center border"
                      style={{ 
                        background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                        borderColor: `${category.color}40`,
                      }}
                    >
                      <category.icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <h3 className="font-mono text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm transition-colors duration-300 ${
                            hoveredSkill === skill.name ? 'text-white' : 'text-foreground/70'
                          }`}>
                            {skill.name}
                          </span>
                          <span 
                            className="text-xs font-mono transition-all duration-300"
                            style={{ 
                              color: hoveredSkill === skill.name ? category.color : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-matrix-surface/50 rounded-full overflow-hidden">
                          <div
                            className="progress-bar h-full rounded-full relative"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                              boxShadow: hoveredSkill === skill.name ? `0 0 15px ${category.color}50` : 'none',
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* Additional Tools */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Layers className="w-5 h-5 text-matrix-green" />
            <h3 className="font-mono text-xl text-white">Additional Tools & Technologies</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalTools.map((tool) => (
              <span
                key={tool}
                className="tool-tag px-4 py-2.5 bg-matrix-surface/30 border border-matrix-green/20 rounded-lg text-sm text-foreground/70 hover:text-matrix-green hover:border-matrix-green/50 hover:bg-matrix-green/10 transition-all duration-300 cursor-default hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <Target className="w-10 h-10 text-matrix-green/20 animate-spin-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
