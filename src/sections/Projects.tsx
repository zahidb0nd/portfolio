import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      name: "Vantage Automotive SaaS",
      problem: "Automotive dealerships struggled with fragmented inventory management and slow customer response times due to legacy software, leading to a 15% loss in potential sales.",
      solution: "Architected a unified dashboard using Next.js and TanStack Query to consolidate inventory data in real-time. Implemented optimistic UI updates to ensure zero-latency user interactions.",
      stack: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS"],
      performance: "Reduced initial load time by 40% (2.1s to 1.2s). Achieved a Lighthouse Performance score of 98.",
      challenges: "Handling complex state for vehicle configuration wizards while maintaining URL synchronization for shareability. Solved using a custom hook syncing Zustand state with URL search params.",
      githubLink: "#",
      liveLink: "#"
    },
    {
      name: "Nexus Fintech Platform",
      problem: "Users experienced significant lag when visualizing high-frequency trading data, causing trust issues and platform abandonment.",
      solution: "Built a high-performance chart rendering engine using WebGL and web workers to offload heavy computations from the main thread.",
      stack: ["React", "WebGL", "Web Workers", "Node.js"],
      performance: "Capable of rendering 50,000+ data points at 60fps without UI jank.",
      challenges: "Ensuring real-time WebSocket data updates didn't block the main thread during heavy interaction. Implemented data throttling and batched updates to resolve this.",
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding container-px bg-white">
      <div className="max-w-4xl mx-auto">
        <span className="block text-sm font-semibold tracking-widest text-brand-500 uppercase mb-12">
          Selected Engineering Work
        </span>

        <div className="space-y-20">
          {projects.map((project) => (
            <article key={project.name} className="border-l-2 border-slate-100 pl-8 md:pl-12 py-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h3 className="text-3xl font-bold text-slate-900">{project.name}</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Problem</h4>
                    <p className="text-slate-600 leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Key Engineering Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{project.challenges}</p>
                  </div>
                </div>

                <div className="md:col-span-4 space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Performance</h4>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">{project.performance}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
