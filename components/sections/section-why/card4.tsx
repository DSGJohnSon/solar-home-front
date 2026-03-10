"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Card4() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    x.set(mouseX);
    y.set(mouseY);
  }

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative col-span-full overflow-hidden sm:col-span-3 xl:col-span-2 group bg-zinc-100"
    >
      <CardContent className="flex h-full flex-col items-center justify-center pt-2 lg:pt-0 text-center relative z-3">
        {/* GRAPH */}
        <div className="relative mx-auto w-full max-w-sm h-44">
          <svg viewBox="0 0 220 140" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="solarGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#be9c52" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#be9c52" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="renoGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#a1a1aa" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0" />
              </linearGradient>

              <pattern
                id="grid"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 16 0 L 0 0 0 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  className="text-zinc-400/30 dark:text-zinc-500/30"
                />
              </pattern>

              <linearGradient id="gridFade" x1="0" x2="1">
                <stop offset="0%" stopColor="white" />
                <stop offset="70%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              <mask id="gridMask">
                <rect
                  x="0"
                  y="0"
                  width="220"
                  height="140"
                  fill="url(#gridFade)"
                />
              </mask>
            </defs>

            <rect
              x="20"
              y="10"
              width="190"
              height="110"
              fill="url(#grid)"
              mask="url(#gridMask)"
            />

            <line
              x1="20"
              y1="120"
              x2="210"
              y2="120"
              className="stroke-zinc-300 dark:stroke-zinc-700"
              strokeWidth="1"
            />

            <line
              x1="20"
              y1="15"
              x2="20"
              y2="120"
              className="stroke-zinc-300 dark:stroke-zinc-700"
              strokeWidth="1"
            />

            <motion.path
              d="M20 120 C80 118 110 95 140 65 C165 40 190 20 210 12 L210 120 L20 120 Z"
              fill="url(#renoGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            <motion.path
              d="M20 120 C80 118 110 95 140 65 C165 40 190 20 210 12"
              stroke="#9ca3af"
              strokeWidth="3"
              fill="transparent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />

            <motion.path
              d="M20 120 C90 118 150 108 210 98 L210 120 L20 120 Z"
              fill="url(#solarGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            />

            <motion.path
              d="M20 120 C90 118 150 108 210 98"
              className="stroke-primary"
              strokeWidth="3"
              fill="transparent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3 }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
            className="absolute right-0 md:right-[13%] bottom-[23%] size-8 rounded-full border bg-white shadow-md flex items-center justify-center"
          >
            <Image
              src="/logos/solar-home_logo_icon_gold-black.svg"
              alt="Solar Home"
              width={20}
              height={20}
              className="object-contain p-[2px]"
            />
          </motion.div>

          <div className="absolute right-0 md:right-4 -top-2 text-[.8em] text-zinc-500 uppercase">
            rénovation complète
          </div>

          <div className="absolute md:left-19 -top-2 text-[.8em] md:-translate-x-1/2 text-zinc-400 origin-left uppercase">
            Coût (€)
          </div>
        </div>

        <div className="relative z-10 mt-6 max-w-sm">
          <h3 className="text-lg font-medium font-title">
            Une solution économique
          </h3>

          <p className="text-sm text-muted-foreground mt-2">
            Les films adhésifs permettent d'améliorer les performances d’un
            vitrage ou l’esthétique d’une surface sans engager de rénovation
            complète.
          </p>
        </div>
      </CardContent>

      {/* glow border */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none block w-lg aspect-square absolute top-0 left-0 bg-radial from-primary to-transparent to-70% rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1"
      />

      {/* faux border */}
      <div className="absolute inset-px z-2 bg-linear-to-br from-white to-zinc-50 pointer-events-none" />

      {/* glow interne */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none block w-78 aspect-square absolute top-0 left-0 bg-radial from-primary/13 to-transparent to-70% rounded-full z-3 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </Card>
  );
}
