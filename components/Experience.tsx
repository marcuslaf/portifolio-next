"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    period: "Jan 2026 - Presente",
    badge: "Atual",
    badgeClass: "bg-success/20 text-success",
    title: "Estudante de Engenharia de Software",
    company: "Centro Universitário UniFatecie",
    description:
      "Formação em andamento focada em desenvolvimento de software, arquitetura de sistemas e boas práticas de programação.",
    tags: ["Engenharia", "Software", "Arquitetura"],
  },
  {
    period: "Out 2021 - Out 2024",
    badge: null,
    title: "Caixa",
    company: "Supermercado Cometa",
    highlights: [
      "Atendimento ao público",
      "Operação de caixa",
      "Resolução de demandas em tempo real",
    ],
    description:
      "Desenvolvimento de habilidades em comunicação, resolução de problemas, organização, gestão de prioridades e tomada de decisão sob pressão.",
  },
  {
    period: "Jul 2010 - Jul 2019",
    badge: null,
    title: "Diagramador",
    company: "SATE - UAB - UECE",
    highlights: [
      "Diagramação de materiais educacionais",
      "Clareza visual e organização",
      "Foco na experiência do usuário",
    ],
    description:
      "Competências em design, usabilidade, atenção aos detalhes e estruturação de conteúdo para meios impressos e digitais.",
  },
];

export function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(
              (entry.target as HTMLElement).dataset.index
            );
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -30% 0px" }
    );

    const items = document.querySelectorAll("[data-timeline-item]");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="bg-bg-secondary py-24 px-4 sm:px-8"
      aria-labelledby="experience-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            ■ Experiência
          </span>
          <h2 id="experience-title" className="text-3xl sm:text-4xl font-bold">
            Trajetória Profissional
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto" ref={timelineRef}>
          {/* Timeline line */}
          <div className="absolute left-[26px] top-0 w-[2px] h-full bg-accent/30" aria-hidden="true" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              data-timeline-item
              data-index={idx}
              className="relative pl-[70px] pb-12 last:pb-0"
            >
              {/* Dot */}
              <div
                className={cn(
                  "absolute left-[18px] top-0 w-[18px] h-[18px] rounded-full border-[3px] border-accent bg-bg-primary z-10 transition-all duration-300",
                  activeIndex === idx &&
                    "bg-accent scale-125 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"
                )}
                aria-hidden="true"
              />

              {/* Content */}
              <div
                className={cn(
                  "bg-bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-black/30",
                  activeIndex === idx && "border-accent/40"
                )}
              >
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    {exp.badge && (
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold",
                          exp.badgeClass
                        )}
                      >
                        {exp.badge}
                      </span>
                    )}
                    <span className="text-sm text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <h4 className="text-base font-medium text-accent mb-3">
                  {exp.company}
                </h4>

                {exp.highlights && (
                  <ul className="mb-3 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-secondary flex items-center gap-2"
                      >
                        <span className="text-accent">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-sm text-text-secondary">{exp.description}</p>

                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent-subtle rounded-full text-xs text-accent hover:bg-accent hover:text-white transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
