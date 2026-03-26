import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Palette, Eye, Building2, Layers } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Films design & intimité pour vitrages à Tours | Solar Home 37",
  description:
    "Installation de films design et intimité Solar Gard pour vitrages à Tours. Préservez la confidentialité et valorisez vos espaces sans travaux. Devis gratuit.",
};

const advantages = [
  {
    icon: Eye,
    title: "Confidentialité préservée",
    description:
      "Les films intimité protègent efficacement les espaces des regards extérieurs tout en conservant la luminosité naturelle — sans stores ni rideaux.",
  },
  {
    icon: Palette,
    title: "Valorisation esthétique",
    description:
      "Les films design apportent une dimension visuelle soignée aux surfaces vitrées : effets dépolis, motifs, bandes ou aplats — pour des espaces distingués.",
  },
  {
    icon: Building2,
    title: "Image professionnelle renforcée",
    description:
      "Dans les bureaux, salles de réunion ou vitrines, les films design structurent visuellement les espaces et renforcent l'identité du lieu.",
  },
  {
    icon: Layers,
    title: "Solution non invasive",
    description:
      "Les films s'intègrent directement sur les vitrages existants, sans modification des menuiseries — une alternative élégante aux cloisons opaques.",
  },
];

const benefits = [
  "Confidentialité sans perte de luminosité",
  "Large choix de niveaux d'occultation",
  "Films dépolis, occultants ou décoratifs",
  "Aucune modification des menuiseries",
  "Films amovibles sans détériorer le vitrage",
  "Films Solar Gard – Saint-Gobain certifiés",
  "Adapté résidentiel et professionnel",
];

const filmTypes = [
  {
    label: "Films dépolis",
    description:
      "Diffusion de la lumière tout en masquant la visibilité à travers le vitrage.",
  },
  {
    label: "Films occultants",
    description:
      "Protection renforcée contre les regards extérieurs pour les espaces nécessitant une confidentialité totale.",
  },
  {
    label: "Films décoratifs",
    description:
      "Motifs, bandes, effets graphiques — pour personnaliser vos surfaces vitrées selon votre identité.",
  },
  {
    label: "Films d'intimité partielle",
    description:
      "Zones de confidentialité ciblées, permettant de préserver la vue sur certaines parties du vitrage.",
  },
];

const applications = [
  {
    label: "Bureaux et open spaces",
    description:
      "Structurez visuellement vos espaces de travail et préservez la concentration des équipes tout en conservant la sensation d'ouverture.",
  },
  {
    label: "Salles de réunion et cloisons vitrées",
    description:
      "Créez des zones de confidentialité ciblées dans vos salles de réunion, sans recourir aux stores ou aux cloisons opaques.",
  },
  {
    label: "Commerces et vitrines",
    description:
      "Personnalisez l'aspect de vos vitrines, gérez la visibilité de vos espaces et créez un effet visuel distinctif pour votre enseigne.",
  },
  {
    label: "Habitations et espaces résidentiels",
    description:
      "Protégez votre vie privée face au vis-à-vis sans sacrifier la lumière naturelle dans vos pièces à vivre.",
  },
];

const faq = [
  {
    question: "Les films design bloquent-ils complètement la lumière ?",
    answer:
      "Non. La majorité des films design permettent de préserver la luminosité tout en réduisant la visibilité à travers le vitrage, selon le niveau d'opacité choisi.",
  },
  {
    question: "Peut-on choisir différents niveaux d'intimité ?",
    answer:
      "Oui. Les films design Solar Gard proposent différents effets : dépoli, occultant partiel, motifs ou bandes de confidentialité, permettant un niveau d'intimité sur mesure.",
  },
  {
    question: "Les films design sont-ils amovibles ?",
    answer:
      "Oui. Lorsqu'ils sont posés dans de bonnes conditions, les films design peuvent être retirés sans détériorer le vitrage.",
  },
  {
    question: "Ces films conviennent-ils aux espaces professionnels ?",
    answer:
      "Oui. Les films design sont très utilisés dans les bureaux, salles de réunion, vitrines et locaux professionnels, pour structurer les espaces et préserver la confidentialité.",
  },
  {
    question: "Quel est le tarif d'un film design ou dépoli ?",
    answer:
      "Les films design et intimité sont facturés à partir de 125 €/m² (pose incluse). Un minimum de chantier de 390 € HT est applicable. Devis personnalisé gratuit sur demande.",
  },
];

export default function FilmsDesignEtIntimitePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films pour vitrages · Design & Intimité
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Films design et films intimité pour vitrages : esthétique et
            confidentialité
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Confidentialité, valorisation esthétique, structuration des espaces
            — sans travaux, sans modification des menuiseries.
          </p>
          <Link
            href="/contact"
            title="Demander un devis pour un film design ou intimité"
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

      {/* ── À QUOI SERVENT LES FILMS DESIGN ET INTIMITÉ ───── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-5"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            À quoi servent les films design et intimité ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Les films design et films intimité pour vitrages permettent de
              préserver la confidentialité des espaces tout en apportant une
              dimension esthétique aux surfaces vitrées. Ils répondent à
              plusieurs besoins essentiels dans les bâtiments modernes, sans
              avoir recours à des solutions lourdes ou définitives.
            </p>
            <p>
              Solar Home 37 propose des solutions décoratives et fonctionnelles
              adaptées aussi bien aux environnements résidentiels qu&apos;aux espaces
              professionnels. Nous travaillons exclusivement avec des films issus
              du groupe Saint-Gobain, via la marque Solar Gard, reconnue pour la
              qualité, la durabilité et la performance de ses films pour vitrages.
            </p>
            <p>
              Ces films s&apos;intègrent directement sur les vitrages existants, sans
              modification des menuiseries — une alternative élégante aux stores,
              rideaux ou parois opaques, tout en conservant une sensation
              d&apos;ouverture.
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
              Les avantages des films design et intimité
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

      {/* ── TYPES DE FILMS ────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-6" />
            <h2
              className="font-title font-bold uppercase text-zinc-950 mb-4"
              style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
            >
              Différents styles et niveaux d&apos;occultation
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Solar Home 37 propose une sélection de films design Solar Gard,
              permettant de répondre à chaque besoin esthétique et fonctionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {filmTypes.map((type) => (
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
                Solutions adaptées aux espaces professionnels et privés
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Les films design et intimité Solar Gard by Saint-Gobain sont
                particulièrement adaptés aux espaces nécessitant un équilibre
                précis entre lumière naturelle et confidentialité.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Ils offrent une alternative élégante aux stores, rideaux ou
                parois opaques, tout en conservant une sensation d&apos;ouverture et
                en valorisant l&apos;esthétique générale du lieu.
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
                La pose des films design et intimité est un élément clé du
                résultat final. Une application imparfaite génère des bulles,
                des défauts de collage ou un rendu inégal qui compromettent
                l&apos;effet visuel recherché.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Solar Home 37 assure une installation précise et maîtrisée,
                garantissant un rendu net, sans bulles ni défauts visuels. En
                travaillant exclusivement avec Solar Gard – Saint-Gobain, nous
                garantissons une excellente tenue dans le temps et une finition
                homogène et professionnelle.
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
                    label: "Analyse des vitrages et des usages",
                    desc: "Étude de vos besoins en termes de confidentialité, d'esthétique et des contraintes du vitrage.",
                  },
                  {
                    step: "02",
                    label: "Choix du film adapté",
                    desc: "Sélection du film design Solar Gard selon le niveau d'occultation et le rendu souhaité.",
                  },
                  {
                    step: "03",
                    label: "Pose professionnelle",
                    desc: "Application soignée, sans bulles ni défauts — pour un rendu impeccable dès le premier jour.",
                  },
                  {
                    step: "04",
                    label: "Conseils d'entretien",
                    desc: "Recommandations pour préserver la qualité du film et prolonger sa durée de vie.",
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
            Films design et films intimité pour vitrages à Tours et en
            Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la pose de films design et films
            intimité sur vitrages de bâtiments. Nous accompagnons particuliers
            et professionnels dans leurs projets de confidentialité et de
            valorisation esthétique des espaces.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 125 €/m²</span>
            {" · "}Minimum de chantier 390 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Besoin de préserver l'intimité ou de valoriser vos vitrages ?"
        subtitle="Contactez Solar Home 37 pour une étude gratuite et un devis adapté à votre projet de film design ou intimité."
      />
    </main>
  );
}
