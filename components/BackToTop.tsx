"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 border-none rounded-xl text-white text-lg cursor-pointer z-50 shadow-lg shadow-accent-glow transition-all duration-300 flex items-center justify-center",
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-5"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
