"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {} from "react";
import { MapGraphicProps } from "./types";

export function MapGraphic({
  cities,
  originX,
  originY,
  showCoordinates = false,
  activeCityIndex,
  mouseCoords,
  onMouseMove,
  isMapZoomed,
  isTransitioning,
  onToggleZoom,
}: MapGraphicProps) {
  // Calcul de la position réelle sur l'écran selon le zoom (Scale 2.5)
  const getX = (x: number) => (isMapZoomed ? x * 2.5 - 40 : x);
  const getY = (y: number) => (isMapZoomed ? y * 2.5 - 50 : y);

  const actualOriginX = getX(originX);
  const actualOriginY = getY(originY);

  return (
    <div className="w-full flex-1 mt-8 md:mt-0">
      <div
        className={cn(
          "relative w-full aspect-square overflow-hidden rounded-xl",
          "transition-all duration-300 ease-in-out",
          isMapZoomed ? "border-2 border-primary" : "border-0",
        )}
        onMouseMove={onMouseMove}
      >
        <Image
          src="/maps/france-map.svg"
          alt="Carte de la zone d'intervention de Solar Home 37"
          fill
          className={cn(
            "object-cover transition-transform duration-500 delay-300",
            isMapZoomed
              ? "scale-250 translate-x-[35%] translate-y-[25%]"
              : "scale-100 relative",
          )}
        />
        <div
          className={cn(
            "absolute z-30 drop-shadow-md",
            "transition-all duration-500 delay-300",
            isMapZoomed ? "w-10 h-10" : "w-6 h-6",
          )}
          style={{
            left: `${actualOriginX}%`,
            top: `${actualOriginY}%`,
            transform: "translate(-50%, -100%)",
          }}
        >
          <Image
            src="/logos/solar-home_logo_icon_gold-black_white_border.svg"
            alt="Logo Solar Home 37"
            width={100}
            height={100}
            className="w-full object-contain"
          />
        </div>

        {/* Calque des villes animées */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <AnimatePresence>
            {!isTransitioning &&
              cities.map((city, index) => {
                if (index !== activeCityIndex) return null;

                const actualCityX = getX(city.x);
                const actualCityY = getY(city.y);

                const cx = (actualOriginX + actualCityX) / 2;
                const cy = Math.min(actualOriginY, actualCityY) - 20;
                const pathD = `M ${actualOriginX} ${actualOriginY} Q ${cx} ${cy} ${actualCityX} ${actualCityY}`;

                return (
                  <motion.div
                    key={city.name}
                    className="absolute inset-0"
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute inset-0 w-full h-full overflow-visible z-10"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: 1,
                          d: pathD,
                        }}
                        exit={{
                          pathLength: 0,
                          opacity: 0,
                          transition: { duration: 0.4, delay: 0 },
                        }}
                        transition={{
                          pathLength: {
                            duration: 1.2,
                            ease: "easeInOut",
                            delay: 0.5,
                          },
                          opacity: { duration: 0.1, delay: 0.5 },
                          d: { duration: 0.5, delay: 0.3 }, // Synchronisé avec le fond de carte
                        }}
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        strokeLinecap="round"
                        className="text-primary z-5 relative"
                      />
                    </svg>

                    <div
                      className="absolute w-max flex flex-col items-center justify-center transition-all duration-500 delay-300 z-20"
                      style={{
                        left: `${actualCityX}%`,
                        top: `${actualCityY}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          transition: { duration: 0.4, delay: 0 },
                        }}
                        transition={{
                          scale: { duration: 0.5, delay: 1.2 },
                          opacity: { duration: 0.5, delay: 1.2 },
                          default: { duration: 0.5 },
                        }}
                        className="relative flex flex-col items-center justify-center"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,215,0,0.8)] border-2 border-white" />
                        <div
                          className={cn(
                            "absolute whitespace-nowrap font-bold text-foreground bg-white rounded-md border border-border/50",
                            isMapZoomed
                              ? "text-sm md:text-base px-3 py-1"
                              : "text-xs md:text-xs px-1.5 py-1",
                            city.positionName === "top" ? "bottom-6" : "",
                            city.positionName === "bottom" ? "top-6" : "",
                            city.positionName === "right" ? "left-6" : "",
                            city.positionName === "left" ? "right-6" : "",
                          )}
                        >
                          {city.name}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 right-4 z-30">
          <Button
            onClick={onToggleZoom}
            className="cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.1)] font-medium bg-background/90 backdrop-blur text-foreground border-border hover:bg-secondary"
            size={"sm"}
            variant="outline"
          >
            {isTransitioning
              ? "Changement de vue..."
              : isMapZoomed
                ? "Voir toute la France"
                : "Zoomer sur la région"}
          </Button>
        </div>
      </div>

      {/* Indicateur de coordonnées pour t'aider à placer les villes */}
      {showCoordinates && (
        <div className="mt-4 text-center text-sm font-mono text-muted-foreground bg-secondary/30 py-2 rounded-md border border-border/50 shadow-sm">
          Survol carte :{" "}
          <span className="font-semibold text-primary">x: {mouseCoords.x}</span>
          ,{" "}
          <span className="font-semibold text-primary">y: {mouseCoords.y}</span>
        </div>
      )}
    </div>
  );
}
