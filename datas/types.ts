import { HeaderProps } from "@/components/layout/header/types";
import { MapFranceProps } from "@/components/sections/map-france/types";

export interface FooterLink {
  title: string;
  href: string;
  icon?: string;
}

export interface SocialLink extends FooterLink {
  icon: string;
}

export interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

export interface FooterData {
  socialLinks: SocialLink[];
  footerLinkGroups: FooterLinkGroup[];
}

export interface HeroPrimaryAction {
  label: string;
  href: string;
  title: string;
}

export interface HeroSecondaryAction {
  label: string;
  href: string;
  title: string;
}

export interface HeroSocialProof {
  avatars: string[];
  text: string;
}

export interface HeroService {
  image: string;
  category: string;
  title: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  primaryAction?: HeroPrimaryAction;
  secondaryAction?: HeroSecondaryAction;
  disclaimer?: string;
  socialProof?: HeroSocialProof;
  services?: HeroService[];
}

// Discriminative Union Type for Sections. Adding new ones here allows the mapping engine to recognize them.

export interface FeatureStep {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export interface FeatureStepsSection {
  _type: "FeatureSteps";
  title: string;
  subtitle: string;
  features: FeatureStep[];
}

export interface SectionWhyProps {
  _type: "SectionWhy";
}

export interface ServicesProps {
  _type: "Services";
}

export interface ContactSectionProps {
  _type: "Contact";
  title: string;
  subtitle: string;
}

export type PageSection =
  | FeatureStepsSection
  | MapFranceProps
  | SectionWhyProps
  | ServicesProps
  | ContactSectionProps;

export interface PageData {
  hero: HeroData;
  sections: PageSection[];
}
