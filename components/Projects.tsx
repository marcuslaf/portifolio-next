import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="bg-bg-secondary py-24 px-4 sm:px-8" aria-labelledby="projects-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            📁 Projetos
          </span>
          <h2 id="projects-title" className="text-3xl sm:text-4xl font-bold">
            Meus Trabalhos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={cn(
                "bg-bg-card border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/40 flex flex-col",
                project.featured
                  ? "border-accent/30 bg-gradient-to-br from-bg-card to-accent-subtle/30 hover:border-accent"
                  : "border-border hover:border-accent"
              )}
            >
              {/* Thumbnail */}
              <div
                className={cn(
                  "h-44 bg-gradient-to-br flex items-center justify-center text-6xl transition-all duration-300",
                  project.gradient
                )}
                aria-hidden="true"
              >
                <span className="opacity-90 hover:scale-110 transition-transform">
                  {project.icon}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Title row */}
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[0.6rem] font-semibold rounded-full whitespace-nowrap">
                      ★ Destaque
                    </span>
                  )}
                </div>

                <p className="text-sm text-text-secondary mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-bg-tertiary rounded-full text-[0.7rem] text-text-muted hover:bg-accent-subtle hover:text-accent transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-accent-subtle text-accent rounded-lg text-sm font-medium no-underline hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all"
                    aria-label={`Ver código do ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-accent-subtle text-accent rounded-lg text-sm font-medium no-underline hover:bg-accent hover:text-white hover:-translate-y-0.5 transition-all"
                      aria-label={`Ver demo do ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
