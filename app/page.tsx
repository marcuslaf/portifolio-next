import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { GitHubStats } from "@/components/GitHubStats";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />

      {/* GitHub Stats Section */}
      <section className="bg-bg-primary py-16 px-4 sm:px-8" aria-labelledby="github-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              GitHub
            </span>
            <h2 id="github-title" className="text-3xl sm:text-4xl font-bold">
              Atividade no GitHub
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Acompanhe meus projetos, contribuições e a evolução do código aberto.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <GitHubStats />
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
