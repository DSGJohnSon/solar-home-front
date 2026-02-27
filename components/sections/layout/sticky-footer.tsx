"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "../../ui/button";
import Image from "next/image";
import Link from "next/link";
import { StickyFooterProps } from "@/types/sections/layout/footer";
import footerData from "@/datas/layout/footer.json";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

const iconMap = {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
  LinkedinLogoIcon,
};

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn("relative h-screen lg:h-[500px] w-full border-t-2 border-zinc-300", className)}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      {...props}
    >
      <div className="fixed bottom-0 h-screen lg:h-[500px] w-full">
        <div className="sticky top-0 lg:top-[calc(100vh-500px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-5 border-t px-4 py-8 md:px-12">
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 contain-strict"
            >
              <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>
            <div className="mt-4 lg:mt-24 flex flex-col gap-8 md:flex-row xl:mt-16 mx-2 lg:mx-24">
              <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                <div className="flex items-center lg:block w-full gap-6">
                  <Image
                    src="/logos/solar-home_logo_icon_gold-black.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-[50px] lg:w-1/4"
                  />
                  <div>
                    <p className="text-muted-foreground mt-0 lg:mt-8 text-xs lg:text-sm md:mt-0 mr-0 lg:mr-8 lg:text-balance">
                      <span className="font-bold">Solar Home</span>, votre
                      partenaire spécialiste des films solaires, films de
                      sécurité, films design et adhésifs décoratifs à Tours et
                      en Indre-et-Loire (37).
                    </p>
                    <div className="flex gap-2 mt-4">
                      {footerData.socialLinks.map((link, index) => {
                        const Icon = iconMap[link.icon as keyof typeof iconMap];
                        return (
                          <Link href={link.href} key={index} target="_blank" title={link.title}>
                            <Button
                              size="icon"
                              variant="outline"
                              className="size-8 cursor-pointer"
                            >
                              {Icon && (
                                <Icon
                                  className="size-5"
                                  weight="fill"
                                  color="#505050"
                                />
                              )}
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:w-full">
                {footerData.footerLinkGroups.map((group, index) => (
                  <AnimatedContainer
                    key={group.label}
                    delay={0.1 + index * 0.1}
                    className="w-full"
                  >
                    <div className="">
                      <h3 className="text-sm uppercase">{group.label}</h3>
                      <ul className="text-muted-foreground mt-4 space-y-2  text-sm md:text-xs lg:text-sm">
                        {group.links.map((link) => {
                          const iconName = (link as any).icon;
                          const Icon = iconName
                            ? iconMap[iconName as keyof typeof iconMap]
                            : null;
                          return (
                            <li key={link.title}>
                              <a
                                href={link.href}
                                className="hover:text-foreground inline-flex items-center transition-all duration-300"
                              >
                                {Icon && (
                                  <Icon className="size-5" weight="fill" />
                                )}
                                {link.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>

            <div className="text-muted-foreground flex flex-col items-center justify-between gap-2 border-t pt-4 text-sm md:flex-row">
              <div className="flex flex-col items-center justify-between gap-2 md:flex-row text-xs lg:text-base mb-4 lg:mb-0">
                <p>
                  © 2026{" "}
                  {new Date().getFullYear() !== 2026
                    ? " - " + new Date().getFullYear()
                    : ""}{" "}
                  Solar Home™ | Tous droits réservés.
                </p>
                <p>
                  Design & Développement par{" "}
                  <Link href="#" className="cursor-pointer underline">
                    Fred F.
                  </Link>
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="cursor-pointer hover:text-zinc-500">Mentions légales</Link>
                <Link href="#" className="cursor-pointer hover:text-zinc-500">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
