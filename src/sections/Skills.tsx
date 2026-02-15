const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "State Management",
      skills: ["Redux", "Zustand", "Context API", "TanStack Query"]
    },
    {
      title: "Performance",
      skills: ["Code Splitting", "Lazy Loading", "Lighthouse Optimization", "Image Optimization"]
    },
    {
      title: "Accessibility",
      skills: ["Semantic HTML", "WCAG Principles", "ARIA Roles", "Keyboard Navigation"]
    },
    {
      title: "Backend Integration",
      skills: ["REST APIs", "GraphQL", "Authentication (NextAuth/Clerk)", "API Handling"]
    }
  ];

  return (
    <section id="skills" className="section-padding container-px bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        <span className="block text-sm font-semibold tracking-widest text-brand-500 uppercase mb-12">
          Technical Expertise
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-600 border-b border-slate-200 pb-2 last:border-0">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
