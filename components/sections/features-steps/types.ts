interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export default interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}