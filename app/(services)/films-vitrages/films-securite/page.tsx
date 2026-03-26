import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Users, Lock, EyeOff } from "lucide-react";
import { ImageHero } from "./image-hero";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Films de sécurité pour vitrages à Tours | Solar Home 37",
  description:
    "Films de sécurité Solar Gard pour vitrages à Tours et 37. Protection des personnes, maintien des éclats, retard à l'effraction. Pose professionnelle, devis gratuit.",
};

const advantages = [
  {
    icon: ShieldCheck,
    title: "Résistance à l'impact",
    description:
      "Le film renforce la tenue mécanique du vitrage. En cas de bris de glace, les fragments sont maintenus en place, limitant les risques de blessures.",
  },
  {
    icon: Users,
    title: "Protection des personnes",
    description:
      "En maintenant les éclats de verre, le film réduit considérablement les risques de coupures et de blessures pour les occupants du bâtiment.",
  },
  {
    icon: Lock,
    title: "Retard à l'effraction",
    description:
      "Les films Solar Gard renforcent la résistance du vitrage et compliquent toute tentative d'intrusion en augmentant le temps nécessaire pour pénétrer à l'intérieur.",
  },
  {
    icon: EyeOff,
    title: "Discrétion totale",
    description:
      "Une fois posé, le film est quasi invisible et ne modifie pas l'esthétique du vitrage — protection maximale sans impact visuel.",
  },
];

const benefits = [
  "Maintien des éclats en cas de bris de verre",
  "Réduction des risques de blessures",
  "Retard aux tentatives d'effraction",
  "Aucune modification des menuiseries",
  "Conservation de la transparence du vitrage",
  "Solution rapide, sans remplacement de vitrage",
  "Films Solar Gard – Saint-Gobain certifiés",
];

const applications = [
  {
    label: "Commerces et vitrines",
    description:
      "Sécurisez vos surfaces vitrées accessibles et réduisez les risques d'intrusion dans vos espaces commerciaux.",
  },
  {
    label: "Bureaux et établissements recevant du public",
    description:
      "Protégez les occupants contre le bris de verre accidentel ou intentionnel dans vos locaux professionnels.",
  },
  {
    label: "Cabinets médicaux et espaces sensibles",
    description:
      "Renforcez la sécurité des vitrages sans altérer l'esthétique de vos espaces d'accueil ou de consultation.",
  },
  {
    label: "Habitations exposées",
    description:
      "Portes d'entrée vitrées, baies accessibles — protégez votre domicile sans modifier l'aspect extérieur.",
  },
];

const faq = [
  {
    question: "Un film de sécurité empêche-t-il le vitrage de casser ?",
    answer:
      "Non, le vitrage peut toujours casser, mais le film de sécurité maintient les éclats en place, limitant fortement les risques de blessures et retardant l'intrusion.",
  },
  {
    question:
      "Le film de sécurité est-il efficace contre les tentatives d'effraction ?",
    answer:
      "Oui. Les films de sécurité Solar Gard – Saint-Gobain renforcent la résistance du vitrage et compliquent les tentatives d'effraction en augmentant le temps nécessaire pour pénétrer à l'intérieur.",
  },
  {
    question: "Le film de sécurité est-il visible sur le vitrage ?",
    answer:
      "Non. Une fois posé, le film de sécurité est quasi invisible et ne modifie pas l'esthétique du vitrage.",
  },
  {
    question: "Les films de sécurité répondent-ils à des normes ?",
    answer:
      "Oui. Les films Solar Gard sont conçus pour répondre aux exigences de sécurité des bâtiments, notamment pour les commerces, bureaux et établissements recevant du public.",
  },
  {
    question: "Quel est le tarif d'un film de sécurité ?",
    answer:
      "La pose d'un film de sécurité est facturée à partir de 155 €/m² (pose incluse). Un minimum de chantier de 590 € HT est applicable. Chaque projet fait l'objet d'un devis personnalisé gratuit.",
  },
];

export default function FilmsSecuritePage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="w-full bg-zinc-50 pt-32 md:pt-40 pb-0">
        <div className="px-4 max-w-2xl mx-auto text-center mb-10">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Films pour vitrages · Sécurité
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Films de sécurité pour vitrages : protection des personnes et des
            biens
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Maintien des éclats, retard à l&apos;effraction, protection des
            occupants — sans remplacement de vitrage ni travaux lourds.
          </p>
          <Link href="/contact" title="Demander un devis pour un film de sécurité">
            <Button variant="default" size="xl">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>

        <div className="px-4 max-w-6xl mx-auto">
          <ImageHero />
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN FILM DE SÉCURITÉ ─────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-5"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            À quoi sert un film de sécurité pour vitrage ?
          </h2>
          <div className="space-y-4 text-zinc-600 leading-relaxed text-sm md:text-base">
            <p>
              Un film de sécurité agit directement sur le vitrage afin d&apos;en
              renforcer la tenue mécanique. En cas de bris de glace, il permet
              de maintenir les fragments de verre en place et de limiter les
              risques pour les occupants.
            </p>
            <p>
              Solar Home 37 accompagne les particuliers et les professionnels
              dans la sécurisation de leurs bâtiments grâce à des solutions
              efficaces, durables et discrètes, sans remplacement de vitrage.
            </p>
            <p>
              Nous travaillons exclusivement avec des films issus du groupe
              Saint-Gobain, via la marque Solar Gard, reconnue pour la qualité
              et la fiabilité de ses films de sécurité. Ce choix garantit des
              produits testés, conformes aux exigences de sécurité et adaptés
              aux environnements résidentiels comme professionnels.
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
              Les avantages des films de sécurité
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
              Les films de sécurité sont adaptés à toutes les surfaces vitrées
              nécessitant un niveau de protection renforcé, quelle que soit leur
              configuration.
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
                Pose professionnelle et fiabilité dans le temps
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                La performance d&apos;un film de sécurité repose sur la qualité du
                produit et sur la précision de la pose. Une application
                imparfaite compromet l&apos;efficacité du maintien des éclats et
                réduit la durabilité du film.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Solar Home 37 assure une installation professionnelle,
                garantissant un maintien optimal du film et un rendu sans
                défaut. Chaque projet fait l&apos;objet d&apos;une étude personnalisée
                afin de sélectionner le film Solar Gard le plus adapté à votre
                vitrage et vos objectifs de sécurité.
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
                    label: "Analyse des vitrages",
                    desc: "Étude de vos surfaces vitrées, accessibilité et niveau de protection requis.",
                  },
                  {
                    step: "02",
                    label: "Sélection du film Solar Gard",
                    desc: "Choix du film de sécurité adapté parmi la gamme Saint-Gobain.",
                  },
                  {
                    step: "03",
                    label: "Pose sur site",
                    desc: "Installation soignée et conforme aux préconisations techniques.",
                  },
                  {
                    step: "04",
                    label: "Contrôle qualité",
                    desc: "Vérification du rendu final et conseils d'entretien et d'utilisation.",
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
            Films de sécurité pour vitrages à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong>, dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour l&apos;installation de films de
            sécurité pour vitrages de bâtiments. Nous accompagnons particuliers,
            professionnels, commerces et collectivités dans leurs projets de
            sécurisation des surfaces vitrées.
          </p>
        </div>
      </section>

      {/* ── TARIFS ────────────────────────────────────────── */}
      <section className="py-8 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-sm text-zinc-600">
            <span className="font-semibold text-zinc-950">À partir de 155 €/m²</span>
            {" · "}Minimum de chantier 590 € HT
          </p>
          <Link href="/tarifs" className="text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0">
            Voir tous les tarifs →
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Vous souhaitez renforcer la sécurité de vos vitrages ?"
        subtitle="Contactez Solar Home 37 pour une étude gratuite et un devis adapté à votre projet de sécurisation."
      />
    </main>
  );
}
