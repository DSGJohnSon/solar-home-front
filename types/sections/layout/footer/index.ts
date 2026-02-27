import React from "react";

export interface FooterLink {
  title: string;
  href: string;
  icon?: string | React.ComponentType<{ className?: string }>;
}

export interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

export type StickyFooterProps = React.ComponentProps<"footer">;
