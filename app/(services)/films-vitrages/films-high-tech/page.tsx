import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Zap, Thermometer, Sun, Layers } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Films high-tech pour vitrages à Tours | Solar Home 37",
  description:
    "Films high-tech Solar Gard pour vitrages à Tours et Indre-et-Loire. Performances avancées : protection solaire, confort thermique et durabilité. Devis gratuit.",
};

const advantages = [
  {
    icon: Sun,
    title: "Rejet solaire renforcé",
    description:
      "Les films high-tech offrent des performances de rejet solaire supérieures, réduisant significativement les apports de chaleur même sur les vitrages les plus exposés.",
  },
  {
    icon: Thermometer,
    title: "Confort thermique optimal",
    description:
      "En agissant simultanément sur la chaleur et le rayonnement UV, ces films améliorent durablement le confort intérieur sans climatisation excessive.",
  },
  {
    icon: Zap,
    title: "Performances multiples",
    description:
      "Un film high-tech combine plusieurs fonctionnalités dans une seule solution : protection solaire, filtration UV, confort visuel et durabilité accrue.",
  },
  {
    icon: Layers,
    title: "Durabilité éprouvée",
    description:
      "Conçus pour les environnements exigeants, les films Solar Gard – Saint-Gobain offrent une excellente stabilité dans le temps, même sur des vitrages fortement exposés.",
  },
];

const benefits = [
  "Rejet solaire renforcé et mesurable",
  "Filtration avancée des rayons UV",
  "Amélioration du confort thermique",
  "Résultat immédiat, sans travaux lourds",
  "Aucune modification structurelle",
  "Films Solar Gard – Saint-Gobain certifiés",
  "Compatible bâtiments modernes et en rénovation",
];

const applications = [
  {
    label: "Bâtiments tertiaires et professionnels",
    description:
      "Répondez aux exigences de performance énergétique élevées des immeubles de bureau et locaux professionnels modernes.",
  },
  {
    label: "Bureaux fortement exposés au soleil",
    description:
      "Réduisez les surchauffes et améliorez les conditions de travail dans les espaces vitrés orientés sud ou ouest.",
  },
  {
    label: "Commerces et vitrines sensibles",
    description:
      "Protégez vos produits et améliorez le confort des clients sans compromettre la visibilité de votre vitrine.",
  },
  {
    label: "Habitations recherchant une solution technique durable",
    description:
      "Grandes baies vitrées, vérandas, façades exposées — une réponse technique pérenne aux problématiques complexes.",
  },
];

const faq = [
  {
    question:
      "Quelle est la différence entre un film solaire et un film high-tech ?",
    answer:
      "Un film high-tech combine plusieurs performances avancées (rejet solaire, confort thermique, durabilité, contrôle visuel) dans une seule solution, là où un film solaire agit principalement sur la chaleur.",
  },
  {
    question:
      "Les films high-tech sont-ils adaptés aux bâtiments professionnels ?",
    answer:
      "Oui. Les films high-tech Solar Gard sont conçus pour les bâtiments tertiaires, bureaux et commerces nécessitant un haut niveau de performance technique.",
  },
  {
    question: "Peut-on combiner plusieurs protections avec un film high-tech ?",
    answer:
      "Oui. Un film high-tech peut associer protection solaire, filtration UV et confort visuel, sans multiplier les solutions sur le vitrage.",
  },
  {
    question: "Quelle est la durabilité des films high-tech Solar Gard ?",
    answer:
      "Les films high-tech Solar Gard – Saint-Gobain sont développés pour offrir une excellente stabilité dans le temps, même sur des vitrages fortement exposés.",
  },
  {
    question: "Quel est le tarif d'un film high-tech ?",
    answer:
      "Les films high-tech sont facturés à partir de 195 €/m² (pose incluse). Un minimum de chantier de 690 € HT est applicable. Chaque projet bénéficie d'un devis personnalisé gratuit.",
  },
];

export default function FilmsHighTechPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films pour vitrages · High-Tech
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Films high-tech pour vitrages : performance technique et protection
            avancée
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Protection solaire, confort thermique, durabilité accrue — plusieurs
            performances réunies dans une seule solution, sans remplacement de
            vitrage.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour un film high-tech"
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

      {/* ── QU'EST-CE QU'UN FILM HIGH-TECH ────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-5"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            Qu&apos;est-ce qu&apos;un film high-tech pour vitrage ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Un film high-tech est un film technique de nouvelle génération
              combinant plusieurs fonctionnalités dans une seule solution. Il
              agit directement sur le vitrage pour optimiser ses performances
              globales, tout en conservant son aspect visuel.
            </p>
            <p>
              Ces solutions permettent d&apos;agir simultanément sur la protection
              solaire, le confort thermique, la sécurité et la durabilité du
              vitrage, sans remplacement ni modification des menuiseries
              existantes.
            </p>
            <p>
              Solar Home 37 propose exclusivement des films issus du groupe
              Saint-Gobain, via la marque Solar Gard, reconnue pour le
              développement de technologies de pointe appliquées aux vitrages de
              bâtiments. Ces solutions sont conçues pour répondre aux exigences
              élevées des environnements professionnels comme résidentiels.
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
              Les performances des films high-tech
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

          {/* Checklist résumé */}
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
              Pour quels projets sont adaptés les films high-tech ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Les films high-tech sont recommandés pour les projets nécessitant
              un niveau de performance supérieur, où une solution standard ne
              suffit pas.
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

      {/* ── POSE & ACCOMPAGNEMENT ─────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Pose professionnelle et performance durable
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                L&apos;efficacité d&apos;un film high-tech repose sur la qualité du
                produit et la précision de la pose. Solar Home 37 assure une
                installation professionnelle, respectant les préconisations
                techniques propres à chaque film Solar Gard.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque projet fait l&apos;objet d&apos;une analyse approfondie des
                contraintes du bâtiment, afin de sélectionner la solution
                high-tech la plus adaptée et d&apos;en garantir les performances
                dans la durée.
              </p>
            </div>

            <div className="bg-white border border-border p-6 md:p-8">
              <h3 className="font-title font-semibold text-zinc-950 uppercase mb-5 text-sm tracking-wider">
                Notre démarche
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    step: "01",
                    label: "Analyse des contraintes",
                    desc: "Étude du bâtiment, orientation, exposition et objectifs de performance.",
                  },
                  {
                    step: "02",
                    label: "Sélection du film high-tech",
                    desc: "Choix du film Solar Gard le plus adapté parmi les solutions techniques disponibles.",
                  },
                  {
                    step: "03",
                    label: "Pose rigoureuse sur site",
                    desc: "Installation maîtrisée, conforme aux préconisations techniques du fabricant.",
                  },
                  {
                    step: "04",
                    label: "Accompagnement personnalisé",
                    desc: "Contrôle qualité final et conseils techniques pour optimiser la durabilité.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="shrink-0 text-primary font-title font-bold text-xl leading-none">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-950 text-sm block mb-0.5">
                        {item.label}
                      </span>
                      <span className="text-xs text-zinc-600 leading-relaxed">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
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
            Films high-tech pour vitrages à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour l&apos;installation de films high-tech
            pour vitrages de bâtiments. Nous accompagnons professionnels et
            particuliers dans leurs projets nécessitant des solutions techniques
            avancées et durables.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 195 €/m²</span>
            {" · "}Minimum de chantier 690 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Besoin d'une solution high-tech pour vos vitrages ?"
        subtitle="Contactez Solar Home 37 pour une étude personnalisée et un devis adapté à vos exigences techniques."
      />
    </main>
  );
}
