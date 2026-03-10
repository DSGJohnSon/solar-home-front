"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TilesProps {
  className?: string;
  rows?: number;
  cols?: number;
  tileClassName?: string;
  tileSize?: "sm" | "md" | "lg";
}

const tileSizes = {
  sm: "w-8 h-8",
  md: "w-9 h-9 md:w-12 md:h-12",
  lg: "w-12 h-12 md:w-16 md:h-16",
};

export function Tiles({
  className,
  rows = 100,
  cols = 10,
  tileClassName,
  tileSize = "md",
}: TilesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();

      // Pour une tuile "lg" : si l'écran est >= 768px, la tuile fait 64px, sinon 48px
      const isDesktop = window.innerWidth >= 768;
      const tileSizePx =
        tileSize === "lg"
          ? isDesktop
            ? 64
            : 48
          : tileSize === "md"
            ? isDesktop
              ? 48
              : 32
            : 24;

      // Arrondi supérieur pour toujours couvrir l'intégralité du fond
      const cols = Math.ceil(width / tileSizePx);
      const rows = Math.ceil(height / tileSizePx);

      setGrid({ rows, cols });
    };

    // Calcul initial
    updateGrid();

    // Recalcul en cas de changement de taille de l'écran
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, [tileSize]);

  // On utilise le state s'il a été calculé, sinon on utilise les valeurs par défaut (props).
  // La logique DOM d'origine crée visuellement des colonnes pour la boucle extérieure (via flex row),
  // et des lignes/tuiles verticales pour la boucle intérieure.
  const columnsCount = grid.cols > 0 ? grid.cols : rows;
  const rowsCount = grid.rows > 0 ? grid.rows : cols;

  const renderColumns = new Array(columnsCount).fill(1);
  const renderRows = new Array(rowsCount).fill(1);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 flex w-full h-full justify-center overflow-hidden",
        // Au lieu de classes arbitraires complexes qui peuvent mal se combiner en Tailwind, on injecte un style en inline pour ce cas spécifique de "mask-composite".
        // Le 1er mask (radial) rend le centre transparent et les bords opaques (black).
        // Le 2ème mask (linear) rend une bande du milieu opaque (black) et le haut/bas transparent de manière progressive.
        className,
      )}
      style={{
        maskImage:
          "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 30%, black), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, black 20%, black 80%, rgba(0, 0, 0, 0) 100%)",
        WebkitMaskComposite: "source-in",
        maskComposite: "intersect",
      }}
    >
      {renderColumns.map((_, i) => (
        <div
          key={`col-wrapper-${i}`}
          className={cn(
            tileSizes[tileSize],
            "border-l flex flex-col items-center dark:border-neutral-900 border-neutral-200/20 relative shrink-0",
            tileClassName,
          )}
        >
          {renderRows.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `rgba(0, 0, 0, 0.2)`,
                transition: { duration: 0.1 }, // Apparition très rapide
              }}
              initial={{ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0)" }}
              transition={{
                opacity: { duration: 0.8, delay: 1 },
                backgroundColor: { duration: 2, ease: "easeOut" }, // Disparition très lente
              }}
              key={`tile-${j}`}
              className={cn(
                tileSizes[tileSize],
                "border-r border-t dark:border-neutral-900 border-neutral-300/70 relative shrink-0",
                "bg-transparent cursor-default",
                tileClassName,
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
