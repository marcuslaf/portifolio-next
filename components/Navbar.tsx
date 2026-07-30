"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiência" },
  { href: "#education", label: "Formação" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          const sections = document.querySelectorAll("section[id]");
          let current = "home";
          sections.forEach((section) => {
            const sectionTop = (section as HTMLElement).offsetTop - 150;
            if (window.scrollY >= sectionTop) {
              current = section.getAttribute("id") || "home";
            }
          });
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300",
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/30 py-3"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="text-xl font-bold font-mono text-white hover:scale-105 transition-transform no-underline"
          aria-label="Marcus Lafaiete - Início"
        >
          <span className="text-accent">&lt;</span>ML<span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1 list-none" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 no-underline relative",
                  activeSection === link.href.replace("#", "")
                    ? "text-accent bg-accent-subtle"
                    : "text-text-secondary hover:text-text-primary hover:bg-accent-subtle"
                )}
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-1 z-[1001] bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed top-0 right-0 w-[75%] max-w-[300px] h-dvh bg-bg-secondary flex flex-col items-center justify-center gap-4 transition-all duration-300 border-l border-border shadow-2xl shadow-black/50 md:hidden",
            mobileOpen ? "right-0" : "-right-full"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={cn(
                "text-lg font-medium transition-colors no-underline py-2 px-6 rounded-lg",
                activeSection === link.href.replace("#", "")
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
