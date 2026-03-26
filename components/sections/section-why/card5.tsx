"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function Card5() {
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
      className="relative col-span-full overflow-hidden sm:col-span-3 xl:col-span-2 group flex flex-col justify-center items-center h-full"
    >
      <CardContent className="pt-6 relative z-4 flex flex-col justify-center items-center">
        <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border before:border-zinc-300 before:bg-white before:-z-10">
          <Image
            src="/logos/solar-home_logo_icon_gold-black.svg"
            alt="Solar Home 37 Logo"
            width={128}
            height={128}
            className="object-contain p-7 relative bg-linear-to-tl from-zinc-300 via-white to-zinc-200 rounded-full"
          />
        </div>

        <div className="relative z-10 mt-10 space-y-2 text-center">
          <h3 className="group-hover:text-secondary-950 text-lg font-medium transition">
            Un rendu esthétique et durable
          </h3>

          <p className="text-sm text-muted-foreground mb-6 lg:w-2/3 text-balance mx-auto">
            Les films professionnels offrent un résultat propre et résistant
            dans le temps.
          </p>
        </div>
      </CardContent>

      <div className="w-full h-[40%] absolute z-3 top-0 left-0 flex items-center gap-2">
        <div className="w-1/2 h-full">
          <Image
            src={"/images/feature-steps/step1.webp"}
            alt="Step 1"
            width={512}
            height={512}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-1/2 h-full">
          <Image
            src={"/images/feature-steps/step2.webp"}
            alt="Step 1"
            width={512}
            height={512}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

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
