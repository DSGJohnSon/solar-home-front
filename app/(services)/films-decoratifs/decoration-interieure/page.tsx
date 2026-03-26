import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, Layers, Home } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Décoration murale sans travaux à Tours | Adhésifs Cover Styl – Solar Home 37",
  description:
    "Décorez murs, portes et surfaces intérieures sans travaux grâce aux adhésifs Cover Styl. Solution esthétique et durable à Tours et en Indre-et-Loire. Devis gratuit.",
};

const advantages = [
  {
    icon: Clock,
    title: "Pose rapide et propre",
    description:
      "Aucun temps de séchage, aucune nuisance — la transformation est immédiate dès la fin de l'intervention.",
  },
  {
    icon: Sparkles,
    title: "Résultat esthétique durable",
    description:
      "Les films Cover Styl offrent un rendu visuel haut de gamme, réaliste et élégant, parfaitement intégré aux intérieurs modernes.",
  },
  {
    icon: Layers,
    title: "Large choix de finitions",
    description:
      "Bois naturels, béton, marbre, pierre, effets métalliques — une sélection pensée pour personnaliser chaque espace selon le style recherché.",
  },
  {
    icon: Home,
    title: "Budget maîtrisé",
    description:
      "Une alternative moderne à la peinture ou au papier peint, sans les contraintes et les coûts d'une rénovation traditionnelle.",
  },
];

const benefits = [
  "Pose rapide, sans temps de séchage",
  "Transformation immédiate des espaces",
  "Budget maîtrisé",
  "Résultat esthétique durable",
  "Adhésifs Cover Styl certifiés qualité professionnelle",
  "Compatible résidentiel et professionnel",
  "Aucune modification structurelle",
];

const surfaces = [
  {
    label: "Murs intérieurs",
    description:
      "Habillage complet ou partiel pour renouveler l'ambiance d'une pièce sans peinture ni papier peint.",
  },
  {
    label: "Portes et huisseries",
    description:
      "Transformation de l'aspect des portes intérieures et de leurs encadrements.",
  },
  {
    label: "Cloisons et séparations",
    description:
      "Personnalisation des cloisons vitrées ou pleines pour structurer les espaces.",
  },
  {
    label: "Habillages muraux et éléments décoratifs",
    description:
      "Revêtement de surfaces fixes, niches ou éléments architecturaux pour un rendu cohérent.",
  },
];

const finitions = [
  {
    label: "Effets bois naturels",
    description: "Chêne, noyer, pin — des rendus chaleureux adaptés aux intérieurs modernes ou classiques.",
  },
  {
    label: "Rendus béton ou minéral",
    description: "Béton ciré, pierre, ardoise — pour un style contemporain et épuré.",
  },
  {
    label: "Finitions marbre ou pierre",
    description: "Carrare, travertin, granit — l'élégance du naturel sans les contraintes du matériau.",
  },
  {
    label: "Effets métalliques et textures design",
    description: "Acier, cuivre, or brossé — pour des espaces distinctifs et modernes.",
  },
];

const faq = [
  {
    question: "Les adhésifs décoratifs peuvent-ils remplacer la peinture ?",
    answer:
      "Oui. Les adhésifs Cover Styl permettent de recouvrir murs et surfaces intérieures avec un rendu esthétique immédiat, sans temps de séchage ni odeur.",
  },
  {
    question: "Peut-on poser un adhésif décoratif sur un mur déjà peint ?",
    answer:
      "Oui, sous réserve que le support soit sain, propre et lisse. Une analyse préalable permet de valider la compatibilité.",
  },
  {
    question: "Les adhésifs sont-ils faciles à entretenir ?",
    answer:
      "Oui. Les films Cover Styl sont conçus pour être résistants et faciles d'entretien avec des produits classiques non abrasifs.",
  },
  {
    question: "La décoration murale adhésive est-elle durable ?",
    answer:
      "Oui. Lorsqu'elle est posée professionnellement, la tenue dans le temps est excellente, aussi bien en habitation qu'en milieu professionnel.",
  },
  {
    question: "Quel est le tarif de la décoration intérieure en adhésif ?",
    answer:
      "La pose de films décoratifs Cover Styl est facturée à partir de 145 €/m² (pose incluse). Un minimum de chantier de 490 € HT est applicable. Devis personnalisé gratuit sur demande.",
  },
];

export default function DecorationInterieurePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films décoratifs · Décoration intérieure
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Décoration murale et surfaces intérieures sans travaux grâce aux
            adhésifs Cover Styl
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Transformez murs, portes et surfaces intérieures rapidement, sans
            peinture, sans démolition et sans nuisance.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour une décoration murale sans travaux"
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
            Pourquoi choisir une décoration murale sans travaux ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              La décoration murale sans travaux permet de transformer un
              intérieur rapidement, sans peinture, sans démolition et sans
              nuisance. C&apos;est une alternative moderne aux solutions
              traditionnelles comme la peinture, le papier peint ou les
              revêtements lourds.
            </p>
            <p>
              Solar Home 37 propose des solutions de décoration intérieure haut
              de gamme grâce aux adhésifs décoratifs Cover Styl, spécialement
              conçus pour habiller murs et surfaces intérieures avec des rendus
              esthétiques réalistes et durables.
            </p>
            <p>
              Nous travaillons exclusivement avec la marque Cover Styl, reconnue
              pour la qualité professionnelle de ses films décoratifs et leur
              excellente tenue dans le temps, aussi bien en environnement
              résidentiel que professionnel.
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
              Les avantages de la décoration murale sans travaux
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

      {/* ── SURFACES ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Quelles surfaces intérieures peuvent être décorées ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Les adhésifs décoratifs Cover Styl s&apos;adaptent à de nombreuses
              surfaces intérieures. Chaque support est analysé afin d&apos;assurer
              une compatibilité optimale et un rendu homogène.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {surfaces.map((s) => (
              <div
                key={s.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0 sm:nth-last-2:border-b-0"
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
      </section>

      {/* ── FINITIONS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Un large choix de finitions décoratives Cover Styl
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Solar Home 37 propose une large sélection de films décoratifs
                Cover Styl permettant de personnaliser chaque espace selon le
                style recherché — des rendus visuels haut de gamme, réalistes et
                élégants.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Ces solutions s&apos;adaptent aussi bien aux particuliers souhaitant
                personnaliser leur intérieur qu&apos;aux professionnels — bureaux,
                commerces, hôtels et restaurants.
              </p>
            </div>

            <div className="border border-border">
              {finitions.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-4 p-5 border-b border-border last:border-b-0"
                >
                  <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                      {f.label}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {f.description}
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
                Pose professionnelle et rendu soigné
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La réussite d&apos;un projet de décoration murale repose sur la
                précision de la pose. Solar Home 37 assure une installation
                professionnelle des adhésifs décoratifs Cover Styl, garantissant
                un rendu net et uniforme, une parfaite adhérence et une
                durabilité optimale.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque intervention comprend l&apos;analyse des surfaces, le choix
                des films adaptés, la pose soignée et des conseils d&apos;entretien
                pour préserver le résultat dans la durée.
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
                    label: "Analyse des surfaces",
                    desc: "Vérification de la compatibilité du support et préparation si nécessaire.",
                  },
                  {
                    step: "02",
                    label: "Choix des films Cover Styl",
                    desc: "Sélection des finitions selon le style et les contraintes de chaque espace.",
                  },
                  {
                    step: "03",
                    label: "Pose soignée",
                    desc: "Application précise pour un rendu sans bulles ni défauts visuels.",
                  },
                  {
                    step: "04",
                    label: "Conseils d'entretien",
                    desc: "Recommandations pour préserver l'aspect et la durabilité des films.",
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
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
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
      <section className="py-12 md:py-16 px-4 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Décoration murale sans travaux à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, dans{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            les secteurs limitrophes pour la décoration murale et l&apos;habillage de
            surfaces intérieures sans travaux. Nous accompagnons particuliers et
            professionnels dans leurs projets de transformation et de
            valorisation des espaces.
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
        title="Vous souhaitez transformer vos murs sans travaux ?"
        subtitle="Contactez Solar Home 37 pour une étude gratuite et des solutions décoratives Cover Styl sur mesure."
      />
    </main>
  );
}
