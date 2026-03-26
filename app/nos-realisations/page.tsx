import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";
import { GalleryGrid, type GalleryItem } from "./gallery-grid";

export const metadata: Metadata = {
  title: "Nos réalisations – Films pour vitrages à Tours | Solar Home 37",
  description:
    "Découvrez les réalisations de Solar Home 37 : pose de films solaires, de sécurité, décoratifs et vitrophanie à Tours et en Indre-et-Loire. Avant/après et photos de chantier.",
};

const items: GalleryItem[] = [
  {
    kind: "comparison",
    before: "/images/services-solar-home-vitrages.webp",
    after: "/images/services-solar-home-vitrages-2.webp",
    caption: "Film solaire – bureau, Tours",
  },
  {
    kind: "simple",
    src: "/images/services-solar-home-decoratifs.webp",
    alt: "Film décoratif posé sur vitrine commerciale",
    caption: "Film décoratif – vitrine commerciale",
  },
  {
    kind: "simple",
    src: "/images/services-solar-home-vitrophanie.webp",
    alt: "Vitrophanie sur vitrine – Tours",
    caption: "Vitrophanie – enseigne Tours",
  },
  {
    kind: "comparison",
    before: "/images/services-solar-home-vitrages-2.webp",
    after: "/images/services-solar-home-decoratifs.webp",
    caption: "Film sécurité – habitation",
  },
  {
    kind: "simple",
    src: "/images/services-solar-home-vitrages.webp",
    alt: "Pose de film solaire sur baie vitrée",
    caption: "Film solaire – véranda",
  },
  {
    kind: "simple",
    src: "/images/services-solar-home-vitrages-2.webp",
    alt: "Film haute performance sur vitrage de bureau",
    caption: "Film high-tech – locaux professionnels",
  },
];

export default function NosRealisationsPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80svh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src="/images/feature-steps/step3.webp"
          alt="Réalisations Solar Home 37 – pose de films pour vitrages"
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
            Nos réalisations : films pour vitrages à Tours
          </h1>

          <p
            className="text-zinc-300 mb-10 max-w-2xl"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)", lineHeight: 1.7 }}
          >
            Découvrez une sélection de chantiers réalisés par Solar Home 37 —
            particuliers et professionnels — à Tours et en Indre-et-Loire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" title="Demander un devis gratuit Solar Home 37">
              <Button variant="default" size="xl" className="cursor-pointer">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link
              href="#galerie"
              title="Voir toutes nos réalisations"
            >
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/60 hover:text-white cursor-pointer"
              >
                Voir les réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <div>
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Chaque chantier est unique
              </h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Bureaux, habitations, commerces ou établissements recevant du
                public — Solar Home 37 intervient sur tous types de vitrages.
                Retrouvez ici une sélection de nos réalisations, avec pour
                certaines un aperçu avant/après de l&apos;intervention.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                La qualité du résultat final dépend autant du film choisi que
                de la précision de la pose. Chaque projet est abordé avec
                méthode, depuis l&apos;analyse du vitrage jusqu&apos;à la finition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────── */}
      <section id="galerie" className="py-8 md:py-12 px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid items={items} />
        </div>
      </section>

      {/* ── SEO LOCAL ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 26px)" }}
          >
            Interventions à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
             37 réalise ses chantiers à{" "}
            <strong className="text-zinc-800">Tours</strong> et dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong>,
            ainsi que dans les secteurs limitrophes. Déplacement sur site
            inclus pour l&apos;étude et la pose.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Votre projet mérite un résultat soigné."
        subtitle="Contactez Solar Home 37 pour obtenir un devis gratuit et un conseil adapté à vos vitrages."
      />
    </main>
  );
}
