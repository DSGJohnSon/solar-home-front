"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";

/**
 * Pages listées ici auront le header en mode dark hero (texte blanc, logo dark, CTA primary)
 * quand l'utilisateur n'a pas encore scrollé.
 */
const DARK_HERO_PATHS = [
  "/films-vitrages",
  "/films-decoratifs",
  "/films-publicitaires",
  "/nos-realisations",
];

export function HeaderWrapper() {
  const pathname = usePathname();
  const isDarkHero = DARK_HERO_PATHS.includes(pathname);
  return <Header isDarkHero={isDarkHero} />;
}
