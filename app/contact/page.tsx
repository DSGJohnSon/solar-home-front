import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactSection } from "@/components/sections/contact/contact";

export const metadata: Metadata = {
  title: "Demande de devis films adhésifs & décoration | Solar Home 37 Tours",
  description:
    "Demandez votre devis gratuit pour films solaires, adhésifs décoratifs, vitrophanie et stickage publicitaire à Tours et en Indre-et-Loire. Étude personnalisée.",
};

const reassurance = [
  "Devis gratuit et sans engagement",
  "Réponse rapide",
  "Étude personnalisée",
  "Produits professionnels",
  "Pose soignée",
];

const faq = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, le devis est gratuit et sans obligation.",
  },
  {
    question: "Dois-je connaître exactement mon besoin ?",
    answer:
      "Non. Vous pouvez simplement décrire votre problématique, nous vous guiderons vers la solution la plus adaptée.",
  },
  {
    question: "Puis-je envoyer des photos ?",
    answer:
      "Oui, c'est même recommandé. Des photos permettent une estimation plus précise dès le départ.",
  },
  {
    question: "Intervenez-vous chez les particuliers et les professionnels ?",
    answer:
      "Oui, Solar Home 37 accompagne les deux types de projets — résidentiels comme professionnels.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-36 md:pt-44 pb-4 px-4 bg-zinc-50">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Devis gratuit
          </span>
          <h1
            className="font-title font-bold text-zinc-950 mb-0"
            style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Demandez votre devis gratuit
          </h1>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────── */}
      <ContactSection
        title="Votre projet en quelques mots"
        subtitle="Un conseiller Solar Home 37 vous recontacte rapidement avec une proposition adaptée."
      />

      {/* ── RÉASSURANCE ───────────────────────────────────── */}
      <section className="py-10 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            {reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                <span className="text-sm font-medium text-zinc-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-10"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            Questions fréquentes
          </h2>
          <dl className="space-y-6">
            {faq.map((item) => (
              <div
                key={item.question}
                className="border-b border-border pb-6 last:border-b-0"
              >
                <dt className="font-semibold text-zinc-950 text-sm mb-2">
                  {item.question}
                </dt>
                <dd className="text-sm text-zinc-600 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
