import React from "react";

export interface NavigationItem {
  label: string;
  href: string;
  title: string;
  hasDropdown?: boolean;
  dropdownContent?: {
    groups: {
      title: string;
      links: {
        label: string;
        href: string;
        title: string;
      }[];
    }[];
  };
}

export interface ServiceCard {
  image: string;
  category: string;
  title: string;
  onClick?: () => void;
}

export interface HomeHeroProps {
  logo?: string;
  logoMobile?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    href: string;
    title: string;
  };
  title: string;
  subtitle: string;
  primaryAction?: {
    label: string;
    href: string;
    title: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
    title: string;
  };
  disclaimer?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  services?: ServiceCard[];
  className?: string;
  children?: React.ReactNode;
}
