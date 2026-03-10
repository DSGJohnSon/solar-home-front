import { HeaderProps } from "@/components/layout/header/types";
import {
  ChartPieSlice,
  Gear,
  Funnel,
  Sparkle,
  ShieldCheck,
  Cpu,
  PaintBrush,
  Couch,
  Broadcast,
  CursorClick,
  Monitor,
} from "@phosphor-icons/react";

export const headerData: HeaderProps = {
  logo: "/logos/solar-home_logo_line_gold-black.svg",
  logoMobile: "/logos/solar-home_logo_icon_gold-black.svg",
  navigation: [
    { label: "Accueil", href: "/", title: "Accueil" },
    {
      label: "Services",
      href: "#",
      title: "Services",
      hasDropdown: true,
      dropdownContent: {
        columns: [
          {
            title: "Vitrage",
            links: [
              {
                label: "Design & Intimité",
                href: "#",
                title: "Design & Intimité",
              },
              { label: "Solaires", href: "#", title: "Solaires" },
              { label: "Sécurité", href: "#", title: "Sécurité" },
              { label: "High-Tech", href: "#", title: "High-Tech" },
            ],
          },
          {
            title: "Décoratifs & Pub",
            links: [
              {
                label: "Adhésifs décoratifs",
                href: "#",
                title: "Adhésifs décoratifs",
              },
              {
                label: "Rénovation Mobilier",
                href: "#",
                title: "Rénovation Mobilier",
              },
              {
                label: "Vitrophanie",
                href: "#",
                title: "Vitrophanie",
              },
            ],
          },
        ],
        featured: {
          title: "Nos meilleures solutions",
          items: [
            {
              title: "Analyses avancées",
              description: "Optimisez vos vitrages avec nos rapports.",
              href: "#",
              icon: ChartPieSlice,
            },
            {
              title: "Auto-reporting",
              description: "Suivez l'efficacité de vos installations.",
              href: "#",
              icon: Gear,
            },
            {
              title: "Optimisation flux",
              description: "Améliorez le confort thermique.",
              href: "#",
              icon: Funnel,
            },
          ],
        },
      },
    },
    { label: "Galerie", href: "#", title: "Galerie" },
    { label: "Contact", href: "#", title: "Contact" },
  ],
  ctaButton: {
    label: "Demander un devis",
    href: "#",
    title: "Demander un devis",
  },
};
