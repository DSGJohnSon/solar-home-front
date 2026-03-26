import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Type, AlignLeft, Sun, Scissors } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Lettrage adhésif et découpe vinyle à Tours | Solar Home 37",
  description:
    "Lettrage adhésif et découpe vinyle pour vitrines, enseignes et signalétique à Tours et en Indre-et-Loire. Communication claire et durable. Devis gratuit.",
};

const advantages = [
  {
    icon: Type,
    title: "Lisibilité immédiate",
    description:
      "Le lettrage adhésif communique l'essentiel d'un seul regard — nom d'enseigne, horaires, slogan — sans surcharger visuellement la vitrine.",
  },
  {
    icon: AlignLeft,
    title: "Image professionnelle",
    description:
      "Un lettrage net et bien posé renvoie une image soignée et crédible, essentielle pour les commerces et les professions libérales.",
  },
  {
    icon: Scissors,
    title: "Grande liberté de création",
    description:
      "La découpe vinyle permet de reproduire avec précision n'importe quelle forme, typographie ou élément graphique.",
  },
  {
    icon: Sun,
    title: "Durabilité et résistance",
    description:
      "Les adhésifs professionnels utilisés par Solar Home 37 résistent aux UV, aux intempéries et conservent leur lisibilité dans le temps.",
  },
];

const benefits = [
  "Lisibilité immédiate depuis l'extérieur",
  "Image professionnelle et soignée",
  "Aucune modification du bâtiment",
  "Découpe précise, rendu net",
  "Résistance aux UV et intempéries",
  "Solution durable et économique",
  "Adhésif amovible sans abîmer le vitrage",
];

const applications = [
  {
    label: "Nom d'enseigne et logo typographique",
    description:
      "Identifiez clairement votre activité avec un lettrage précis, adapté à votre charte graphique.",
  },
  {
    label: "Horaires d'ouverture",
    description:
      "Affichez vos horaires de façon durable et lisible, visible depuis la rue à tout moment.",
  },
  {
    label: "Slogan et messages clés",
    description:
      "Un message court et bien placé peut transformer l'impact d'une vitrine sur les passants.",
  },
  {
    label: "Signalétique directionnelle et réglementaire",
    description:
      "Informations pratiques, mentions obligatoires, numéros — tout ce qui doit être visible clairement.",
  },
];

const professionals = [
  {
    label: "Commerces et boutiques",
    description:
      "Enseigne, horaires, promotions — donnez à votre vitrine une identité forte et immédiatement lisible.",
  },
  {
    label: "Agences et bureaux",
    description:
      "Nom de la société, activité, accès — une signalétique sobre et professionnelle pour vos locaux.",
  },
  {
    label: "Restaurants et cafés",
    description:
      "Nom, horaires, type de cuisine — communiquez l'essentiel sur votre devanture avec élégance.",
  },
  {
    label: "Artisans et professions libérales",
    description:
      "Médecins, avocats, architectes — un lettrage discret et soigné pour des locaux qui inspirent confiance.",
  },
];

const faq = [
  {
    question: "Le lettrage est-il lisible de loin ?",
    answer:
      "Oui, les tailles et typographies sont adaptées pour garantir une excellente lisibilité depuis la rue.",
  },
  {
    question: "Peut-on choisir la couleur et le style ?",
    answer:
      "Oui, de nombreuses couleurs, tailles et typographies sont possibles pour s'adapter à votre charte graphique.",
  },
  {
    question: "Le lettrage est-il amovible ?",
    answer:
      "Oui, il peut être retiré sans abîmer le vitrage lorsqu'il est posé correctement.",
  },
  {
    question: "Convient-il pour une vitrine très exposée ?",
    answer:
      "Oui, les adhésifs utilisés sont résistants aux UV et aux intempéries pour une tenue durable.",
  },
  {
    question: "Quel est le tarif d'un lettrage adhésif ?",
    answer:
      "Un lettrage de vitrine est chiffré au projet, à partir de 490 €. Le tarif dépend de la surface, du nombre de caractères et de la complexité de la typographie. Devis gratuit sur simple demande.",
  },
];

export default function LettrageDécoupeVinylePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films publicitaires · Lettrage & Découpe vinyle
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Lettrage adhésif et découpe vinyle pour vitrines et locaux
            professionnels
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Communication sobre, efficace et durable — pour identifier votre
            activité et transmettre un message clair sur vos vitrines.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour un lettrage adhésif"
          >
            <Button variant="default" size="xl">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>

        <div className="px-4 max-w-6xl mx-auto">
          <ImageHero />
        </div>
      </section>

      {/* ── INTRODUCTION ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-5"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            Pourquoi choisir le lettrage adhésif ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Le lettrage adhésif et la découpe vinyle sont des solutions de
              communication sobres, efficaces et professionnelles pour identifier
              une activité et transmettre un message clair.
            </p>
            <p>
              Solar Home 37 accompagne les entreprises, commerçants et
              indépendants dans la création et la pose de lettrages adhésifs sur
              vitrines, devantures et surfaces vitrées. Grâce à la découpe
              vinyle, chaque texte ou élément graphique est appliqué avec
              précision pour un rendu net, lisible et durable.
            </p>
            <p>
              Le lettrage adhésif permet de communiquer efficacement sans
              surcharger visuellement une vitrine ou une façade. Il est idéal
              pour afficher les informations essentielles tout en conservant une
              vitrine sobre et professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="block w-12 h-1 bg-primary mx-auto mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Les avantages du lettrage adhésif
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-white border border-border p-6 md:p-8"
                >
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-title font-semibold text-zinc-950 mb-2 text-base">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-border p-6 md:p-8">
            <h3 className="font-title font-semibold text-zinc-950 mb-5 text-sm uppercase tracking-wider">
              En résumé
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm text-zinc-700 leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Applications du lettrage adhésif et de la découpe vinyle
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              La découpe vinyle permet une grande liberté de création, avec des
              formes précises et un rendu professionnel adapté à chaque besoin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {applications.map((app) => (
              <div
                key={app.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0 sm:nth-last-2:border-b-0"
              >
                <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                    {app.label}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONNELS CONCERNÉS ──────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Une solution adaptée à tous les professionnels
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Le lettrage adhésif s&apos;intègre parfaitement aux vitrines,
                cloisons vitrées ou surfaces planes visibles du public, quel que
                soit votre secteur d&apos;activité.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Solar Home 37 assure une pose professionnelle avec un rendu
                précis et une tenue dans le temps garantie — découpe nette,
                alignement parfait, excellente résistance aux UV.
              </p>
            </div>

            <div className="border border-border">
              {professionals.map((p) => (
                <div
                  key={p.label}
                  className="flex items-start gap-4 p-5 border-b border-border last:border-b-0"
                >
                  <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                      {p.label}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* ── SEO LOCAL ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Lettrage adhésif et découpe vinyle à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, en{" "}
            <strong className="text-zinc-800">Indre-et-Loire (37)</strong> et
            alentours pour la pose de lettrage adhésif et de découpe vinyle sur
            vitrines et surfaces professionnelles.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 490 €</span>
            {" · "}Prix au projet
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Besoin d'un lettrage adhésif professionnel ?"
        subtitle="Contactez Solar Home 37 pour afficher clairement le nom et les informations de votre activité."
      />
    </main>
  );
}
