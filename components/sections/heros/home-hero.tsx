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
import { Button } from "../../ui/button";
import { HomeHeroProps } from "@/types/sections/heros/hero-home";

export function HomeHero({
  logo = "",
  logoMobile = "",
  navigation = [],
  ctaButton,
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
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

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

  const x = useTransform(baseX, (v) => `${v % (services.length * 372)}px`);

  const handleMouseEnter = (hasDropdown?: boolean) => {
    if (hasDropdown) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Délai de 300ms avant la fermeture
  };

  React.useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const [shuffledServices, setShuffledServices] = React.useState(services);

  React.useEffect(() => {
    setShuffledServices(shuffleArray([...services]));
  }, [services]);

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden",
        className,
      )}
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%)",
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16 py-8"
      >
        {/* Logo */}
        {logo && logo !== "" && (
          <div
            className={cn(
              logoMobile && logoMobile !== "" ? "w-12 lg:w-48" : "w-24",
            )}
          >
            <Image
              src={logo}
              alt="Logo SolarHome"
              width={1000}
              height={395}
              className={cn(
                logoMobile && logoMobile !== "" ? "hidden lg:block" : "block",
              )}
            />
            {logoMobile && logoMobile !== "" && (
              <Image
                src={logoMobile}
                alt="Logo SolarHome"
                width={1000}
                height={1000}
                className="lg:hidden"
              />
            )}
          </div>
        )}

        {/* Navigation */}
        <nav
          className="hidden lg:flex flex-row items-center gap-8"
          aria-label="Main navigation"
        >
          {navigation.map((item, index) =>
            item.hasDropdown ? (
              <div
                key={index}
                onClick={
                  item.hasDropdown ? () => setIsDropdownOpen(true) : () => {}
                }
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-row items-center gap-1 px-4 py-2 hover:bg-zinc-950/2 hover:cursor-pointer"
              >
                <span className="text-zinc-950">{item.label}</span>
                {item.hasDropdown && (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={cn(
                        "transition-all duration-300",
                        isDropdownOpen ? "-rotate-180" : "",
                      )}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute left-0 mt-4 space-y-4 min-w-[300px] w-full bg-zinc-50 shadow-lg p-4 border border-zinc-300 cursor-default",
                        "transition-all duration-300",
                        isDropdownOpen
                          ? "top-full opacity-100"
                          : "top-[110%] opacity-0 pointer-events-none",
                      )}
                    >
                      {navigation[index].dropdownContent?.groups.map(
                        (group, groupIndex) => (
                          <div key={groupIndex}>
                            <span className="relative block text-left pl-2 mb-1 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-3/4 before:bg-zinc-950">
                              {group.title}
                            </span>
                            {navigation[index].dropdownContent?.groups[
                              groupIndex
                            ].links.map((groupItem, groupItemIndex) => (
                              <Link
                                key={groupItemIndex}
                                href={groupItem.href}
                                title={groupItem.title}
                                onClick={
                                  item.hasDropdown
                                    ? () => setIsDropdownOpen(!isDropdownOpen)
                                    : () => {}
                                }
                                className="group flex flex-row items-center justify-between w-full gap-1 cursor-pointer text-left hover:opacity-70 transition-opacity"
                                style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  color: "#4a5568",
                                }}
                              >
                                {groupItem.title}
                                <ArrowRightIcon className="size-3 opacity-0 -translate-x-3 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
                              </Link>
                            ))}
                          </div>
                        ),
                      )}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                title={item.title}
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                className="relative flex flex-row items-center gap-1 px-4 py-2 hover:bg-zinc-950/2 hover:cursor-pointer"
              >
                <span className="text-zinc-950">{item.label}</span>
              </Link>
            ),
          )}
        </nav>

        {/* CTA Button */}
        {ctaButton && (
          <Link href={ctaButton.href} title={ctaButton.title}>
            <Button variant="shimmer" size={"xxl"} className="cursor-pointer">
              {ctaButton.label}
            </Button>
          </Link>
        )}
      </motion.header>

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-6xl mt-12 lg:mt-32"
            style={{ gap: "32px" }}
          >
            {/* Title */}
            <h1
              className="font-title font-bold text-5xl text-center text-balance color-zinc-500 uppercase"
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
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                {primaryAction && (
                  <Link href={primaryAction.href} title={primaryAction.title}>
                    <Button
                      variant="default"
                      size={"xl"}
                      className="cursor-pointer"
                    >
                      {primaryAction.label}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7 10H13M13 10L10 7M13 10L10 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    title={secondaryAction.title}
                  >
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
            {socialProof && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-row items-center gap-3"
              >
                <div className="flex flex-row -space-x-2">
                  {socialProof.avatars.map((avatar, index) => (
                    <img
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
            )}
          </motion.div>
        </div>
      )}

      {/* Program Cards Carousel */}
      {shuffledServices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          id="services"
          className="relative z-10 w-full overflow-hidden py-16"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] bg-linear-to-r from-zinc-50 to zinc-50/0" />
          <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none w-[150px] bg-linear-to-l from-zinc-50 to zinc-50/0" />

          {/* Scrolling Container */}
          <motion.div
            className="flex items-center gap-4 pl-4 w-max"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ x }}
          >
            {/* Duplicate programs for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0">
                {[...shuffledServices].map((service, index) => (
                  <motion.div
                    key={index + service.title}
                    className="shrink-0 cursor-pointer relative overflow-hidden h-[35svh] aspect-video group"
                  >
                    {/* Image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/35 group-hover:via-transparent to-black/70 transition-colors duration-500" />

                    {/* Text Content */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-6 border-b-8 border-primary"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "rgba(255, 255, 255, 0.8)",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {service.category}
                      </span>
                      <h3
                        style={{
                          fontSize: "24px",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          lineHeight: "1.3",
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white">
                      <span className="text-lg after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
                        Découvrir
                      </span>
                      <ArrowRightIcon className="size-5" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
