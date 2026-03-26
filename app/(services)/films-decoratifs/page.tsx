import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Sofa, Layers } from "lucide-react";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Adhésifs décoratifs Cover Styl à Tours | Rénovation sans travaux – Solar Home 37",
  description:
    "Rénovation intérieure sans travaux grâce aux adhésifs décoratifs Cover Styl. Murs, meubles, cuisines et espaces professionnels à Tours et en Indre-et-Loire. Devis gratuit.",
};

const benefits = [
  "Rénovation rapide et propre, sans démolition",
  "Large choix de finitions et de textures",
  "Rendu réaliste et élégant (bois, marbre, béton, métal…)",
  "Résistance aux usages du quotidien",
  "Facilité d'entretien",
  "Solution réversible si nécessaire",
];

const categories = [
  {
    icon: Sparkles,
    title: "Adhésifs décoratifs Cover Styl",
    description:
      "Solution décorative haut de gamme pour transformer les surfaces intérieures avec des finitions réalistes et modernes.",
    href: "/films-decoratifs/adhesifs-decoratifs",
    image: "/images/services-solar-home-decoratifs.webp",
    targets: [
      "Murs, portes et cloisons",
      "Surfaces planes et structurées",
      "Résidentiel et professionnel",
    ],
  },
  {
    icon: Sofa,
    title: "Rénovation de mobilier",
    description:
      "Modernisation de meubles existants : cuisines, dressings, placards, bureaux, comptoirs et meubles professionnels.",
    href: "/films-decoratifs/renovation-mobilier",
    image: "/images/services-solar-home-vitrages.webp",
    targets: [
      "Cuisines et dressings",
      "Meubles de bureau et comptoirs",
      "Plans de travail",
    ],
  },
  {
    icon: Layers,
    title: "Décoration intérieure",
    description:
      "Transformation visuelle de murs, portes, cloisons et surfaces décoratives sans démolition ni gros chantier.",
    href: "/films-decoratifs/decoration-interieure",
    image: "/images/services-solar-home-vitrages-2.webp",
    targets: [
      "Murs et cloisons",
      "Portes et fenêtres intérieures",
      "Espaces de vie et de travail",
    ],
  },
];

const spaceTypes = [
  "Maisons et appartements",
  "Cuisines et salles de bain (hors zones immergées)",
  "Bureaux et espaces de travail",
  "Commerces et vitrines",
  "Hôtels, restaurants et espaces professionnels",
  "Salles d'attente et lieux recevant du public",
];

export default function FilmsDecoratifPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80svh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src="/images/services-solar-home-decoratifs.webp"
          alt="Adhésifs décoratifs Cover Styl par Solar Home 37"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-zinc-950/60" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-36 pb-20 max-w-4xl mx-auto">
          <h1
            className="font-title font-bold text-white text-balance mb-5"
            style={{
              fontSize: "clamp(28px, 5vw, 60px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Adhésifs décoratifs Cover Styl : rénovation intérieure sans travaux
          </h1>

          <p
            className="text-zinc-300 mb-10 max-w-2xl"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)", lineHeight: 1.7 }}
          >
            Solar Home 37 est spécialisé dans la pose d&apos;adhésifs décoratifs
            haut de gamme pour la rénovation et la transformation des surfaces
            intérieures. Modernisez un espace, rénover des surfaces existantes
            — sans travaux lourds, sans démolition, avec un impact immédiat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" title="Demander un devis gratuit Solar Home 37">
              <Button variant="default" size="xl" className="cursor-pointer">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link
              href="#solutions"
              title="Découvrir toutes nos solutions décoratives"
            >
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/60 hover:text-white cursor-pointer"
              >
                Découvrir les solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── POURQUOI ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Pourquoi choisir des adhésifs décoratifs plutôt que des travaux ?
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed text-sm md:text-base">
                Les adhésifs décoratifs constituent une alternative moderne et
                intelligente aux solutions traditionnelles de rénovation
                intérieure. Contrairement aux travaux classiques, leur pose ne
                nécessite ni poussière, ni immobilisation longue des espaces, ni
                remplacement des matériaux existants.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 w-5 h-5 bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-zinc-700 text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-4/3 w-full overflow-hidden">
              <Image
                src="/images/services-solar-home-decoratifs.webp"
                alt="Adhésifs décoratifs Cover Styl par Solar Home 37"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS SOLUTIONS ─────────────────────────────────── */}
      <section id="solutions" className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="block w-12 h-1 bg-primary mx-auto mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
            >
              Nos solutions d&apos;adhésifs décoratifs
            </h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base">
              Solar Home 37 propose plusieurs solutions adaptées à différents
              usages. Chaque solution dispose d&apos;une page dédiée afin de vous
              apporter une information claire et détaillée.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  title={`${cat.title} — Solar Home 37`}
                  className="group block bg-white border border-border hover:border-primary/40 transition-colors duration-300 overflow-hidden"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-white text-lg md:text-xl font-bold font-title leading-tight">
                        {cat.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {cat.targets.map((t) => (
                        <li
                          key={t}
                          className="text-xs text-zinc-500 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span>Découvrir</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ESPACES + ACCOMPAGNEMENT ───────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Pour quels types d&apos;espaces ?
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-sm md:text-base">
                Les adhésifs décoratifs posés par Solar Home 37 s&apos;adaptent à de
                nombreux environnements. Chaque espace possède ses contraintes
                spécifiques, prises en compte lors de l&apos;étude du projet.
              </p>
              <ul>
                {spaceTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-3 py-3 border-b border-border last:border-0"
                  >
                    <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span className="text-zinc-700 text-sm">{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Pose professionnelle et accompagnement sur mesure
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La qualité d&apos;un adhésif décoratif repose autant sur le produit
                que sur la précision de la pose. Solar Home 37 assure une
                installation professionnelle, réalisée avec méthode, soin et
                exigence.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque projet comprend l&apos;analyse des surfaces existantes, le
                choix du revêtement Cover Styl adapté, une pose précise et
                soignée, ainsi que des conseils d&apos;entretien et d&apos;usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO LOCAL ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 26px)" }}
          >
            Pose d&apos;adhésifs décoratifs à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong> et dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la pose d&apos;adhésifs décoratifs
            Cover Styl. Nous accompagnons particuliers et professionnels dans
            leurs projets de rénovation intérieure et de valorisation des
            espaces, avec une solution efficace, durable et sans travaux lourds.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Besoin de rénover ou moderniser vos espaces sans travaux ?"
        subtitle="Solar Home 37 vous accompagne avec des solutions d'adhésifs décoratifs Cover Styl adaptées à votre projet."
      />
    </main>
  );
}
