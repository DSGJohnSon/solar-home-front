import React from "react";

export interface ServiceCard {
  image: string;
  category: string;
  title: string;
  href: string;
  onClick?: () => void;
}

export interface HomeHeroProps {
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
