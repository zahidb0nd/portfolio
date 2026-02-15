import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  sector: string;
  outcome: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 'garage-log',
    title: 'Garage Log',
    sector: 'Automotive / SaaS',
    outcome: 'Real-time Maintenance Intelligence',
    image: '/project-garage.jpg', // Ensure this exists or use a placehold
    year: '2024'
  },
  {
    id: 'aether-finance',
    title: 'Aether Finance',
    sector: 'FinTech / Web3',
    outcome: '+40% User Retention',
    image: 'https://images.unsplash.com/photo-1639322537228-ad715eb9a0a2?q=80&w=1000&auto=format&fit=crop', // Placeholder
    year: '2023'
  },
  {
    id: 'nexus-archi',
    title: 'Nexus Archi',
    sector: 'Real Estate',
    outcome: ' immersive 3D Walkthroughs',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop', // Placeholder
    year: '2023'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-row", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-32 px-6 bg-onyx cursor-none"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-ether">
            Selected Works<span className="text-indigo-500">.</span>
          </h2>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-ether-muted font-mono uppercase tracking-widest text-sm">Case Studies 01 — 03</p>
          </div>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="project-row group relative border-t border-white/5 py-12 transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row items-baseline justify-between gap-4 md:gap-10 relative z-10 px-4">
                <div className="md:w-5/12">
                  <h3 className="text-3xl md:text-5xl font-medium text-ether group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="md:w-3/12">
                  <span className="text-ether-muted font-mono text-sm uppercase tracking-wider">{project.sector}</span>
                </div>

                <div className="md:w-3/12">
                  <span className="text-ether/70 font-light">{project.outcome}</span>
                </div>

                <div className="md:w-1/12 flex justify-end">
                  <ArrowUpRight className="text-ether-muted group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/5" />
        </div>

        {/* Floating Preview Image */}
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference hidden md:block">
          <AnimatePresence mode="wait">
            {hoveredProject && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: cursorPosition.x - 200, // Center offset
                  y: cursorPosition.y - 150
                }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-0 left-0 w-[400px] h-[300px] rounded-lg overflow-hidden"
              >
                {projects.find(p => p.id === hoveredProject) && (
                  <img
                    src={projects.find(p => p.id === hoveredProject)?.image}
                    alt="Preview"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
