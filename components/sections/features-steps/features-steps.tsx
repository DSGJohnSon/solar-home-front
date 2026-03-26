"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import FeatureStepsProps from "./types";

export function FeatureSteps({
  features,
  className,
  title = "",
  autoPlayInterval = 6500,
}: FeatureStepsProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile côté client uniquement
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleToggle = (index: number) => {
    if (index === openIndex) return;
    setPrevIndex(openIndex);
    setOpenIndex(index);
    setPaused(true);
  };

  // Autoplay — ignoré sur mobile (isMobile)
  const handleProgressEnd = useCallback(() => {
    if (isMobile) return;
    setOpenIndex((prev) => {
      const next = (prev + 1) % features.length;
      setPrevIndex(prev);
      return next;
    });
  }, [features.length, isMobile]);

  return (
    <>
      {/* Keyframe inline pour la barre de progression */}
      <style>{`
        @keyframes progressFill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>

      <section className={cn("py-12 md:py-24 px-8 md:px-48 w-full", className)}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center relative before:content-[''] before:block before:w-[50px] before:h-1 before:bg-primary before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Steps accordion */}
          <div className="order-2 md:order-1 space-y-3 h-full">
            {features.map((feature, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "rounded-xl border transition-colors duration-300 overflow-hidden",
                    isOpen
                      ? "border-primary/50 bg-primary/5"
                      : "border-border bg-muted/30",
                  )}
                  onMouseEnter={() => !isMobile && isOpen && setPaused(true)}
                  onMouseLeave={() => !isMobile && isOpen && setPaused(false)}
                >
                  {/* Header cliquable */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={cn("w-full flex items-center gap-4 px-5 py-4 text-left", isOpen ? "" : "cursor-pointer")}
                  >
                    {/* Numéro */}
                    <div
                      className={cn(
                        "shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                        isOpen
                          ? "bg-primary border-primary text-primary-foreground scale-110"
                          : "bg-muted border-muted-foreground",
                      )}
                    >
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>

                    {/* Titre */}
                    <h3 className="flex-1 text-lg md:text-xl font-semibold">
                      {feature.title || feature.step}
                    </h3>

                    {/* Chevron */}
                    <motion.span
                      className="text-muted-foreground text-lg"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.span>
                  </button>

                  {/* Barre de progression CSS — desktop uniquement */}
                  {isOpen && !isMobile && (
                    <div className="px-5 pb-1">
                      <div className="h-[3px] w-full rounded-full bg-primary/15 overflow-hidden">
                        <div
                          key={openIndex}
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: "0%",
                            animation: `progressFill ${autoPlayInterval}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }}
                          onAnimationEnd={handleProgressEnd}
                        />
                      </div>
                    </div>
                  )}

                  {/* Contenu animé */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="px-5 pt-2 text-sm md:text-base text-muted-foreground cursor-default">
                          {feature.content}
                        </p>

                        {/* Image dans l'accordion — mobile uniquement */}
                        {isMobile && (
                          <div className="mx-5 mt-4 mb-5 relative h-[200px] rounded-xl overflow-hidden">
                            <Image
                              src={feature.image}
                              alt={feature.step}
                              className="w-full h-full object-cover"
                              width={800}
                              height={400}
                            />
                          </div>
                        )}

                        {/* Espacement si desktop (pas d'image ici) */}
                        {!isMobile && <div className="pb-5" />}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Image desktop — masquée sur mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 hidden md:block relative h-[320px] lg:h-[440px] overflow-hidden rounded-2xl border-r-16 border-primary"
          >
            {/* Image précédente — reste fixe en dessous */}
            {prevIndex !== null && (
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <Image
                  src={features[prevIndex].image}
                  alt={features[prevIndex].step}
                  className="w-full h-full object-cover"
                  width={1000}
                  height={500}
                />
              </div>
            )}

            {/* Image active — glisse depuis le bas par-dessus */}
            <motion.div
              key={openIndex}
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ zIndex: 10 }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src={features[openIndex].image}
                alt={features[openIndex].step}
                className="w-full h-full object-cover"
                width={1000}
                height={500}
              />
            </motion.div>

            {/* Overlay décoratif */}
            <div
              className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none"
              style={{ zIndex: 20 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
