"use client";

import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headerData } from "@/datas/layout/header";
import { HeaderProps } from "./types";
import { LucideArrowRight, LucideBox } from "lucide-react";

const featuredItems = [
  {
    label: "Films pour Vitrages",
    src: "/images/services-solar-home-vitrages-2.webp",
    description:
    "Améliorez le confort, la sécurité et l'efficacité énergétique de vos vitrages grâce à nos films techniques et solaires.",
    links: [
      { label: "Films design & intimité", href: "/films-vitrages/films-design-et-intimite" },
      { label: "Films sécurité", href: "/films-vitrages/films-securite" },
      {
        label: "Films solaires",
        href: "/films-vitrages/films-solaires",
      },
      { label: "Films high-tech", href: "/films-vitrages/films-high-tech" },
    ],
    servicePageHref: "/films-vitrages",
    ctaLabel: "Nos services vitrages",
  },
  {
    label: "Adhésifs décoratifs",
    src: "/images/services-solar-home-decoratifs.webp",
    description:
      "Personnalisez vos intérieurs avec nos adhésifs haut de gamme : mobilier, murs, sols. Un résultat professionnel, sans travaux.",
    links: [
      {
        label: "Adhésifs décoratifs",
        href: "/films-decoratifs/adhesifs-decoratifs",
      },
      {
        label: "Rénovation mobilier",
        href: "/films-decoratifs/renovation-mobilier",
      },
      {
        label: "Décoration intérieure",
        href: "/films-decoratifs/decoration-interieure",
      },
    ],
    servicePageHref: "/films-decoratifs",
    ctaLabel: "Nos services décoratifs",
  },
  {
    label: "Stickage publicitiare",
    src: "/images/services-solar-home-vitrophanie.webp",
    description:
      "Valorisez votre espace commercial avec des impressions sur vitrine percutantes : logos, enseignes, déco de boutique.",
    links: [
      { label: "Vitrophanie", href: "/films-publicitaires/vitrophanie" },
      { label: "Lettrages & Découpe vinyle", href: "/films-publicitaires/lettrages-decoupe-vinyle" },
      { label: "Logos & Visuels sur vitrages", href: "/films-publicitaires/logo-visuels-sur-vitrages" },
    ],
    servicePageHref: "/films-publicitaires",
    ctaLabel: "Nos services publicitaires",
  },
];

export function Header({ className, isDarkHero = false }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const { logo, logoMobile, logoDark, logoMobileDark, navigation, ctaButton } =
    headerData;

  // Active quand le hero est sombre ET que l'utilisateur n'a pas encore scrollé
  const showDark = isDarkHero && !isScrolled;

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-8 lg:px-16 transition-all duration-500 pointer-events-none",
        isScrolled
          ? "py-2 bg-white/80 backdrop-blur-sm"
          : "py-8 bg-transparent border-transparent",
        className,
      )}
    >
      {/* Scroll Progress Border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-30 origin-left pointer-events-none"
        style={{ scaleX }}
      />
      <motion.div
        className={cn(
          isScrolled ? "opacity-100" : "opacity-0",
          "absolute bottom-0 left-0 right-0 w-full h-[2px] bg-zinc-100 z-29 origin-left pointer-events-none transition-all duration-500",
        )}
      />
      {/* Logo */}
      {logo && logo !== "" && (
        <div
          className={cn(
            isScrolled
              ? "w-10 lg:w-28"
              : logoMobile && logoMobile !== ""
                ? "w-12 lg:w-48"
                : "w-24",
            "pointer-events-auto transition-all duration-500",
          )}
        >
          <Link href="/">
            {/* Desktop logo */}
            <Image
              src={showDark && logoDark ? logoDark : logo}
              alt="Logo Solar Home 37"
              width={1000}
              height={395}
              className={cn(
                logoMobile && logoMobile !== "" ? "hidden lg:block" : "block",
              )}
            />
            {/* Mobile logo */}
            {logoMobile && logoMobile !== "" && (
              <Image
                src={showDark && logoMobileDark ? logoMobileDark : logoMobile}
                alt="Logo Solar Home 37"
                width={1000}
                height={1000}
                className="lg:hidden"
              />
            )}
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav
        className="hidden lg:flex flex-row items-center gap-8 pointer-events-auto"
        aria-label="Main navigation"
      >
        {navigation &&
          navigation.length > 0 &&
          navigation.map((item, index) =>
            item.hasDropdown ? (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                onMouseLeave={handleMouseLeave}
                className="relative flex flex-row items-center gap-1 px-4 py-2 hover:cursor-pointer group/navitem"
              >
                <span
                  className={cn(
                    "font-medium transition-colors duration-300",
                    showDark ? "text-white" : "text-zinc-950",
                  )}
                >
                  {item.label}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={cn(
                    "transition-all duration-300",
                    isDropdownOpen ? "-rotate-180" : "",
                    showDark ? "text-white" : "text-zinc-950",
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

                {/* Mega Dropdown */}
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-12 w-[75svw] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)] rounded-2xl cursor-default",
                    "transition-all duration-300 origin-top",
                    isScrolled ? "mt-2" : "mt-12",
                    isDropdownOpen
                      ? "top-full opacity-100 scale-100"
                      : "top-[110%] opacity-0 scale-95 pointer-events-none",
                  )}
                >
                  <div className="flex flex-row h-[50svh] bg-white rounded-2xl overflow-hidden">
                    {/* Left: Featured */}
                    <div className="w-1/3 h-[50svh] p-4 pr-0 relative">
                      <div className="h-full w-full flex flex-col space-y-4">
                        {featuredItems.map((feat, featIndex) => {
                          const isActive = activeFeaturedIndex === featIndex;
                          return (
                            <button
                              key={featIndex}
                              onClick={() => setActiveFeaturedIndex(featIndex)}
                              className={cn(
                                "flex-1 relative text-left cursor-pointer transition-all duration-300",
                                isActive
                                  ? "opacity-100 border-l-8 border-primary"
                                  : "opacity-50 hover:opacity-75 mr-4",
                              )}
                            >
                              <div
                                className={cn(
                                  "bg-linear-to-tr from-black to-black/20 absolute block inset-0 z-2",
                                  isActive ? "" : "",
                                )}
                              ></div>
                              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 uppercase text-lg xl:text-2xl font-bold text-nowrap text-center">
                                {feat.label}
                              </span>
                              <Image
                                src={feat.src}
                                alt={feat.label}
                                fill
                                className="object-cover"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col justify-between p-10 border-l border-l-zinc-600 bg-linear-to-r from-zinc-50/70 to white">
                      {/* Top: title + description */}
                      <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                          Nos services
                        </span>
                        <h3 className="text-4xl font-bold text-zinc-900 leading-tight">
                          {featuredItems[activeFeaturedIndex].label}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed xl:max-w-sm mt-1">
                          {featuredItems[activeFeaturedIndex].description}
                        </p>
                      </div>

                      {/* Middle: links grid */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        {featuredItems[activeFeaturedIndex].links.map(
                          (link, i) => (
                            <Link
                              key={i}
                              href={link.href}
                              onClick={() => setIsDropdownOpen(false)}
                              className="group flex items-center gap-3 py-2 border-b border-zinc-100 hover:border-primary/30 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                              <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                                {link.label}
                              </span>
                            </Link>
                          ),
                        )}
                      </div>

                      {/* Bottom: CTA */}
                      <Link
                        href={featuredItems[activeFeaturedIndex].servicePageHref}
                        onClick={() => setIsDropdownOpen(false)}
                        className="self-start group flex items-center gap-3 px-5 py-3 bg-zinc-900 hover:bg-primary text-white text-sm font-semibold rounded-xl transition-all duration-300"
                      >
                        <LucideBox />
                        {featuredItems[activeFeaturedIndex].ctaLabel ?? "Découvrir tous nos services"}
                        <LucideArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                title={item.title}
                onMouseEnter={() => handleMouseEnter(item.hasDropdown)}
                className="relative flex flex-row items-center gap-1 px-4 py-2 hover:cursor-pointer"
              >
                <span
                  className={cn(
                    "font-medium transition-colors duration-300",
                    showDark ? "text-white" : "text-zinc-950",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ),
          )}
      </nav>

      {/* CTA Button — desktop only */}
      {ctaButton && (
        <div className="hidden lg:block pointer-events-auto">
          <Link href={ctaButton.href} title={ctaButton.title}>
            <Button
              variant={showDark ? "default" : "shimmer"}
              size={isScrolled ? "lg" : "xxl"}
              className="cursor-pointer transition-all duration-500"
            >
              {ctaButton.label}
            </Button>
          </Link>
        </div>
      )}

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileMenuOpen((v) => !v)}
        className="lg:hidden pointer-events-auto relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm shadow-sm border border-zinc-100"
        aria-label="Menu"
      >
        <span className="sr-only">Menu</span>
        <motion.span
          animate={
            isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25 }}
          className="absolute block w-5 h-0.5 bg-zinc-900 top-3.5 left-2.5"
        />
        <motion.span
          animate={
            isMobileMenuOpen
              ? { opacity: 0, scaleX: 0 }
              : { opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.2 }}
          className="absolute block w-5 h-0.5 bg-zinc-900 top-[19px] left-2.5"
        />
        <motion.span
          animate={
            isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25 }}
          className="absolute block w-5 h-0.5 bg-zinc-900 top-6 left-2.5"
        />
      </button>

    </motion.header>

      {/* Mobile Menu Overlay — outside motion.header to avoid transform containing-block issue */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 0px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 0px)" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-60 bg-white flex flex-col lg:hidden pointer-events-auto"
          >
            {/* Top: logo + close */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-zinc-100">
              {logo && (
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src={logo}
                    alt="Logo Solar Home 37"
                    width={140}
                    height={55}
                    className="h-8 w-auto"
                  />
                </Link>
              )}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-100 text-zinc-500 hover:text-zinc-900 hover:border-zinc-200 transition-colors"
                aria-label="Fermer le menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {navigation?.map((item, i) =>
                item.hasDropdown ? (
                  <div key={i}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-4 text-left border-b border-zinc-100"
                    >
                      <span className="text-xl font-semibold text-zinc-900">
                        {item.label}
                      </span>
                      <motion.svg
                        animate={
                          mobileServicesOpen ? { rotate: 180 } : { rotate: 0 }
                        }
                        transition={{ duration: 0.25 }}
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-4 flex flex-col gap-4">
                            {featuredItems.map((feat, fi) => (
                              <div key={fi} className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest px-1">
                                  {feat.label}
                                </span>
                                {feat.links.map((link, li) => (
                                  <Link
                                    key={li}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-2 py-2 px-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                    <span className="text-sm">
                                      {link.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-4 text-xl font-semibold text-zinc-900 border-b border-zinc-100"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Bottom: CTA */}
            {ctaButton && (
              <div className="px-6 py-6 border-t border-zinc-100">
                <Link
                  href={ctaButton.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="shimmer"
                    size="xxl"
                    className="w-full cursor-pointer"
                  >
                    {ctaButton.label}
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
