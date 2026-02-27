export type SimpleSectionLayout =
  | "image-left"
  | "image-right"
  | "center-with-image"
  | "center";

export type ListIconType = "disc" | "check";

export interface ListContent {
  type: "list";
  iconType?: ListIconType;
  items: string[];
}

export interface ParagraphContent {
  type: "paragraph";
  text: string;
}

export type SimpleSectionContentBlock = ParagraphContent | ListContent;

export interface SimpleSectionCTA {
  label: string;
  href: string;
  title: string;
  target?: string;
  icon?: string;
}

export interface SimpleSectionProps {
  layout: SimpleSectionLayout;
  title?: string;
  subtitle?: string;
  content?: SimpleSectionContentBlock[];
  ctas?: SimpleSectionCTA[];
  image?: {
    src: string;
    alt: string;
  };
}
