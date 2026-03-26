"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ImageComparison } from "@/components/ui/image-comparison";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function Card3() {
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
      className="relative col-span-full flex flex-col overflow-hidden xl:col-span-2 group bg-zinc-200 h-full"
    >
      <CardContent className="flex flex-col h-full relative z-3">
        <div className="flex-1">
          <h3 className="text-lg text-center font-medium font-title">
            Rénovation sans travaux lourds
          </h3>

          <p className="text-sm font-semibold text-center text-foreground mb-4">
            Transformez vos surfaces sans démolition
          </p>

          <p className="text-sm text-center text-muted-foreground mb-6">
            Les adhésifs décoratifs permettent de moderniser murs, meubles ou
            portes sans remplacer les matériaux existants.
          </p>
        </div>

        <div className="mt-auto">
          <ImageComparison
            beforeImage="/images/why-section/cuisine-before.jpg"
            afterImage="/images/why-section/cuisine-after.jpg"
          />
        </div>
      </CardContent>

      {/* radial glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none block w-78 aspect-square absolute top-0 left-0 bg-radial from-primary to-transparent to-70% rounded-full z-1 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* faux border */}
      <div className="absolute inset-px z-2 bg-linear-to-br from-white to-zinc-50 pointer-events-none" />

      {/* radial mouse glow */}
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
