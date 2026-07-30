"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const typewriterTexts = [
  "Desenvolvedor Full Stack",
  "JavaScript | TypeScript | React",
  "Java | Spring Boot | Python",
  "Next.js | Node.js | .NET",
  "Estudante de Eng. de Software",
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setIsDeleting(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {}, 2500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      clearTimeout(timeout);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col justify-center px-4 sm:px-8 pt-24 pb-16 overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Glow backgrounds */}
      <div
        className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          animation: "pulse 10s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="flex flex-col animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary border border-border rounded-full text-sm text-text-secondary mb-6 w-fit">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Disponível para oportunidades
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4">
            Olá, eu sou <br />
            <span
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-300 bg-clip-text text-transparent animate-gradient"
            >
              Marcus Lafaiete
            </span>
          </h1>

          <div className="font-mono text-lg text-accent mb-6 min-h-[2rem]">
            <span aria-live="polite">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-text-secondary max-w-[520px] mb-8">
            Estudante de Engenharia de Software, combinando análise detalhada
            com pensamento criativo para construir soluções web modernas e eficientes.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-glow hover:-translate-y-1 hover:shadow-xl transition-all no-underline"
            >
              <Mail className="w-4 h-4" />
              Fale Comigo
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bg-tertiary text-text-primary font-semibold rounded-xl border border-border hover:border-accent hover:-translate-y-1 transition-all no-underline"
            >
              Ver Projetos
            </a>
            <a
              href="https://github.com/marcuslaf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bg-tertiary text-text-primary font-semibold rounded-xl border border-border hover:border-accent hover:-translate-y-1 transition-all no-underline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="flex gap-4" role="list" aria-label="Redes sociais">
            <a
              href="https://www.linkedin.com/in/marcuslaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-border rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-glow transition-all no-underline"
              aria-label="LinkedIn"
              role="listitem"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/marcuslaf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-border rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-glow transition-all no-underline"
              aria-label="GitHub"
              role="listitem"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:marcuslaf@hotmail.com"
              className="w-12 h-12 flex items-center justify-center bg-bg-tertiary border border-border rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-glow transition-all no-underline"
              aria-label="Enviar e-mail"
              role="listitem"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center items-center animate-fade-in-up">
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px]">
            {/* Glow */}
            <div
              className="absolute -inset-5 rounded-full blur-[40px] opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(168,85,247,0.3))",
                animation: "pulse 4s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            {/* Ring */}
            <div
              className="absolute -inset-3 rounded-full border-2 border-accent/50 animate-spin"
              style={{ animationDuration: "15s" }}
              aria-hidden="true"
            />
            {/* Image */}
            <img
              src="/foto.jpg"
              alt="Marcus Lafaiete - Desenvolvedor Full Stack"
              width={380}
              height={380}
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-bg-primary shadow-xl shadow-black/50 hover:scale-[1.02] transition-all duration-500"
              loading="eager"
            />
            {/* Floating card - tech */}
            <div
              className="absolute top-[15%] -right-8 sm:-right-10 bg-bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-xl shadow-black/40 z-20 animate-float hover:-translate-y-2 transition-transform"
              aria-hidden="true"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">
                &lt;/&gt;
              </div>
              <div>
                <div className="text-sm font-semibold">Full Stack</div>
                <div className="text-xs text-text-muted">Developer</div>
              </div>
            </div>
            {/* Floating card - location */}
            <div
              className="absolute bottom-[20%] -left-8 sm:-left-10 bg-bg-card border border-border rounded-2xl p-4 flex items-center gap-3 shadow-xl shadow-black/40 z-20 animate-float hover:-translate-y-2 transition-transform"
              style={{ animationDelay: "2s" }}
              aria-hidden="true"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg">
                📍
              </div>
              <div>
                <div className="text-sm font-semibold">Fortaleza</div>
                <div className="text-xs text-text-muted">CE - Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs animate-fade-in-up">
        <div className="w-6 h-10 border-2 border-border-light rounded-full relative">
          <div className="w-1 h-2 bg-accent rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
        <span>Role para baixo</span>
      </div>
    </section>
  );
}
