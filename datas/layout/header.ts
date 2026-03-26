import { HeaderProps } from "@/components/layout/header/types";

export const headerData: HeaderProps = {
  logo: "/logos/solar-home_logo_line_gold-black.svg",
  logoMobile: "/logos/solar-home_logo_icon_gold-black.svg",
  logoDark: "/logos/solar-home_logo_line_gold-white.svg",
  logoMobileDark: "/logos/solar-home_logo_icon_gold-black.svg",
  navigation: [
    { label: "Accueil", href: "/", title: "Accueil" },
    {
      label: "Services",
      href: "#",
      title: "Services",
      hasDropdown: true,
    },
    { label: "Galerie", href: "/nos-realisations", title: "Galerie - Nos réalisations" },
    { label: "Contact", href: "/contact", title: "Contactez Solar Home 37" },
  ],
  ctaButton: {
    label: "Demander un devis",
    href: "/contact",
    title: "Demander un devis — Solar Home 37",
  },
};
