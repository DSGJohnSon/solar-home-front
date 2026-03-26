import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Store, Eye, Megaphone, Layers } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Vitrophanie et stickers vitrine à Tours | Solar Home 37",
  description:
    "Vitrophanie et stickers pour vitrines de magasin à Tours et en Indre-et-Loire. Logos, horaires, messages commerciaux et visibilité durable. Devis gratuit.",
};

const advantages = [
  {
    icon: Eye,
    title: "Attirer l'attention des passants",
    description:
      "Une vitrine bien travaillée capte le regard et génère du trafic. La vitrophanie transforme votre devanture en support de communication visible 24h/24.",
  },
  {
    icon: Store,
    title: "Identifier clairement votre activité",
    description:
      "Logo, nom d'enseigne, horaires — chaque information essentielle est visible dès le premier coup d'œil, même en dehors des heures d'ouverture.",
  },
  {
    icon: Megaphone,
    title: "Communiquer sans travaux",
    description:
      "Les stickers adhésifs s'appliquent directement sur la vitrine sans modifier la façade. Pose rapide, propre, sans interruption de l'activité.",
  },
  {
    icon: Layers,
    title: "Solution durable et économique",
    description:
      "Les adhésifs professionnels résistent aux UV et aux intempéries. Un investissement simple pour une visibilité locale durable.",
  },
];

const benefits = [
  "Visibilité locale renforcée 24h/24",
  "Pose rapide sans travaux",
  "Solutions permanentes ou temporaires",
  "Résistance aux UV et aux intempéries",
  "Rendu propre et sans bulles",
  "Adapté à tous types de commerces",
  "Solutions sur mesure",
];

const vitrographieTypes = [
  {
    label: "Vitrophanie informative",
    description:
      "Horaires, logos, textes, signalétique — toutes les informations essentielles lisibles dès l'extérieur.",
  },
  {
    label: "Vitrophanie décorative",
    description:
      "Visuels graphiques, éléments de design — pour habiller votre vitrine et affirmer votre identité.",
  },
  {
    label: "Vitrophanie partielle",
    description:
      "Habillage ciblé pour préserver la visibilité intérieure tout en communiquant efficacement.",
  },
  {
    label: "Vitrophanie occultante",
    description:
      "Masquer partiellement l'intérieur tout en transmettant un message fort à l'extérieur.",
  },
];

const applications = [
  {
    label: "Boutiques et magasins de détail",
    description:
      "Logo, horaires, promotions saisonnières — valorisez votre devanture et attirez les passants.",
  },
  {
    label: "Restaurants et cafés",
    description:
      "Menu, ambiance visuelle, identité de marque — créez une vitrine appétissante et reconnaissable.",
  },
  {
    label: "Salons, instituts et professions libérales",
    description:
      "Affichez vos services et renforcez votre image professionnelle directement sur votre vitrine.",
  },
  {
    label: "Agences, bureaux et commerces de proximité",
    description:
      "Signalétique claire, messages commerciaux ou visuels d'identité — pour tous les locaux visibles depuis la rue.",
  },
];

const faq = [
  {
    question: "La vitrophanie est-elle visible de loin ?",
    answer:
      "Oui. Les visuels sont conçus pour être lisibles et impactants depuis l'extérieur, même à distance.",
  },
  {
    question: "Peut-on conserver la luminosité intérieure ?",
    answer:
      "Oui. Il existe différentes solutions permettant de communiquer sur la vitrine tout en conservant l'entrée de lumière naturelle.",
  },
  {
    question: "Les stickers pour vitrines sont-ils amovibles ?",
    answer:
      "Oui. Les adhésifs professionnels peuvent être retirés ou remplacés sans détériorer le vitrage lorsqu'ils sont posés correctement.",
  },
  {
    question:
      "Est-ce adapté pour une communication temporaire (promotion, événement) ?",
    answer:
      "Oui. La vitrophanie est parfaitement adaptée aux campagnes temporaires, soldes, ouvertures ou événements commerciaux.",
  },
  {
    question: "Quel est le tarif d'une vitrophanie imprimée ?",
    answer:
      "La pose de vitrophanie imprimée est facturée à partir de 145 €/m² (pose incluse). Un minimum de chantier de 590 € HT est applicable. Devis personnalisé gratuit sur demande.",
  },
];

export default function VitrophaniePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films publicitaires · Vitrophanie
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Vitrophanie et stickers pour vitrines de magasin à Tours
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Attirez l&apos;attention, informez et valorisez votre commerce dès le
            premier regard — 24h/24, sans travaux.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour une vitrophanie"
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
            Pourquoi la vitrophanie est essentielle pour une vitrine de magasin ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Une vitrine est le premier point de contact entre votre commerce et
              vos futurs clients. La vitrophanie permet de transmettre un message
              clair et impactant, même en dehors des horaires d&apos;ouverture.
            </p>
            <p>
              Solar Home 37 accompagne les commerçants, indépendants et
              professionnels dans la conception et la pose de solutions de
              vitrophanie sur mesure : logos, lettrages, informations pratiques
              ou visuels graphiques, posés directement sur les vitrines et
              devantures.
            </p>
            <p>
              Une vitrine bien travaillée devient un véritable support de
              communication, visible 24h/24, au service de votre activité. C&apos;est
              un outil simple, efficace et durable pour améliorer la visibilité
              locale d&apos;un commerce.
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
              Stickers de vitrine : visibilité sans travaux
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

      {/* ── TYPES DE VITROPHANIE ──────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Vitrophanie décorative ou informative : quelle solution choisir ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Solar Home 37 propose différents types de vitrophanie selon vos
              objectifs, pour trouver le bon équilibre entre visibilité
              extérieure, luminosité intérieure et impact visuel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {vitrographieTypes.map((type) => (
              <div
                key={type.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0 sm:nth-last-2:border-b-0"
              >
                <span className="shrink-0 w-2 h-2 bg-primary mt-2" />
                <div>
                  <h3 className="font-semibold text-zinc-950 text-sm mb-1">
                    {type.label}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
              >
                Une solution adaptée à tous les commerces
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Chaque vitrine est différente : surface, exposition, flux de
                passage, image de marque. C&apos;est pourquoi Solar Home 37 propose
                uniquement des solutions de vitrophanie sur mesure, adaptées à
                votre activité et à vos objectifs.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                La pose est rapide, propre et ne perturbe pas l&apos;activité — pour
                une communication qui s&apos;installe sans contrainte.
              </p>
            </div>

            <div className="space-y-0 border border-border">
              {applications.map((app) => (
                <div
                  key={app.label}
                  className="flex items-start gap-4 p-5 border-b border-border last:border-b-0"
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
                La qualité du rendu dépend autant du visuel que de la pose.
                Solar Home 37 assure une installation professionnelle garantissant
                un alignement précis, une adhérence durable et une excellente
                lisibilité dans le temps face aux UV et aux intempéries.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque projet est traité avec soin, de l&apos;analyse de la vitrine
                au choix de l&apos;adhésif, jusqu&apos;aux conseils d&apos;entretien.
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
                    label: "Analyse de la vitrine",
                    desc: "Étude de la surface, de l'exposition et des objectifs de communication.",
                  },
                  {
                    step: "02",
                    label: "Choix du type d'adhésif",
                    desc: "Sélection de la solution adaptée : informatif, décoratif, partiel ou occultant.",
                  },
                  {
                    step: "03",
                    label: "Préparation et pose soignée",
                    desc: "Application précise pour un rendu net, sans bulles et parfaitement aligné.",
                  },
                  {
                    step: "04",
                    label: "Conseils d'entretien",
                    desc: "Recommandations pour préserver la lisibilité et la durabilité des adhésifs.",
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
            Vitrophanie et stickers de vitrines à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, en{" "}
            <strong className="text-zinc-800">Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la pose de vitrophanie et de
            stickers sur vitrines de magasin. Nous accompagnons les
            professionnels dans leurs projets de communication visuelle locale
            et durable.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 145 €/m²</span>
            {" · "}Minimum 590 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Vous souhaitez valoriser votre vitrine ?"
        subtitle="Contactez Solar Home 37 pour une solution de vitrophanie professionnelle, esthétique et adaptée à votre activité."
      />
    </main>
  );
}
