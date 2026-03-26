import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, Paintbrush, Building2 } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Adhésifs décoratifs pour espaces professionnels à Tours | Solar Home 37",
  description:
    "Adhésifs décoratifs Cover Styl pour bureaux, commerces et locaux professionnels à Tours. Rénovation esthétique sans travaux ni interruption d'activité. Devis gratuit.",
};

const advantages = [
  {
    icon: Clock,
    title: "Aucun arrêt d'activité",
    description:
      "L'intervention est planifiée pour s'adapter à vos contraintes professionnelles. Pas de fermeture, pas d'immobilisation prolongée des espaces.",
  },
  {
    icon: Sparkles,
    title: "Rendu haut de gamme",
    description:
      "Les adhésifs Cover Styl offrent des finitions réalistes et élégantes — bois, béton, métal, marbre — adaptées à l'image de marque de chaque espace.",
  },
  {
    icon: Paintbrush,
    title: "Solution durable pour usage intensif",
    description:
      "Conçus pour les environnements professionnels à forte fréquentation, ces revêtements résistent à l'usure et aux nettoyages fréquents.",
  },
  {
    icon: Building2,
    title: "Budget maîtrisé",
    description:
      "Une alternative efficace aux travaux de rénovation classiques : modernisation rapide, propre et à coût optimisé.",
  },
];

const benefits = [
  "Aucun arrêt d'activité",
  "Intervention rapide et propre",
  "Budget maîtrisé",
  "Rendu haut de gamme",
  "Solution durable pour usage intensif",
  "Adhésifs Cover Styl certifiés usage professionnel",
  "Aucune modification structurelle",
];

const spaces = [
  {
    label: "Bureaux et open spaces",
    description:
      "Modernisez vos espaces de travail et valorisez l'image de votre entreprise sans perturber l'activité des équipes.",
  },
  {
    label: "Commerces et boutiques",
    description:
      "Renouvelez l'esthétique de votre point de vente rapidement, entre deux saisons ou sans fermeture prolongée.",
  },
  {
    label: "Restaurants, hôtels et cafés",
    description:
      "Transformez vos espaces d'accueil, comptoirs et cloisons pour offrir une nouvelle expérience à vos clients.",
  },
  {
    label: "Cabinets médicaux et professions libérales",
    description:
      "Rénovez vos espaces d'accueil et de consultation avec des matériaux discrets et faciles d'entretien.",
  },
];

const surfaces = [
  {
    label: "Murs et cloisons",
    description:
      "Habillage complet ou partiel des surfaces murales pour renouveler l'ambiance d'un espace.",
  },
  {
    label: "Comptoirs et accueils clients",
    description:
      "Rénovation des façades et plans de travail pour un rendu soigné et durable.",
  },
  {
    label: "Meubles et éléments de rangement",
    description:
      "Transformation des mobiliers professionnels sans remplacement.",
  },
  {
    label: "Portes et éléments architecturaux",
    description:
      "Habillage des portes, encadrements et surfaces décoratives fixes.",
  },
];

export default function AdhesifsDecoratifsPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films décoratifs · Adhésifs pour professionnels
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Adhésifs décoratifs pour espaces professionnels : rénovation et
            design sans travaux
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Modernisez, rénovez et valorisez vos locaux professionnels sans
            travaux lourds ni interruption d&apos;activité.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour des adhésifs décoratifs professionnels"
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
            Pourquoi utiliser des adhésifs décoratifs dans un espace
            professionnel ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Dans un contexte professionnel, l&apos;image des locaux joue un rôle
              essentiel. Les adhésifs décoratifs permettent d&apos;agir rapidement
              sur l&apos;esthétique et l&apos;ambiance, sans immobilisation prolongée.
            </p>
            <p>
              Solar Home 37 accompagne les professionnels dans leurs projets de
              transformation intérieure grâce aux revêtements décoratifs haut de
              gamme Cover Styl, spécialement conçus pour les environnements à
              usage intensif.
            </p>
            <p>
              Nous travaillons exclusivement avec la marque Cover Styl, reconnue
              pour la qualité professionnelle, la durabilité et le réalisme de
              ses adhésifs décoratifs. Chaque projet est étudié afin de
              respecter l&apos;identité visuelle et l&apos;usage des lieux.
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
              Les avantages pour les espaces professionnels
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

      {/* ── ESPACES CONCERNÉS ─────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Quels types d&apos;espaces professionnels peuvent être rénovés ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Les adhésifs décoratifs Cover Styl s&apos;adaptent à de nombreux
              environnements professionnels, quel que soit le secteur d&apos;activité.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {spaces.map((space) => (
              <div
                key={space.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0 sm:nth-last-2:border-b-0"
              >
                <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                    {space.label}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SURFACES ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Habillage de surfaces professionnelles sans remplacement
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Les films décoratifs Cover Styl permettent de rénover et
                d&apos;habiller de nombreuses surfaces existantes, sans remplacement
                ni démontage. Cette approche conserve l&apos;existant tout en offrant
                un aspect neuf et moderne.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Solar Home 37 propose une sélection de finitions parfaitement
                adaptées aux contraintes professionnelles : effets bois, béton,
                métal ou textures design selon l&apos;image de marque.
              </p>
            </div>

            <div className="border border-border">
              {surfaces.map((s) => (
                <div
                  key={s.label}
                  className="flex items-start gap-4 p-5 border-b border-border last:border-b-0"
                >
                  <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                      {s.label}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POSE & ACCOMPAGNEMENT ─────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Pose professionnelle et respect des contraintes d&apos;activité
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La pose en milieu professionnel nécessite organisation, précision
                et discrétion. Solar Home 37 assure une installation
                professionnelle des adhésifs décoratifs Cover Styl, avec une
                planification adaptée à votre activité et un rendu homogène sans
                défaut.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque projet est accompagné d&apos;un suivi sur mesure, du choix des
                finitions jusqu&apos;aux conseils d&apos;entretien professionnel.
              </p>
            </div>

            <div className="bg-zinc-50 border border-border p-6 md:p-8">
              <h3 className="font-title font-semibold text-zinc-950 uppercase mb-5 text-sm tracking-wider">
                Notre démarche
              </h3>
              <ol className="space-y-4">
                {[
                  {
                    step: "01",
                    label: "Analyse des contraintes du site",
                    desc: "Étude des surfaces, des usages et des exigences spécifiques du lieu professionnel.",
                  },
                  {
                    step: "02",
                    label: "Choix des finitions Cover Styl",
                    desc: "Sélection des adhésifs adaptés à l'image de marque et aux contraintes d'usage intensif.",
                  },
                  {
                    step: "03",
                    label: "Pose soignée sur site",
                    desc: "Installation rapide, propre et sans interruption prolongée de l'activité.",
                  },
                  {
                    step: "04",
                    label: "Conseils d'entretien professionnel",
                    desc: "Recommandations pour maintenir l'aspect et la durabilité des revêtements.",
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
            {[
              {
                question: "Peut-on rénover un commerce sans fermer au public ?",
                answer:
                  "Oui. Les adhésifs décoratifs permettent une intervention rapide, souvent sans nécessité de fermer ou d'interrompre l'activité.",
              },
              {
                question:
                  "Les adhésifs sont-ils résistants pour un usage professionnel ?",
                answer:
                  "Oui. Les films Cover Styl sont conçus pour résister à l'usure, aux nettoyages fréquents et aux environnements très sollicités.",
              },
              {
                question:
                  "Les adhésifs décoratifs respectent-ils l'image de marque ?",
                answer:
                  "Oui. Le large choix de finitions permet d'adapter parfaitement le rendu à l'identité visuelle et au positionnement de l'entreprise.",
              },
              {
                question:
                  "Cette solution est-elle adaptée aux locaux recevant du public ?",
                answer:
                  "Oui. Les adhésifs décoratifs Cover Styl sont largement utilisés dans les ERP, bureaux, commerces et espaces professionnels.",
              },
              {
                question: "Quel est le tarif des adhésifs décoratifs Cover Styl ?",
                answer:
                  "La pose d'adhésifs décoratifs Cover Styl est facturée à partir de 145 €/m² (pose incluse). Un minimum de chantier de 490 € HT est applicable. Chaque projet fait l'objet d'un devis personnalisé gratuit.",
              },
            ].map((item) => (
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
            Adhésifs décoratifs pour espaces professionnels à Tours et en
            Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, en{" "}
            <strong className="text-zinc-800">Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la rénovation et la décoration
            d&apos;espaces professionnels sans travaux. Nous accompagnons entreprises,
            commerçants et indépendants dans leurs projets de valorisation des
            locaux.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 145 €/m²</span>
            {" · "}Minimum de chantier 490 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Vous souhaitez moderniser vos locaux professionnels sans travaux ?"
        subtitle="Contactez Solar Home 37 pour une étude gratuite et des solutions décoratives Cover Styl adaptées à votre image de marque."
      />
    </main>
  );
}
