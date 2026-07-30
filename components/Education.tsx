import { GraduationCap, BookOpen, School } from "lucide-react";
import { cn } from "@/lib/utils";

const educations = [
  {
    icon: GraduationCap,
    period: "Jan 2026 - Dez 2029",
    title: "Bacharelado em Engenharia de Software",
    institution: "Centro Universitário UniFatecie",
    status: "Em andamento",
    statusClass: "bg-warning/20 text-warning",
    current: true,
  },
  {
    icon: BookOpen,
    period: "Abr 2024 - Mai 2025",
    title: "Tecnologia da Informação",
    institution: "Infinity School Fortaleza",
    status: "Concluído",
    statusClass: "bg-success/20 text-success",
    current: false,
  },
  {
    icon: School,
    period: "Ensino Médio",
    title: "Ensino Médio Completo",
    institution: "Colégio Filgueiras Lima",
    status: "Concluído",
    statusClass: "bg-success/20 text-success",
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="bg-bg-primary py-24 px-4 sm:px-8" aria-labelledby="education-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            ★ Formação
          </span>
          <h2 id="education-title" className="text-3xl sm:text-4xl font-bold">
            Educação
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((edu) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.title}
                className={cn(
                  "bg-bg-card border border-border rounded-2xl p-6 flex items-start gap-5 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30",
                  edu.current &&
                    "border-accent/30 bg-gradient-to-br from-bg-card to-accent-subtle/50"
                )}
              >
                <div className="w-14 h-14 bg-accent-subtle rounded-2xl flex items-center justify-center text-accent shrink-0 transition-all group-hover:bg-accent group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-text-muted block mb-1">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-semibold mb-1">{edu.title}</h3>
                  <h4 className="text-sm font-medium text-accent mb-3">
                    {edu.institution}
                  </h4>
                  <span
                    className={cn(
                      "text-xs px-2.5 py-1 rounded-full font-medium",
                      edu.statusClass
                    )}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
