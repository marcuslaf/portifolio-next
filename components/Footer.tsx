"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border py-8 px-4" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="text-xl font-bold font-mono" aria-hidden="true">
          <span className="text-accent">&lt;</span>ML<span className="text-accent">/&gt;</span>
        </div>
        <p className="text-text-muted text-sm">
          Desenvolvido por{" "}
          <strong className="text-accent font-semibold">Marcus Lafaiete</strong> &copy; {year}
        </p>
        <div className="flex gap-4" role="list" aria-label="Redes sociais">
          <a
            href="https://www.linkedin.com/in/marcuslaf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-bg-tertiary rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 transition-all no-underline"
            aria-label="LinkedIn"
            role="listitem"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/marcuslaf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-bg-tertiary rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 transition-all no-underline"
            aria-label="GitHub"
            role="listitem"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:marcuslaf@hotmail.com"
            className="w-10 h-10 flex items-center justify-center bg-bg-tertiary rounded-xl text-text-secondary hover:bg-accent hover:text-white hover:-translate-y-1 transition-all no-underline"
            aria-label="Enviar e-mail"
            role="listitem"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
