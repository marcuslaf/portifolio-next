import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Marcus Lafaiete | Desenvolvedor Full Stack",
  description:
    "Portfólio de Marcus Lafaiete, Desenvolvedor Full Stack. Especialidades: JavaScript, TypeScript, React, Next.js, Java, Spring Boot, Python, .NET.",
  keywords: [
    "Desenvolvedor Full Stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Java",
    "Spring Boot",
    "Python",
    ".NET",
    "Fortaleza",
    "Portfólio",
  ],
  authors: [{ name: "Marcus Lafaiete" }],
  creator: "Marcus Lafaiete",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcuslaf.com",
    siteName: "Marcus Lafaiete - Portfólio",
    title: "Marcus Lafaiete | Desenvolvedor Full Stack",
    description:
      "Portfólio de Marcus Lafaiete, Desenvolvedor Full Stack em Fortaleza-CE.",
    images: [
      { url: "https://marcuslaf.com/foto.jpg", width: 380, height: 380 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Lafaiete | Desenvolvedor Full Stack",
    description:
      "Portfólio de Marcus Lafaiete, Desenvolvedor Full Stack em Fortaleza-CE.",
    images: ["https://marcuslaf.com/foto.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased overflow-x-hidden">
        <ScrollProgress />
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-1/2 focus:-translate-x-1/2 focus:z-[10001] focus:bg-accent focus:text-white focus:px-6 focus:py-3 focus:rounded-b-lg focus:font-semibold focus:no-underline"
        >
          Pular para o conteúdo principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
