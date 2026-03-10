export interface CityData {
  name: string;
  dept: string;
  x: number;
  y: number;
  positionName: "top" | "bottom" | "left" | "right";
}

export interface MapFranceProps {
  _type: "MapFrance";
  title: string;
  subtitle?: string; // Optional subtitle if we want to use the animated one
  description?: string;
  cities: CityData[];
  originX: number;
  originY: number;
  showCoordinates: boolean;
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
}

export interface MapGraphicProps {
  cities: CityData[];
  originX: number;
  originY: number;
  showCoordinates: boolean;
  activeCityIndex: number;
  mouseCoords: { x: number; y: number };
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  isMapZoomed: boolean;
  isTransitioning: boolean;
  onToggleZoom: () => void;
}
