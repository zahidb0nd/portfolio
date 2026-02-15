import { useEffect, useRef, useState } from "react";
import { Github, ArrowRight, Eye, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card3D from "@/components/Card3D";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ElementType;
  color: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Garage Log - Digital Glovebox",
      description:
        'A modern, full-stack vehicle management application designed as a "Digital Glovebox." Features real-time maintenance scheduling, secure document storage using Supabase, and interactive visualizations comparing EV vs ICE vehicle running costs.',
      image: "/project-garage.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/zahidb0nd/garage-log.git",
      icon: Car,
      color: "#FF6B6B",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Project cards animation
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: ".project-card-wrapper",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: (i) => (i % 2 === 0 ? -80 : 80),
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center py-24 px-4 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 65, 0.6) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="projects-header mb-20">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-matrix-green/50" />
            <span className="text-matrix-green/60 font-mono text-sm tracking-widest uppercase">
              03. Projects
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-matrix-green/50" />
          </div>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6">
            <span className="text-matrix-green">//</span> Featured Work
          </h2>
          <p className="text-foreground/60 text-center max-w-2xl mx-auto text-lg">
            Hands-on projects demonstrating my skills in cybersecurity tools
            development and secure application deployment.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card-wrapper"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card3D intensity={5}>
                <div
                  className="group relative bg-gradient-to-br from-matrix-surface/30 to-matrix-surface/10 border border-matrix-green/20 rounded-3xl overflow-hidden"
                  style={{
                    boxShadow:
                      hoveredProject === index
                        ? `0 0 60px ${project.color}20`
                        : "none",
                  }}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-80 lg:h-[450px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-matrix-bg via-matrix-bg/60 to-transparent" />

                      {/* Hover Icon */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                          hoveredProject === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div
                          className="w-20 h-20 rounded-2xl backdrop-blur-md border flex items-center justify-center"
                          style={{
                            borderColor: `${project.color}50`,
                            background: `${project.color}10`,
                          }}
                        >
                          <project.icon
                            className="w-10 h-10"
                            style={{ color: project.color }}
                          />
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div
                        className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 transition-all duration-500"
                        style={{
                          borderColor:
                            hoveredProject === index
                              ? project.color
                              : `${project.color}30`,
                          opacity: hoveredProject === index ? 1 : 0.5,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center border"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}20, transparent)`,
                            borderColor: `${project.color}40`,
                          }}
                        >
                          <project.icon
                            className="w-6 h-6"
                            style={{ color: project.color }}
                          />
                        </div>
                        <h3 className="font-mono text-2xl lg:text-3xl font-bold text-white group-hover:text-matrix-green transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-matrix-green/10 border border-matrix-green/30 rounded-lg text-sm font-mono text-matrix-green hover:bg-matrix-green hover:text-matrix-bg transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="lg"
                            className="group/btn border-matrix-green/30 text-matrix-green hover:bg-matrix-green hover:text-matrix-bg transition-all duration-300"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                              View Code
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="lg"
                          className="group/btn border-matrix-green/30 text-matrix-green hover:bg-matrix-green hover:text-matrix-bg transition-all duration-300"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Glow Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                      opacity: hoveredProject === index ? 1 : 0,
                    }}
                  />
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="group border-matrix-green/30 text-matrix-green hover:bg-matrix-green hover:text-matrix-bg px-10 py-6 text-lg"
            asChild
          >
            <a
              href="https://github.com/zahidb0nd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
              View More on GitHub
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
