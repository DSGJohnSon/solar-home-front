import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sun, Shield, Sparkles, Cpu } from "lucide-react";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Films pour vitrages de bâtiments à Tours | Solar Home 37",
  description:
    "Installation de films pour vitrages à Tours et en Indre-et-Loire : solaire, sécurité, design et high-tech. Améliorez confort, sécurité et esthétique. Devis gratuit.",
};

const benefits = [
  "Réduction significative de la chaleur intérieure",
  "Filtration des rayons UV nocifs",
  "Amélioration du confort thermique et visuel",
  "Renforcement de la sécurité des vitrages",
  "Préservation de la luminosité naturelle",
  "Solution discrète, esthétique et sans nuisance",
];

const categories = [
  {
    icon: Sun,
    title: "Films solaires",
    description:
      "Limitez l'entrée de chaleur, réduisez l'éblouissement et filtrez les UV tout en conservant la transparence du vitrage.",
    href: "/films-vitrages/films-solaires",
    image: "/images/services-solar-home-vitrages.webp",
    targets: [
      "Bureaux et locaux professionnels",
      "Vérandas et baies vitrées",
      "Habitations exposées au soleil",
    ],
  },
  {
    icon: Shield,
    title: "Films de sécurité",
    description:
      "Renforcez la résistance du vitrage en cas de choc ou de tentative d'effraction, en maintenant les éclats en place.",
    href: "/films-vitrages/films-securite",
    image: "/images/services-solar-home-vitrages-2.webp",
    targets: [
      "Commerces et vitrines",
      "Bureaux et établissements recevant du public",
      "Habitations souhaitant renforcer leur sécurité",
    ],
  },
  {
    icon: Sparkles,
    title: "Films design & intimité",
    description:
      "Solution esthétique pour préserver l'intimité ou structurer visuellement vos surfaces vitrées : dépoli, occultant, motifs.",
    href: "/films-vitrages/films-design",
    image: "/images/services-solar-home-decoratifs.webp",
    targets: [
      "Cloisons vitrées",
      "Bureaux et salles de réunion",
      "Vitrines et espaces professionnels",
    ],
  },
  {
    icon: Cpu,
    title: "Films high-tech",
    description:
      "Solutions techniques avancées combinant protection thermique renforcée, contrôle solaire optimisé et durabilité accrue.",
    href: "/films-vitrages/films-high-tech",
    image: "/images/services-solar-home-vitrophanie.webp",
    targets: [
      "Projets à hautes performances",
      "Solutions techniques précises",
      "Intégration discrète et efficace",
    ],
  },
];

const buildingTypes = [
  "Maisons et appartements",
  "Bureaux et espaces de travail",
  "Commerces et vitrines",
  "Locaux professionnels et industriels",
  "Salles de réunion et espaces recevant du public",
];

export default function FilmsVitragesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80svh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src="/images/services-solar-home-vitrages-2.webp"
          alt="Films pour vitrages de bâtiments par Solar Home 37"
          fill
          className="object-cover opacity-35"
          priority
        />
        {/* Bottom gradient */}
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
            Films pour vitrages de bâtiments : protection, confort et
            performance
          </h1>

          <p
            className="text-zinc-300 mb-10 max-w-2xl"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)", lineHeight: 1.7 }}
          >
            Solar Home 37 est spécialisé dans la pose de films pour vitrages de
            bâtiments, pour particuliers et professionnels. Confort thermique,
            sécurité, intimité, esthétique — sans remplacement ni travaux
            lourds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" title="Demander un devis gratuit Solar Home 37">
              <Button variant="default" size="xl" className={"cursor-pointer"}>
                Demander un devis gratuit
              </Button>
            </Link>
            <Link
              href="#solutions"
              title="Découvrir toutes nos solutions de films pour vitrages"
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

      {/* ── POURQUOI INSTALLER UN FILM ────────────────────── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Pourquoi installer un film sur vos vitrages ?
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed text-sm md:text-base">
                Les films pour vitrages constituent une alternative efficace aux
                solutions traditionnelles comme le remplacement de vitrage ou
                l&apos;installation de stores. Ils permettent d&apos;agir directement sur
                les performances du vitrage existant, de manière rapide et
                durable.
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
                src="/images/services-solar-home-vitrages.webp"
                alt="Pose de film pour vitrage par Solar Home 37"
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
              Nos solutions de films pour vitrages
            </h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base">
              Solar Home 37 propose plusieurs catégories de films pour répondre
              précisément à chaque besoin. Chaque solution est détaillée dans
              une page dédiée.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  title={`${cat.title} pour vitrages — Solar Home 37`}
                  className="group block bg-white border border-border hover:border-primary/40 transition-colors duration-300 overflow-hidden"
                >
                  {/* Image */}
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

                  {/* Content */}
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

      {/* ── BÂTIMENTS + ACCOMPAGNEMENT ────────────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Pour quels types de bâtiments ?
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-sm md:text-base">
                Les films pour vitrages installés par Solar Home 37 s&apos;adaptent à de
                nombreux contextes. Chaque environnement présente des contraintes
                spécifiques, prises en compte lors de l&apos;étude de votre projet.
              </p>
              <ul>
                {buildingTypes.map((type) => (
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
                La performance d&apos;un film pour vitrage dépend autant de sa qualité
                que de la précision de sa pose. Solar Home 37 assure une installation
                professionnelle, réalisée avec méthode et exigence, garantissant
                un rendu soigné et une tenue optimale dans le temps.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Nous vous accompagnons de l&apos;analyse du besoin jusqu&apos;à la pose
                finale, avec un conseil clair et transparent à chaque étape.
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
            Pose de films pour vitrages à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong> et dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour l&apos;installation de films pour
            vitrages de bâtiments. Nous nous déplaçons sur site afin d&apos;étudier
            vos vitrages et de vous proposer une solution parfaitement adaptée à
            votre environnement et à vos objectifs.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Besoin d'une solution pour vos vitrages ?"
        subtitle="Confort, sécurité ou esthétique — Solar Home 37 vous accompagne avec des solutions professionnelles adaptées à votre projet."
      />
    </main>
  );
}
