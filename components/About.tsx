import { GraduationCap, MapPin, Clock, Globe, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Formação",
    value: "Engenharia de Software",
    badge: "Em andamento",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Fortaleza, CE",
    badge: "Brasil",
  },
  {
    icon: Clock,
    label: "Experiência",
    value: "1+ anos",
    badge: "Total",
  },
  {
    icon: Globe,
    label: "Idiomas",
    value: "Português",
    badge: "Nativo",
  },
];

export function About() {
  return (
    <section id="about" className="bg-bg-secondary py-24 px-4 sm:px-8" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            ★ Sobre Mim
          </span>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-bold">
            Quem sou eu
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-lg text-text-primary font-medium mb-4">
              Sou <strong className="text-accent">Desenvolvedor Full Stack</strong>{" "}
              em formação, estudante de{" "}
              <strong className="text-accent">Engenharia de Software</strong>,
              com experiência em desenvolvimento web utilizando HTML5, CSS3,
              JavaScript, Python e Java.
            </p>
            <p className="text-text-secondary mb-4">
              Minha trajetória profissional passou por áreas que fortaleceram competências
              essenciais para a tecnologia, como atenção aos detalhes, organização,
              resolução de problemas, comunicação e foco na experiência do usuário.
            </p>
            <p className="text-text-secondary mb-6">
              Atualmente desenvolvo projetos voltados para aplicações web, integração com
              APIs REST, versionamento com Git/GitHub e boas práticas de desenvolvimento.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-glow hover:-translate-y-1 transition-all no-underline"
              >
                Vamos Conversar
              </a>
              <a
                href="/curriculo-marcus-lafaiete.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-bg-tertiary text-text-primary font-semibold rounded-xl border border-border hover:border-accent hover:-translate-y-1 transition-all no-underline"
              >
                <FileDown className="w-4 h-4" />
                Baixar Currículo
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="bg-bg-card border border-border rounded-2xl p-5 flex items-center gap-4 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all"
                >
                  <div className="w-12 h-12 bg-accent-subtle rounded-xl flex items-center justify-center text-accent shrink-0 transition-all group-hover:bg-accent group-hover:text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
                      {card.label}
                    </h4>
                    <p className="text-sm font-semibold mb-1">{card.value}</p>
                    <span className="text-[0.65rem] px-2 py-0.5 bg-accent-subtle text-accent rounded">
                      {card.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
