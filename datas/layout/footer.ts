import { FooterData } from "../types";

export const footerData: FooterData = {
  socialLinks: [
    { title: "Facebook", href: "#", icon: "FacebookLogoIcon" },
    { title: "Instagram", href: "https://www.instagram.com/SolarHome_37", icon: "InstagramLogoIcon" },
    { title: "Youtube", href: "#", icon: "YoutubeLogoIcon" },
    { title: "LinkedIn", href: "#", icon: "LinkedinLogoIcon" },
  ],
  footerLinkGroups: [
    {
      label: "Services Vitrage",
      links: [
        { title: "Tous nos services vitrages", href: "/films-vitrages" },
        { title: "Films Design & Initimité", href: "/films-vitrages/films-design-et-intimite" },
        { title: "Films Sécurité", href: "/films-vitrages/films-securite" },
        { title: "Films Solaires", href: "/films-vitrages/films-solaires" },
        { title: "Films High Tech", href: "/films-vitrages/films-high-tech" },
      ],
    },
    {
      label: "Services Décoratifs",
      links: [
        { title: "Tous nos services décoratifs", href: "/films-decoratifs" },
        { title: "Adhésifs décoratifs", href: "/films-decoratifs/adhesifs-decoratifs" },
        { title: "Rénovation mobilier", href: "/films-decoratifs/renovation-mobilier" },
        { title: "Décoration intérieure", href: "/films-decoratifs/decoration-interieure " },
      ],
    },
    {
      label: "Stickage Publicitaire",
      links: [
        { title: "Tous nos services publicitaires", href: "/films-publicitaires" },
        { title: "Vitrophanie", href: "/films-publicitaires/vitrophanie" },
        { title: "Lettrages & Découpe Vinyle", href: "/films-publicitaires/lettrages-decoupe-vinyle" },
        { title: "Logos & Visuels sur Vitrages", href: "/films-publicitaires/logo-visuels-sur-vitrages" },
      ],
    },
    {
      label: "Contact",
      links: [
        { title: "Nos réalisations", href: "/nos-realisations" },
        { title: "Contact / Demande de devis", href: "/contact" },
      ],
    },
  ],
};
