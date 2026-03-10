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
  navigation?: NavigationItem[];
  ctaButton?: {
    label: string;
    href: string;
    title: string;
  };
  className?: string;
}
