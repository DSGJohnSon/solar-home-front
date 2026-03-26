import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, Wrench, Layers } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Rénovation de mobilier sans travaux à Tours | Cover Styl – Solar Home 37",
  description:
    "Rénovez vos meubles, cuisines et plans de travail sans travaux grâce aux adhésifs décoratifs Cover Styl. Intervention à Tours et en Indre-et-Loire. Devis gratuit.",
};

const advantages = [
  {
    icon: Wrench,
    title: "Aucun démontage ni remplacement",
    description:
      "Les adhésifs Cover Styl se posent directement sur les surfaces existantes — pas de démolition, pas de remplacement coûteux.",
  },
  {
    icon: Clock,
    title: "Intervention rapide",
    description:
      "Le résultat est immédiat. La rénovation s'effectue sans immobilisation prolongée de la cuisine, de la salle de bain ou du mobilier concerné.",
  },
  {
    icon: Sparkles,
    title: "Finitions ultra réalistes",
    description:
      "Bois, marbre, béton, métal, cuir — les films Cover Styl offrent un rendu esthétique premium, indiscernable du matériau original.",
  },
  {
    icon: Layers,
    title: "Solution propre et durable",
    description:
      "Excellente résistance à l'usure, aux rayures et à l'humidité — des revêtements conçus pour le quotidien, aussi bien résidentiel que professionnel.",
  },
];

const benefits = [
  "Aucun démontage ni remplacement",
  "Intervention rapide et propre",
  "Coût réduit par rapport à une rénovation classique",
  "Finitions bois, marbre, béton, métal, cuir",
  "Résistance à l'usure et aux rayures",
  "Films Cover Styl certifiés qualité professionnelle",
  "Solution réversible sans endommager les supports",
];

const elements = [
  {
    label: "Meubles de cuisine et façades",
    description:
      "Rénovez l'ensemble de votre cuisine sans démontage — portes, façades, pieds — pour un rendu neuf en quelques heures.",
  },
  {
    label: "Plans de travail",
    description:
      "Habillage des plans de travail existants avec des finitions résistantes à la chaleur et aux nettoyages fréquents.",
  },
  {
    label: "Meubles de salle de bain",
    description:
      "Rénovation des meubles vasque, colonnes et éléments de rangement avec des films adaptés aux environnements humides.",
  },
  {
    label: "Placards, dressings et rangements",
    description:
      "Transformation des portes et façades de rangements pour harmoniser l'ensemble d'une pièce.",
  },
  {
    label: "Tables, bureaux et mobilier divers",
    description:
      "Relooking de surfaces de bureau, tables ou éléments de mobilier vieillissants sans remplacement.",
  },
  {
    label: "Portes intérieures et éléments décoratifs",
    description:
      "Habillage des portes et encadrements pour une cohérence esthétique dans tout l'espace.",
  },
];

const faq = [
  {
    question: "Peut-on rénover une cuisine sans la démonter ?",
    answer:
      "Oui. Les adhésifs décoratifs Cover Styl permettent de rénover les façades et surfaces sans démontage complet de la cuisine.",
  },
  {
    question: "Les adhésifs résistent-ils à l'humidité et à la chaleur ?",
    answer:
      "Oui. Les films Cover Styl sont conçus pour résister aux contraintes du quotidien, y compris dans les cuisines et salles de bain.",
  },
  {
    question: "La rénovation est-elle réversible ?",
    answer:
      "Oui. Lorsqu'elle est réalisée dans de bonnes conditions, la pose d'adhésifs décoratifs est réversible sans endommager les supports.",
  },
  {
    question: "Quelle est la durée de vie d'un adhésif décoratif ?",
    answer:
      "Les films Cover Styl sont conçus pour offrir une excellente durabilité, avec une tenue fiable dans le temps lorsqu'ils sont correctement posés.",
  },
  {
    question: "Quel est le tarif pour la rénovation de mobilier ?",
    answer:
      "Les prix varient selon le type et le volume de mobilier à traiter, à partir de 490 €. Chaque projet est chiffré sur mesure après visite ou échange. Devis personnalisé gratuit sur demande.",
  },
];

export default function RenovationMobilierPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films décoratifs · Rénovation de mobilier
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Rénovation de mobilier sans travaux grâce aux adhésifs décoratifs
            Cover Styl
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Cuisines, meubles, plans de travail — transformez l&apos;existant sans
            remplacement ni chantier, avec un rendu premium immédiat.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour la rénovation de mobilier sans travaux"
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
            Pourquoi choisir la rénovation de mobilier sans travaux ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              La rénovation de mobilier sans travaux est une solution idéale
              pour moderniser un intérieur sans engager de remplacement coûteux
              ou de chantier lourd. Elle permet de transformer l&apos;existant sans
              démolition, sans nuisance et avec un budget maîtrisé.
            </p>
            <p>
              Solar Home 37 accompagne les particuliers et les professionnels
              dans la transformation de leurs meubles et surfaces existantes
              grâce aux adhésifs décoratifs haut de gamme Cover Styl.
            </p>
            <p>
              Nous travaillons exclusivement avec la marque Cover Styl, reconnue
              pour la qualité, le réalisme et la durabilité de ses revêtements
              adhésifs décoratifs. Cette approche permet de rénover rapidement
              cuisines, meubles, plans de travail ou éléments intérieurs tout en
              conservant une finition élégante et professionnelle.
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
              Les avantages de la rénovation adhésive
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

      {/* ── ÉLÉMENTS RÉNOVABLES ───────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Quels éléments de mobilier peuvent être rénovés ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Les adhésifs décoratifs Cover Styl permettent de rénover de
              nombreuses surfaces. Chaque projet est étudié afin de garantir la
              compatibilité des supports et un rendu optimal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {elements.map((el) => (
              <div
                key={el.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0"
              >
                <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                    {el.label}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {el.description}
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
                Pose professionnelle et rendu durable
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La qualité du rendu dépend directement de la précision de la
                pose. Solar Home 37 assure une installation professionnelle des
                adhésifs décoratifs Cover Styl, garantissant un rendu homogène
                et sans défaut, une adhérence optimale et une durabilité
                renforcée.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Cette solution s&apos;intègre parfaitement dans des projets de
                rénovation légère, d&apos;aménagement intérieur ou d&apos;optimisation de
                l&apos;existant — aussi bien pour les particuliers que pour les
                professionnels.
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
                    label: "Analyse du support",
                    desc: "Vérification de la compatibilité et de l'état des surfaces à rénover.",
                  },
                  {
                    step: "02",
                    label: "Choix des finitions Cover Styl",
                    desc: "Sélection des films selon le style, les contraintes et les usages du mobilier.",
                  },
                  {
                    step: "03",
                    label: "Pose soignée",
                    desc: "Application précise pour un rendu homogène et durable.",
                  },
                  {
                    step: "04",
                    label: "Conseils d'entretien",
                    desc: "Recommandations pour préserver l'aspect et prolonger la durée de vie des films.",
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
            Rénovation de mobilier sans travaux à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, en{" "}
            <strong className="text-zinc-800">Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la rénovation de mobilier sans
            travaux. Nous accompagnons particuliers et professionnels dans leurs
            projets de transformation intérieure grâce aux adhésifs décoratifs
            Cover Styl.
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
        title="Vous souhaitez rénover votre mobilier sans travaux ?"
        subtitle="Contactez Solar Home 37 pour une solution sur mesure, esthétique et durable avec les adhésifs Cover Styl."
      />
    </main>
  );
}
