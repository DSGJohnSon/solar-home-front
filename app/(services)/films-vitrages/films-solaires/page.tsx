import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Thermometer, Eye, Zap, ShieldCheck } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Films solaires pour vitrages à Tours | Réduction chaleur & UV | Solar Home 37",
  description:
    "Films solaires pour vitrages de bâtiments à Tours : réduction de la chaleur, filtration des UV et de l'éblouissement. Installation professionnelle en Indre-et-Loire. Devis gratuit.",
};

const advantages = [
  {
    icon: Thermometer,
    title: "Réduction de la chaleur",
    description:
      "Le film solaire limite significativement l'entrée d'énergie solaire, pour un intérieur plus frais sans climatisation excessive.",
  },
  {
    icon: ShieldCheck,
    title: "Filtration des UV nocifs",
    description:
      "Une grande partie des rayons ultraviolets est bloquée, protégeant mobilier, revêtements et occupants du vieillissement prématuré.",
  },
  {
    icon: Eye,
    title: "Réduction de l'éblouissement",
    description:
      "Finies les réflexions gênantes sur les écrans. Le film filtre la lumière sans sacrifier la luminosité naturelle de l'espace.",
  },
  {
    icon: Zap,
    title: "Économies d'énergie",
    description:
      "En réduisant la chaleur solaire entrante, le film diminue le recours à la climatisation, avec un impact direct sur la consommation.",
  },
];

const benefits = [
  "Conservation de la transparence du vitrage",
  "Amélioration du confort thermique en été",
  "Préservation de la luminosité naturelle",
  "Protection des meubles et revêtements",
  "Réduction de la consommation de climatisation",
  "Solution rapide, sans remplacement de vitrage",
  "Discret — imperceptible de l'extérieur",
];

const applications = [
  {
    label: "Bureaux et open spaces",
    description:
      "Améliorez les conditions de travail en réduisant la chaleur et l'éblouissement sur les postes exposés au soleil.",
  },
  {
    label: "Vérandas et baies vitrées",
    description:
      "Profitez de vos espaces vitrés toute l'année sans subir la chaleur excessive des grandes surfaces vitrées.",
  },
  {
    label: "Locaux commerciaux et vitrines",
    description:
      "Préservez vos produits et améliorez le confort des clients dans vos espaces d'accueil.",
  },
  {
    label: "Habitations exposées",
    description:
      "Façades sud ou ouest — transformez les pièces les plus chaudes en espaces confortables, sans travaux.",
  },
];

export default function FilmsSolairesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        {/* Texte centré, compact */}
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films pour vitrages · Solaires
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Films solaires pour vitrages : moins de chaleur, plus de confort
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Réduction de chaleur, filtration des UV, moins d&apos;éblouissement —
            sans remplacement de vitrage ni travaux.
          </p>
          <Link href="/contact" title="Demander un devis pour un film solaire">
            <Button variant="default" size="xl">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>

        {/* Avant/après — élément central du hero */}
        <div className="px-4 max-w-6xl mx-auto">
          <ImageHero />
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN FILM SOLAIRE ─────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-5"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            Qu&apos;est-ce qu&apos;un film solaire pour vitrage ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Un film solaire est un adhésif technique posé directement sur la
              surface intérieure d&apos;un vitrage existant. Il agit comme un filtre
              sélectif : il laisse passer la lumière visible tout en bloquant
              une partie du rayonnement solaire responsable de la chaleur et des
              UV.
            </p>
            <p>
              Contrairement au remplacement de vitrage, la pose d&apos;un film
              solaire ne nécessite aucun travaux lourds. L&apos;intervention est
              rapide, propre, et sans interruption majeure de l&apos;activité — que
              ce soit en logement ou en local professionnel.
            </p>
            <p>
              Le film s&apos;intègre de façon discrète sur le vitrage, sans altérer
              l&apos;aspect extérieur du bâtiment ni réduire significativement la
              luminosité intérieure.
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
              Les avantages des films solaires
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
              Pour quels vitrages et bâtiments ?
            </h2>
            <p className="text-zinc-600 max-w-2xl text-sm md:text-base leading-relaxed">
              Les films solaires sont particulièrement adaptés aux surfaces
              vitrées très exposées au soleil, quelle que soit leur orientation
              ou leur usage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {applications.map((app) => (
              <div
                key={app.label}
                className="flex items-start gap-4 p-5 border-b border-r-0 sm:even:border-r-0 sm:odd:border-r border-border last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
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
                Pose professionnelle et accompagnement
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La qualité d&apos;un film solaire dépend autant du produit que de sa
                pose. Une application imparfaite génère des bulles, des défauts
                de collage ou des décollements prématurés.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Solar Home 37 assure une installation soignée et méthodique,
                garantissant un rendu impeccable et une durabilité optimale.
                Chaque projet fait l&apos;objet d&apos;une étude personnalisée, afin de
                sélectionner le film le plus adapté à votre vitrage, votre
                exposition et vos objectifs.
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
                    label: "Analyse du besoin",
                    desc: "Étude de vos vitrages, orientation, exposition solaire et objectifs.",
                  },
                  {
                    step: "02",
                    label: "Sélection du film",
                    desc: "Choix du film adapté parmi notre gamme de produits professionnels.",
                  },
                  {
                    step: "03",
                    label: "Pose sur site",
                    desc: "Installation propre et précise, sans interruption de votre activité.",
                  },
                  {
                    step: "04",
                    label: "Contrôle qualité",
                    desc: "Vérification du rendu final et conseils d'entretien.",
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
                question:
                  "Un film solaire réduit-il vraiment la chaleur intérieure ?",
                answer:
                  "Oui. Les films solaires Solar Gard (Saint-Gobain) permettent de rejeter une grande partie de l'énergie solaire responsable de la montée en température. Le confort thermique est amélioré rapidement, notamment sur les vitrages fortement exposés.",
              },
              {
                question: "Un film solaire assombrit-il les vitrages ?",
                answer:
                  "Non, pas nécessairement. Il existe différents niveaux de transparence. Certains films solaires conservent une excellente luminosité naturelle tout en réduisant la chaleur et l'éblouissement.",
              },
              {
                question:
                  "Un film solaire est-il compatible avec un double vitrage ?",
                answer:
                  "Oui. Les films solaires Solar Gard sont conçus pour être compatibles avec les vitrages simples, doubles ou feuilletés, sous réserve d'une analyse préalable du vitrage avant la pose.",
              },
              {
                question: "Quelle est la durée de vie d'un film solaire ?",
                answer:
                  "Les films solaires Solar Gard offrent une excellente tenue dans le temps. Leur durée de vie dépend de l'exposition et du type de vitrage, mais ils sont conçus pour un usage durable en bâtiment.",
              },
              {
                question: "Quel est le tarif d'un film solaire ?",
                answer:
                  "La pose d'un film solaire est facturée à partir de 135 €/m² (pose incluse). Un minimum de chantier de 490 € HT est applicable. Chaque projet fait l'objet d'un devis personnalisé gratuit.",
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
      <section className="py-12 md:py-16 px-4 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Films solaires pour vitrages à Tours et dans le 37
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 installe des films solaires sur vitrages de bâtiments
            résidentiels et professionnels à{" "}
            <strong className="text-zinc-800">Tours</strong>, dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes. Nous nous déplaçons sur site pour une
            étude personnalisée et un devis gratuit.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 135 €/m²</span>
            {" · "}Minimum de chantier 490 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Intéressé par un film solaire pour vos vitrages ?"
        subtitle="Contactez Solar Home 37 pour une étude gratuite et un devis adapté à votre projet."
      />
    </main>
  );
}
