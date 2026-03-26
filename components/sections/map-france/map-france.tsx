"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { LucideArrowRight } from "lucide-react";
import { MapGraphic } from "./map-graphic";
import { MapFranceProps } from "./types";

export function MapFrance({
  title,
  description,
  cities,
  originX,
  originY,
  showCoordinates = false,
  primaryAction,
  secondaryAction,
}: MapFranceProps) {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMapZoomed, setIsMapZoomed] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseCoords({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
  };

  const handleToggleZoom = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    // 1. On attend que la ville actuelle disparaisse complètement (exit: 400ms + buffer)
    setTimeout(() => {
      setIsMapZoomed((prev) => !prev);
      // 2. On attend que la carte finisse sa transition CSS (800ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 500);
  };

  useEffect(() => {
    if (isTransitioning) return;

    const interval = setInterval(() => {
      setActiveCityIndex((prev) => (prev + 1) % cities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cities.length, isTransitioning]);

  return (
    <section
      className={cn(
        "py-12 md:py-24 px-8 lg:px-48 w-full bg-linear-to-b from-zinc-100 to-white",
      )}
    >
      <div className="md:flex items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          {/* SEO & Accessibilité : Texte fixe caché visuellement pour Google */}
          <h2 className="sr-only ">
            {title}. Nous intervenons dans les départements suivants :{" "}
            {cities.map((c) => c.dept).join(", ")}.
          </h2>

          {/* Visuel UI : Ce que voient réellement les utilisateurs libres d'interagir */}
          <div aria-hidden="true">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground font-title uppercase relative before:content-[''] before:block before:w-[50px] before:h-1 before:bg-primary before:absolute before:-top-4 before:left-0">
              {title}
            </div>

            <div className="mt-4 text-lg md:text-2xl font-title font-bold text-muted-foreground lg:flex items-center overflow-hidden">
              <div className="flex gap-1 items-center">
                <LucideArrowRight className="size-4 mr-1" />
                Nous intervenons en{" "}
              </div>
              <AnimatePresence mode="wait">
                {!isTransitioning && (
                  <motion.span
                    key={cities[activeCityIndex].dept}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-primary inline-flex whitespace-nowrap overflow-hidden ml-1 border-r-2 border-primary/50 pr-1"
                  >
                    {cities[activeCityIndex].dept}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-sm md:text-base text-muted-foreground"
            >
              {description}
            </motion.p>
          )}

          {(primaryAction || secondaryAction) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-4 md:mt-8 pointer-events-auto"
            >
              {primaryAction && (
                <Link href={primaryAction.href} title={primaryAction.title}>
                  <Button
                    className="cursor-pointer"
                    size={isMobile ? "lg" : "xl"}
                  >
                    {primaryAction.label}
                  </Button>
                </Link>
              )}
              {secondaryAction && (
                <Link href={secondaryAction.href} title={secondaryAction.title}>
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    size={isMobile ? "lg" : "xl"}
                  >
                    {secondaryAction.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <MapGraphic
            cities={cities}
            originX={originX}
            originY={originY}
            showCoordinates={showCoordinates}
            activeCityIndex={activeCityIndex}
            mouseCoords={mouseCoords}
            onMouseMove={handleMouseMove}
            isMapZoomed={isMapZoomed}
            isTransitioning={isTransitioning}
            onToggleZoom={handleToggleZoom}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default MapFrance;
