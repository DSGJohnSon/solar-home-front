import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn, shuffleArray } from "@/lib/utils";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "../../../ui/button";
import {
  HomeHeroProps,
  ServiceCard,
} from "@/components/sections/heros/home-hero/types";
import { Tiles } from "@/components/backgrounds/tiles";

export function HomeHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  services = [],
  className,
  children,
}: HomeHeroProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Smooth scroll logic for the carousel
  const baseX = useMotionValue(0);
  const speed = useSpring(1, { damping: 50, stiffness: 400 });

  React.useEffect(() => {
    if (isHovered) {
      speed.set(0);
    } else {
      speed.set(1);
    }
  }, [isHovered, speed]);

  useAnimationFrame((t, delta) => {
    // Basic speed = 74.4 px/s (matches programs.length * 5 duration)
    const moveBy = -0.0744 * delta * speed.get();
    baseX.set(baseX.get() + moveBy);
  });

  const [shuffledServices, setShuffledServices] = React.useState(services);

  React.useEffect(() => {
    setShuffledServices(shuffleArray([...services]));
  }, [services]);

  const itemRef = React.useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = React.useState(372);

  React.useEffect(() => {
    if (!itemRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect();
        if (rect.width > 0) {
          setItemWidth(rect.width + 16);
        }
      }
    });
    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [shuffledServices]);

  const halfLength = Math.ceil(shuffledServices.length / 2);
  const firstHalf = shuffledServices.slice(0, halfLength);
  const secondHalf = shuffledServices.slice(halfLength);

  const xDesktop = useTransform(baseX, (v) => {
    const w = shuffledServices.length * itemWidth;
    return w ? `${v % w}px` : "0px";
  });
  const xMobile1 = useTransform(baseX, (v) => {
    const w = firstHalf.length * itemWidth;
    return w ? `${(v * 0.5) % w}px` : "0px";
  });
  const xMobile2 = useTransform(baseX, (v) => {
    const w = secondHalf.length * itemWidth;
    return w ? `${-(w * 4) + (Math.abs(v * 0.5) % w)}px` : "0px";
  });

  const renderServiceCard = (service: ServiceCard, index: number) => (
    <motion.div
      key={index + service.title}
      className="shrink-0 cursor-pointer relative overflow-hidden h-[24svh] sm:h-[28svh] md:h-[35svh] aspect-4/3 sm:aspect-video group"
    >
      <Link
        href={service.href}
        title={service.title}
        className="absolute inset-0 z-20"
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/35 group-hover:via-transparent to-black/70 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-b-[6px] md:border-b-8 border-primary flex flex-col lg:gap-2">
          <span className="text-[10px] md:text-[12px] font-medium text-white/80 tracking-widest">
            {service.category}
          </span>
          <h3 className="text-[18px] md:text-[24px] font-semibold text-white leading-[1.3]">
            {service.title}
          </h3>
        </div>
        <div className="hidden lg:flex absolute bottom-4 right-4 md:bottom-8 md:right-8 items-center gap-1.5 md:gap-2 text-white">
          <span className="text-sm md:text-lg after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
            Découvrir
          </span>
          <ArrowRightIcon className="size-4 md:size-5" />
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className,
      )}
      role="banner"
      aria-label="Hero section"
    >
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center max-w-6xl mt-36 lg:mt-52 pointer-events-none"
          style={{ gap: "32px" }}
        >
          {/* Title */}
          <h1
            className="font-title font-bold text-5xl text-center text-balance color-zinc-500 pointer-events-none"
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: "1.1",
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            className="pointer-events-auto"
            style={{
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.6",
              color: "#4a5568",
              maxWidth: "600px",
            }}
          >
            {subtitle}
          </p>

          {/* Action Buttons */}
          {(primaryAction || secondaryAction) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
            >
              {primaryAction && (
                <Link href={primaryAction.href} title={primaryAction.title}>
                  <Button
                    variant="default"
                    size={"xl"}
                    className="cursor-pointer"
                  >
                    {primaryAction.label}
                  </Button>
                </Link>
              )}

              {secondaryAction && (
                <Link href={secondaryAction.href} title={secondaryAction.title}>
                  <Button
                    variant="outline"
                    size={"xl"}
                    className="cursor-pointer"
                  >
                    {secondaryAction.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}

          {/* Disclaimer */}
          {disclaimer && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pointer-events-auto"
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#718096",
                fontStyle: "italic",
              }}
            >
              {disclaimer}
            </motion.p>
          )}

          {/* Social Proof */}
          {/* {socialProof && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-row items-center gap-3 pointer-events-auto"
            >
              <div className="flex flex-row -space-x-2">
                {socialProof.avatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="rounded-full border-2 border-white"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#4a5568",
                }}
              >
                {socialProof.text}
              </span>
            </motion.div>
          )} */}
        </motion.div>
      </div>

      {/* Program Cards Carousel */}
      {shuffledServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          id="services"
          className="relative z-10 w-full overflow-hidden py-16 pointer-events-none"
        >
          {/* Gradient Overlays */}
          {/* <div className="hidden lg:block absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] bg-linear-to-r from-zinc-50 to zinc-50/0" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] bg-linear-to-l from-zinc-50 to zinc-50/0" /> */}

          {/* Measurement container hidden */}
          <div
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none flex gap-4 h-[24svh] sm:h-[28svh] md:h-[35svh]"
          >
            <div ref={itemRef} className="aspect-4/3 sm:aspect-video h-full" />
          </div>

          {/* Desktop Single Carousel */}
          <motion.div
            className="hidden md:flex items-center gap-4 pl-4 w-max pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ x: xDesktop }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                {shuffledServices.map((service, index) =>
                  renderServiceCard(service, index),
                )}
              </div>
            ))}
          </motion.div>

          {/* Mobile Double Carousel */}
          <div className="flex flex-col gap-4 md:hidden pointer-events-auto">
            <motion.div
              className="flex items-center gap-4 pl-4 w-max"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ x: xMobile1 }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0">
                  {firstHalf.map((service, index) =>
                    renderServiceCard(service, index),
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-4 pl-4 w-max"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ x: xMobile2 }}
            >
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 shrink-0">
                  {secondHalf.map((service, index) =>
                    renderServiceCard(service, index),
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
      <Tiles className="w-full h-full" tileSize="md" />
    </section>
  );
}
