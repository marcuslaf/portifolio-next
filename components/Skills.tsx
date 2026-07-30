"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "HTML5", level: 85, color: "#e34f26", icon: "HTML" },
  { name: "CSS3", level: 80, color: "#1572b6", icon: "CSS" },
  { name: "JavaScript", level: 78, color: "#f7df1e", icon: "JS" },
  { name: "TypeScript", level: 70, color: "#3178c6", icon: "TS" },
  { name: "React", level: 72, color: "#61dafb", icon: "⚛" },
  { name: "Tailwind CSS", level: 75, color: "#06b6d4", icon: "TW" },
];

const backendSkills: Skill[] = [
  { name: "Java / Spring Boot", level: 65, color: "#007396", icon: "JV" },
  { name: "Python", level: 70, color: "#3776ab", icon: "PY" },
  { name: "C# / .NET", level: 60, color: "#512bd4", icon: "C#" },
  { name: "Node.js", level: 65, color: "#339933", icon: "N" },
  { name: "APIs REST", level: 78, color: "#6366f1", icon: "API" },
  { name: "PostgreSQL", level: 65, color: "#4169e1", icon: "PG" },
];

const toolsSkills: Skill[] = [
  { name: "Git / GitHub", level: 82, color: "#f05032", icon: "GIT" },
  { name: "Docker", level: 60, color: "#2496ed", icon: "D" },
  { name: "Redis", level: 55, color: "#dc382d", icon: "R" },
  { name: "Figma", level: 50, color: "#f24e1e", icon: "F" },
];

const softSkills = [
  "Resolução de Problemas", "Lógica de Programação",
  "Pensamento Analítico", "Trabalho em Equipe",
  "Aprendizado Contínuo", "Comunicação",
  "Organização", "Atenção aos Detalhes",
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-bg-card border border-border rounded-2xl p-4 flex items-center gap-4 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={{
        transition: "all 0.5s ease, opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0 transition-transform hover:scale-110"
        style={{ background: skill.color }}
        aria-hidden="true"
      >
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold mb-2">{skill.name}</h4>
        <div className="h-[6px] bg-bg-tertiary rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-[1200ms] ease-out"
            style={{
              width: visible ? `${skill.level}%` : "0%",
              background: `linear-gradient(90deg, ${skill.color}, #818cf8)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-bg-primary py-24 px-4 sm:px-8" aria-labelledby="skills-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            &lt;/&gt; Habilidades
          </span>
          <h2 id="skills-title" className="text-3xl sm:text-4xl font-bold">
            Minhas competências
          </h2>
        </div>

        {/* Frontend */}
        <SkillCategory title="Frontend & UI" skills={frontendSkills} />
        {/* Backend */}
        <SkillCategory title="Backend & Banco de Dados" skills={backendSkills} />
        {/* Tools */}
        <SkillCategory title="Ferramentas & DevOps" skills={toolsSkills} />

        {/* Soft Skills */}
        <div>
          <h3 className="text-lg font-semibold text-text-secondary mb-6 flex items-center gap-3">
            <span>✦</span> Competências Comportamentais
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-bg-card border border-border rounded-full text-sm text-text-secondary hover:border-accent hover:text-accent hover:bg-accent-subtle hover:-translate-y-0.5 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-text-secondary mb-6 flex items-center gap-3">
        <span>■</span> {title}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}
