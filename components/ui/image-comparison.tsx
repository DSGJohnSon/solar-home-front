import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export function ImageComparison({
  beforeImage,
  afterImage,
}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const mouseX = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });

  const clipPath = useTransform(springX, (v: number) => `inset(0 0 0 ${v}%)`);
  const leftPosition = useTransform(springX, (v: number) => `${v}%`);

  const handleInteraction = (clientX: number, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    mouseX.set(Math.min(100, Math.max(0, x)));
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      handleInteraction(e.clientX, e.currentTarget);
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleInteraction(e.touches[0].clientX, e.currentTarget);
    }
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-xl border cursor-ew-resize select-none touch-none"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={() => {
        if (!isDragging) {
          setIsDragging(false);
          mouseX.set(50);
        }
      }}
      onTouchEnd={() => {
        setIsDragging(false);
        mouseX.set(50);
      }}
    >
      {/* Before Image (Always background) */}
      <Image
        src={beforeImage}
        alt="Avant"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* After Image (Overlaid with mask) */}
      <motion.div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{
          clipPath: clipPath,
        }}
      >
        <Image
          src={afterImage}
          alt="Après"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Slider Line */}
      <motion.div
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: leftPosition }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-600">
          <div className="w-full h-full flex flex-col gap-[5px] justify-center items-center p-[4px]">
            <div className="block w-full aspect-square bg-primary rounded-full"></div>
            <div className="block w-full aspect-square bg-primary rounded-full"></div>
            <div className="block w-full aspect-square bg-primary rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
        <span className="bg-black/50 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm border border-white/10">
          Avant
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
        <span className="bg-primary-600/50 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded backdrop-blur-sm border border-white/10">
          Après
        </span>
      </div>
    </div>
  );
}
