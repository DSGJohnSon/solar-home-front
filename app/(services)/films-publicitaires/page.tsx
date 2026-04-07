import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Eye, ImageIcon, Type } from "lucide-react";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title: "Stickage publicitaire & vitrophanie à Tours | Solar Home 37",
  description:
    "Stickage publicitaire, vitrophanie, lettrage adhésif et logos sur vitrines à Tours et en Indre-et-Loire. Valorisez votre visibilité sans travaux. Devis gratuit.",
};

const benefits = [
  "Amélioration immédiate de la visibilité",
  "Valorisation de l'image de marque",
  "Communication claire et impactante",
  "Solution économique et durable",
  "Aucun travaux ni modification du bâti",
  "Amovible et remplaçable selon vos campagnes",
];

const categories = [
  {
    icon: Eye,
    title: "Vitrophanie",
    description:
      "Exploitez pleinement la surface vitrée de votre vitrine : logo, horaires, messages promotionnels, identité graphique.",
    href: "/films-publicitaires/vitrophanie",
    image: "/images/services-solar-home-vitrophanie.webp",
    targets: [
      "Vitrines de commerces et boutiques",
      "Devantures de restaurants et cafés",
      "Espaces professionnels et agences",
    ],
  },
  {
    icon: Type,
    title: "Lettrage & Découpe vinyle",
    description:
      "Solution sobre et élégante : nom d'enseigne, slogan, informations clés, signalétique directionnelle — rendu net et précis.",
    href: "/films-publicitaires/lettrages-decoupe-vinyle",
    image: "https://media.istockphoto.com/id/2194339814/fr/photo/gros-plan-dun-marquage-blanc-soldes-jusqu%C3%A0-50-%C3%A9crit-en-fran%C3%A7ais-sur-la-vitrine-dun.jpg?s=612x612&w=0&k=20&c=n8f6JLJRv4seO-WRm8pVqdxLRURR10nw3YpMwW_iolw=",
    targets: [
      "Enseignes et noms de commerce",
      "Slogans et informations clés",
      "Signalétique directionnelle",
    ],
  },
  {
    icon: ImageIcon,
    title: "Logos & Visuels sur vitrages",
    description:
      "Impression sur mesure de logos personnalisés, visuels graphiques et éléments de communication — opaques ou microperforés.",
    href: "/films-publicitaires/logo-visuels-sur-vitrages",
    image: "https://media.istockphoto.com/id/2220292070/fr/photo/biblioth%C3%A8que-oosterdok-de-labo.jpg?s=612x612&w=0&k=20&c=C-5C6-BuY9-4i0eSh1-1NW_zR0ToleiGex2GeYQuFYY=",
    targets: [
      "Logos et identité visuelle",
      "Visuels graphiques imprimés",
      "Films microperforés",
    ],
  },
];

const professionalTypes = [
  "Commerces et boutiques",
  "Artisans et indépendants",
  "Restaurants et cafés",
  "Agences et bureaux",
  "Professions libérales",
  "Entreprises locales",
];

export default function FilmsPublicitairesPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[80svh] flex items-center justify-center overflow-hidden bg-zinc-950">
        <Image
          src="/images/services-solar-home-vitrophanie.webp"
          alt="Stickage publicitaire et vitrophanie par Solar Home 37"
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
            Stickage publicitaire et vitrophanie pour vitrines et locaux
            professionnels
          </h1>

          <p
            className="text-zinc-300 mb-10 max-w-2xl"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)", lineHeight: 1.7 }}
          >
            Solar Home 37 accompagne les professionnels dans la conception et la
            pose de solutions adhésives publicitaires. Valorisez votre vitrine,
            affichez votre identité visuelle et communiquez directement sur vos
            surfaces vitrées — sans travaux lourds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" title="Demander un devis gratuit Solar Home 37">
              <Button variant="default" size="xl" className="cursor-pointer">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link
              href="#solutions"
              title="Découvrir toutes nos solutions de stickage publicitaire"
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
                Pourquoi choisir le stickage publicitaire sur vitrines ?
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed text-sm md:text-base">
                Le stickage publicitaire permet de transformer une vitrine en
                véritable support de communication visible 24h/24. C&apos;est un
                levier essentiel pour attirer l&apos;attention, informer et renforcer
                la notoriété d&apos;un commerce ou d&apos;une entreprise.
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
                src="/images/services-solar-home-vitrophanie.webp"
                alt="Pose de vitrophanie par Solar Home 37"
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
              Nos solutions de stickage et signalétique adhésive
            </h2>
            <p className="text-zinc-600 max-w-xl mx-auto text-sm md:text-base">
              Solar Home 37 propose différentes solutions de communication
              adhésive adaptées aux besoins professionnels. Chaque solution est
              détaillée dans une page dédiée.
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

      {/* ── PROFESSIONNELS + ACCOMPAGNEMENT ───────────────── */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <span className="block w-12 h-1 bg-primary mb-6" />
              <h2
                className="font-title font-bold uppercase text-zinc-950 mb-5"
                style={{ fontSize: "clamp(20px, 3vw, 34px)" }}
              >
                Une solution adaptée à tous les professionnels
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-sm md:text-base">
                Le stickage publicitaire s&apos;adresse à l&apos;ensemble des acteurs
                locaux souhaitant améliorer leur visibilité. Chaque projet est
                étudié afin d&apos;adapter le message, le format et le type de film
                au lieu et à l&apos;objectif recherché.
              </p>
              <ul>
                {professionalTypes.map((type) => (
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
                Pose professionnelle et rendu durable
              </h2>
              <p className="text-zinc-600 mb-4 leading-relaxed text-sm md:text-base">
                Un stickage publicitaire efficace repose sur la qualité du
                support et la précision de la pose. Solar Home 37 assure une
                installation professionnelle garantissant un alignement parfait,
                une adhérence durable et un rendu propre et soigné.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Chaque intervention comprend l&apos;analyse du support, le choix du
                type d&apos;adhésif, la fabrication si nécessaire, la pose
                professionnelle et les conseils d&apos;entretien.
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
            Stickage publicitaire et vitrophanie à Tours et en Indre-et-Loire
          </h2>
          <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
            Solar Home 37 intervient à{" "}
            <strong className="text-zinc-800">Tours</strong> et dans tout le
            département de{" "}
            <strong className="text-zinc-800">l&apos;Indre-et-Loire (37)</strong> et
            dans les secteurs limitrophes pour la pose de stickage publicitaire,
            vitrophanie et signalétique adhésive. Nous accompagnons les
            professionnels dans leurs projets de visibilité et de communication
            visuelle.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Vous souhaitez améliorer la visibilité de votre vitrine ?"
        subtitle="Solar Home 37 vous propose une solution sur mesure, professionnelle et durable pour votre commerce ou local professionnel."
      />
    </main>
  );
}
