"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { headerData } from "@/datas/layout/header";
import { HeaderProps } from "./types";

export function Header({ className }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const { logo, logoMobile, navigation, ctaButton } = headerData;

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
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
        className={cn(isScrolled ? "opacity-100" : "opacity-0", "absolute bottom-0 left-0 right-0 w-full h-[2px] bg-zinc-100 z-29 origin-left pointer-events-none transition-all duration-500")}
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
                <span className="text-zinc-950 font-medium">{item.label}</span>
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

                {/* Mega Dropdown */}
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white shadow-xl border border-zinc-100 rounded-2xl overflow-hidden cursor-default",
                    "transition-all duration-300 origin-top",
                    isDropdownOpen
                      ? "top-full opacity-100 scale-100"
                      : "top-[110%] opacity-0 scale-95 pointer-events-none",
                  )}
                >
                  <div className="flex flex-row">
                    {/* Left: Columns */}
                    <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                      {item.dropdownContent?.columns.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-4">
                          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                            {column.title}
                          </h4>
                          <div className="flex flex-col gap-2">
                            {column.links.map((link, linkIndex) => (
                              <Link
                                key={linkIndex}
                                href={link.href}
                                title={link.title}
                                className="group flex flex-row items-center justify-between text-zinc-500 hover:text-zinc-900 transition-colors py-1"
                              >
                                <span className="text-[15px]">
                                  {link.label}
                                </span>
                                <ArrowRightIcon className="size-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right: Featured */}
                    {item.dropdownContent?.featured && (
                      <div className="w-[320px] bg-zinc-50/50 p-8 border-l border-zinc-100">
                        <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">
                          {item.dropdownContent.featured.title}
                        </h4>
                        <div className="space-y-6">
                          {item.dropdownContent.featured.items.map(
                            (fItem, fIndex) => (
                              <Link
                                key={fIndex}
                                href={fItem.href}
                                className="group flex items-start gap-4"
                              >
                                <div className="shrink-0 size-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-zinc-900 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                  <fItem.icon size={20} weight="duotone" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1 text-[15px] font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                                    {fItem.title}
                                    <ArrowRightIcon className="size-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                                  </div>
                                  <p className="text-xs text-zinc-500 leading-relaxed">
                                    {fItem.description}
                                  </p>
                                </div>
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    )}
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
                <span className="text-zinc-950 font-medium">{item.label}</span>
              </Link>
            ),
          )}
      </nav>

      {/* CTA Button */}
      {ctaButton && (
        <div className="pointer-events-auto">
          <Link href={ctaButton.href} title={ctaButton.title}>
            <Button
              variant="shimmer"
              size={isScrolled ? "lg" : "xxl"}
              className="cursor-pointer transition-all duration-500"
            >
              {ctaButton.label}
            </Button>
          </Link>
        </div>
      )}
    </motion.header>
  );
}
