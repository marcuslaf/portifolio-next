export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  featured?: boolean;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Encurtador de URLs",
    description:
      "API de produção com rate limiting distribuído (Redis), QR codes, autenticação por API key e métricas de acesso. CI/CD com GitHub Actions.",
    tags: ["Java 25", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    demoUrl: "https://frontend-gilt-six-31.vercel.app",
    githubUrl: "https://github.com/marcuslaf/encurtador-de-urls",
    featured: true,
    gradient: "from-indigo-600 to-purple-600",
    icon: "🔗",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard interativo com React 19, gráficos Recharts, tema escuro/claro e API OpenWeatherMap. TypeScript e TailwindCSS.",
    tags: ["React 19", "TypeScript", "TailwindCSS", "Recharts"],
    demoUrl: "https://weather-dashboard-theta-steel.vercel.app",
    githubUrl: "https://github.com/marcuslaf/weather-dashboard",
    gradient: "from-sky-500 to-cyan-500",
    icon: "🌤",
  },
  {
    title: "Conversor de Moedas",
    description:
      "Conversor full-stack com React/Next.js, Spring Boot, taxas em tempo real via ExchangeRate-API e deploy na Vercel + Render.",
    tags: ["React", "Next.js", "Spring Boot", "Docker", "ExchangeRate-API"],
    demoUrl: "https://conversor-moedas-frontend.vercel.app",
    githubUrl: "https://github.com/marcuslaf/conversor-de-moedas",
    gradient: "from-emerald-500 to-teal-500",
    icon: "💰",
  },
  {
    title: "Gerenciador de Tarefas",
    description:
      "App completo com React 18, testes unitários (Vitest), linting, formatação e pre-commit hooks.",
    tags: ["React 18", "Vite", "Tailwind CSS", "Vitest"],
    demoUrl: "https://todo-list-react2025.vercel.app",
    githubUrl: "https://github.com/marcuslaf/todo-list-react2025",
    gradient: "from-orange-500 to-rose-500",
    icon: "✅",
  },
  {
    title: "Minimal API .NET",
    description:
      "API RESTful com ASP.NET Core 8, JWT auth, FluentValidation, Serilog e 28 testes automatizados. Frontend React com dark/light theme.",
    tags: [".NET 8", "React 19", "Entity Framework", "JWT", "Docker"],
    demoUrl: "https://frontend-ruddy-seven-m6v9ufe95y.vercel.app",
    githubUrl: "https://github.com/marcuslaf/minimal-api",
    gradient: "from-violet-500 to-indigo-500",
    icon: "⚙",
  },
  {
    title: "Jogo da Memória",
    description:
      "Jogo com 3 níveis de dificuldade, efeitos sonoros (Web Audio API), records no localStorage e animações 3D CSS.",
    tags: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
    demoUrl: "https://desafio-jogo-da-memoria.vercel.app",
    githubUrl: "https://github.com/marcuslaf/desafio-jogo-da-memoria",
    gradient: "from-pink-500 to-rose-500",
    icon: "🎮",
  },
  {
    title: "Detona Ralph (TypeScript)",
    description:
      "Jogo interativo inspirado no filme Detona Ralph, desenvolvido com TypeScript para tipagem segura e melhor organização do código.",
    tags: ["TypeScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/marcuslaf/detona-ralph-ts",
    gradient: "from-yellow-500 to-orange-500",
    icon: "🔨",
  },
  {
    title: "Barbearia AD Araújo",
    description:
      "Site institucional completo com dark/light mode, galeria horizontal, grades de serviços e SEO otimizado.",
    tags: ["HTML5", "CSS3", "JavaScript", "SEO"],
    demoUrl: "https://barbearia-ade-araujo.vercel.app",
    githubUrl: "https://github.com/marcuslaf/barbearia-ade-araujo",
    gradient: "from-stone-600 to-stone-800",
    icon: "💈",
  },
];
