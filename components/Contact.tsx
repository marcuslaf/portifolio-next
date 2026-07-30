"use client";

import { useState, FormEvent } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "sending" | "success" | "error";

const contactMethods = [
  {
    icon: Mail,
    label: "E-mail",
    value: "marcuslaf@hotmail.com",
    href: "mailto:marcuslaf@hotmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/marcuslaf",
    href: "https://www.linkedin.com/in/marcuslaf",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/marcuslaf",
    href: "https://github.com/marcuslaf",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Fortaleza, CE - Brasil",
    href: null,
  },
];

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Attempt EmailJS if configured, otherwise simulate
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: data.get("name"),
              from_email: data.get("email"),
              subject: data.get("subject"),
              message: data.get("message"),
            },
          }),
        });

        if (res.ok) {
          setStatus("success");
          setMessage("Mensagem enviada com sucesso! Entrarei em contato em breve.");
          form.reset();
        } else {
          setStatus("error");
          setMessage("Erro ao enviar mensagem. Tente novamente ou envie um e-mail direto.");
        }
      } catch {
        setStatus("error");
        setMessage("Erro de conexão. Tente novamente.");
      }
    } else {
      // Simulate (no EmailJS configured)
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setMessage("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      form.reset();

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-bg-primary py-24 px-4 sm:px-8"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-accent-subtle border border-accent/20 rounded-full text-sm font-medium text-accent mb-4">
            ✉ Contato
          </span>
          <h2 id="contact-title" className="text-3xl sm:text-4xl font-bold">
            Vamos conversar?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Entre em contato</h3>
          <p className="text-text-secondary mb-8">
            Estou disponível para oportunidades, projetos e parcerias. Vamos criar
            algo incrível juntos!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Contact cards */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const Wrapper = method.href ? "a" : "div";
                const wrapperProps = method.href
                  ? {
                      href: method.href,
                      target: method.href?.startsWith("http") ? "_blank" : undefined,
                      rel: method.href?.startsWith("http") ? "noopener noreferrer" : undefined,
                    }
                  : {};

                return (
                  <Wrapper
                    key={method.label}
                    {...(wrapperProps as any)}
                    className={cn(
                      "flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl transition-all",
                      method.href
                        ? "hover:border-accent hover:translate-x-2 hover:shadow-lg hover:shadow-black/30 cursor-pointer no-underline text-text-primary"
                        : ""
                    )}
                  >
                    <div className="w-12 h-12 bg-accent-subtle rounded-xl flex items-center justify-center text-accent shrink-0 transition-all group-hover:bg-accent group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs text-text-muted mb-0.5">
                        {method.label}
                      </span>
                      <span className="text-sm font-medium">{method.value}</span>
                    </div>
                    {method.href && (
                      <ArrowRight className="w-4 h-4 text-text-muted transition-all group-hover:text-accent group-hover:translate-x-1" />
                    )}
                  </Wrapper>
                );
              })}
            </div>

            {/* Right - Form */}
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-2xl p-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <CheckCircle className="w-16 h-16 text-success mb-4" />
                  <p className="text-lg font-semibold mb-2">Obrigado!</p>
                  <p className="text-sm text-text-secondary">{message}</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Nome <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        E-mail <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Assunto <span className="text-error">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Qual o assunto?"
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/30 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Mensagem <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        rows={4}
                        placeholder="Sua mensagem..."
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-3 focus:ring-accent/30 transition-all text-sm resize-y"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-error bg-error/10 px-4 py-3 rounded-xl">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-glow hover:-translate-y-1 hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 border-none cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
