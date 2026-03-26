import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/sections/contact-cta/contact-cta";

export const metadata: Metadata = {
  title:
    "Tarifs films adhésifs, décoration & vitrophanie à Tours | Solar Home 37",
  description:
    "Grille tarifaire films solaires, sécurité, adhésifs décoratifs Cover Styl et vitrophanie à Tours. Prix au m² et au projet. Devis gratuit en Indre-et-Loire.",
};

const filmsVitrages = [
  {
    label: "Films solaires",
    href: "/films-vitrages/films-solaires",
    rows: [
      { name: "Film solaire premium", price: "135 € / m²" },
      { name: "Film solaire haute performance", price: "165 € / m²" },
      {
        name: "Film solaire technique / grandes surfaces",
        price: "195 – 230 € / m²",
      },
    ],
    minimum: "490 € HT",
  },
  {
    label: "Films de sécurité",
    href: "/films-vitrages/films-securite",
    rows: [
      { name: "Film de sécurité standard", price: "155 € / m²" },
      { name: "Film de sécurité renforcé", price: "190 – 240 € / m²" },
    ],
    minimum: "590 € HT",
  },
  {
    label: "Films design & intimité",
    href: "/films-vitrages/films-design-et-intimite",
    rows: [
      { name: "Dépoli / intimité simple", price: "125 € / m²" },
      { name: "Design graphique / bandes / motifs", price: "155 – 195 € / m²" },
      { name: "Projet sur mesure (logo, zones complexes)", price: "Sur devis" },
    ],
    minimum: "390 € HT",
  },
  {
    label: "Films high-tech",
    href: "/films-vitrages/films-high-tech",
    rows: [
      { name: "Film high-tech performance avancée", price: "195 € / m²" },
      {
        name: "Film high-tech technique spécifique",
        price: "230 – 320 € / m²",
      },
    ],
    minimum: "690 € HT",
  },
];

const adhesifsDecoratifs = [
  {
    label: "Rénovation de mobilier",
    href: "/films-decoratifs/renovation-mobilier",
    rows: [
      { name: "Petit meuble", price: "490 – 690 €" },
      { name: "Meuble moyen", price: "690 – 1 200 €" },
      { name: "Gros meuble / dressing", price: "1 200 – 2 500 €" },
      { name: "Cuisine partielle", price: "1 500 – 2 900 €" },
      { name: "Cuisine complète", price: "2 900 – 5 500 €" },
      { name: "Plan de travail", price: "490 – 1 200 €" },
    ],
    minimum: null,
    note: "Prix au projet",
  },
  {
    label: "Décoration intérieure",
    href: "/films-decoratifs/decoration-interieure",
    rows: [
      { name: "Surfaces planes", price: "145 € / m²" },
      { name: "Angles / découpes / portes", price: "175 – 210 € / m²" },
      { name: "Zones complexes", price: "230 – 280 € / m²" },
    ],
    minimum: "490 € HT",
  },
];

const stickajePublicitaire = [
  {
    label: "Vitrophanie & impression",
    href: "/films-publicitaires/vitrophanie",
    rows: [
      { name: "Vitrophanie imprimée", price: "145 – 190 € / m²" },
      { name: "Microperforé", price: "175 – 220 € / m²" },
      { name: "Création graphique (si besoin)", price: "80 – 250 €" },
    ],
    minimum: "590 € HT",
  },
  {
    label: "Lettrage adhésif & logos",
    href: "/films-publicitaires/lettrages-decoupe-vinyle",
    rows: [
      { name: "Petit lettrage vitrine", price: "490 – 790 €" },
      { name: "Vitrine complète", price: "790 – 1 800 €" },
      { name: "Branding façade / identité visuelle", price: "1 800 – 5 000 €" },
    ],
    minimum: null,
    note: "Prix au projet",
  },
];

type PricingGroup = {
  label: string;
  href: string;
  rows: { name: string; price: string }[];
  minimum: string | null;
  note?: string;
};

function PricingCategory({
  title,
  groups,
}: {
  title: string;
  groups: PricingGroup[];
}) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <span className="block w-12 h-1 bg-primary mb-6" />
        <h2
          className="font-title font-bold uppercase text-zinc-950 mb-10"
          style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {groups.map((group) => (
            <div key={group.label} className="border border-border bg-white">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <h3 className="font-title font-semibold text-zinc-950 text-sm uppercase tracking-wider">
                  {group.label}
                </h3>
                <Link
                  href={group.href}
                  className="text-[11px] text-primary font-semibold uppercase tracking-wider hover:underline underline-offset-4"
                >
                  Voir la page →
                </Link>
              </div>

              <div className="divide-y divide-border">
                {group.rows.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between px-6 py-3"
                  >
                    <span className="text-sm text-zinc-600">{row.name}</span>
                    <span className="text-sm font-semibold text-zinc-950 shrink-0 ml-4">
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-6 py-3 bg-zinc-50 border-t border-border flex items-center justify-between">
                <>
                  {"note" in group && group.note ? (
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                      <>{group.note}</>
                    </span>
                  ) : (
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                      Minimum chantier
                    </span>
                  )}
                  {"minimum" in group && group.minimum && (
                    <span className="text-sm font-bold text-zinc-950">
                      {group.minimum}
                    </span>
                  )}
                </>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TarifsPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-32 md:pt-40 pb-16 px-4 bg-zinc-50">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-primary text-[11px] font-semibold uppercase tracking-widest block mb-4">
            Tarifs
          </span>
          <h1
            className="font-title font-bold text-zinc-950 text-balance mb-4"
            style={{
              fontSize: "clamp(26px, 4.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Grille tarifaire
          </h1>
          <p
            className="text-zinc-500 mb-8"
            style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.7 }}
          >
            Tous les prix sont indiqués hors taxes, pose comprise. Chaque projet
            fait l&apos;objet d&apos;un devis personnalisé gratuit — les tarifs ci-dessous
            sont des fourchettes indicatives.
          </p>
          <Link href="/contact" title="Demander un devis gratuit">
            <Button variant="default" size="xl">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>

      {/* ── FILMS POUR VITRAGES ───────────────────────────── */}
      <div className="bg-white">
        <PricingCategory title="Films pour vitrages" groups={filmsVitrages} />
      </div>

      {/* ── ADHÉSIFS DÉCORATIFS ───────────────────────────── */}
      <div className="bg-zinc-50">
        <PricingCategory
          title="Adhésifs décoratifs Cover Styl"
          groups={adhesifsDecoratifs}
        />
      </div>

      {/* ── STICKAGE PUBLICITAIRE ─────────────────────────── */}
      <div className="bg-white">
        <PricingCategory
          title="Stickage publicitaire & vitrophanie"
          groups={stickajePublicitaire}
        />
      </div>

      {/* ── NOTE GÉNÉRALE ─────────────────────────────────── */}
      <section className="py-12 px-4 bg-zinc-50 border-t border-border">
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            "Tous les tarifs sont indiqués hors taxes (HT), pose professionnelle incluse.",
            "Les prix au m² s'appliquent aux surfaces planes accessibles depuis l'intérieur.",
            "Un minimum de chantier est applicable selon la nature du projet.",
            "Les projets sur mesure, complexes ou en grande surface font systématiquement l'objet d'un devis personnalisé.",
            "Déplacement inclus dans un rayon de 50 km autour de Tours (37).",
          ].map((note) => (
            <div key={note} className="flex items-start gap-3">
              <span className="shrink-0 w-1.5 h-1.5 bg-primary mt-2" />
              <p className="text-sm text-zinc-600 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <ContactCTA
        title="Un projet ? Obtenez votre devis gratuit"
        subtitle="Solar Home 37 vous propose une étude personnalisée et une proposition adaptée à votre besoin réel."
      />
    </main>
  );
}
