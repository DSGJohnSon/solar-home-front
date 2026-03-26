export interface DropdownLink {
  label: string;
  href: string;
  title: string;
}

export interface DropdownColumn {
  title: string;
  links: DropdownLink[];
}

export interface FeaturedItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

export interface FeaturedSection {
  title: string;
  items: FeaturedItem[];
}

export interface NavigationItem {
  label: string;
  href: string;
  title: string;
  hasDropdown?: boolean;
  dropdownContent?: {
    columns: DropdownColumn[];
    featured?: FeaturedSection;
  };
}

export interface HeaderProps {
  logo?: string;
  logoMobile?: string;
  /** Logo variant for dark hero backgrounds (when not scrolled) */
  logoDark?: string;
  logoMobileDark?: string;
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    href: string;
    title: string;
  };
  className?: string;
  /** Activates the dark hero mode: white text, dark-friendly logo, primary CTA */
  isDarkHero?: boolean;
}
