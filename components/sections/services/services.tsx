"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LucideArrowRight } from "lucide-react";

export function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={cn(
        "py-12 md:py-24 px-8 lg:px-48 w-full bg-linear-to-b from-zinc-100 to-white",
        "lg:flex items-center gap-8 space-y-8 lg:space-y-0",
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/3"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance w-full text-foreground font-title uppercase relative mt-4 lg:mt-0 before:content-[''] before:block before:w-[50px] before:h-1 before:bg-primary before:absolute before:-top-4 before:left-0">
          Nos services chez SolarHome
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground">
          Solar Home™ propose la pose de films solaires, films de sécurité,
          adhésifs décoratifs et solutions de vitrophanie pour vitrages
          professionnels et particuliers.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mt-4 md:mt-8 pointer-events-auto"
        >
          <Link href="#" title="">
            <Button className="cursor-pointer" size={isMobile ? "lg" : "xl"}>
              Demander un devis
            </Button>
          </Link>
          <Link href="#" title="">
            <Button
              variant="outline"
              className="cursor-pointer"
              size={isMobile ? "lg" : "xl"}
            >
              Nos réalisations
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <div className="w-full lg:w-2/3 h-auto lg:h-[70svh] lg:flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 h-full"
        >
          <Link
            href="#"
            title=""
            className="relative block bg-red-100 w-full h-[25svh] lg:h-full mb-[4svh] lg:mb-0 hover:cursor-pointer group"
          >
            <div className="absolute inset-0 z-2 bg-linear-to-t from-zinc-950/80 opacity-50 group-hover:opacity-100 to-transparent w-full h-full border-b- 0 group-hover:border-b-16 border-primary transition-all duration-300 ease-in-out"></div>
            <Image
              src="/images/services-solar-home-vitrages-2.webp"
              alt=""
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 group-hover:bottom-7 left-4 z-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance w-full text-white font-title uppercase relative mt-4 lg:mt-0">
                Films pour vitrages
              </h3>
              <p className="relative inline-flex items-center text-white before:content-[''] before:block before:w-0 group-hover:before:w-full before:h-px before:bg-white before:absolute before:-bottom-0.5 before:left-0 before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-full">
                Découvrir les services
                <LucideArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full lg:w-1/2 h-[54svh] lg:h-full space-y-[4svh] lg:space-y-0"
        >
          <Link
            href="#"
            title=""
            className="relative block bg-red-100 w-full h-[25svh] lg:h-1/2 hover:cursor-pointer group"
          >
            <div className="absolute inset-0 z-2 bg-linear-to-t from-zinc-950/80 opacity-50 group-hover:opacity-100 to-transparent w-full h-full border-b- 0 group-hover:border-b-16 border-primary transition-all duration-300 ease-in-out"></div>
            <Image
              src="/images/services-solar-home-decoratifs.webp"
              alt=""
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 group-hover:bottom-7 left-4 z-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance w-full text-white font-title uppercase relative mt-4 lg:mt-0">
                Adhésifs décoratifs
              </h3>
              <p className="relative inline-flex items-center text-white before:content-[''] before:block before:w-0 group-hover:before:w-full before:h-px before:bg-white before:absolute before:-bottom-0.5 before:left-0 before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-full">
                Découvrir les services
                <LucideArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
              </p>
            </div>
          </Link>
          <Link
            href="#"
            title=""
            className="relative block bg-red-100 w-full h-[25svh] lg:h-1/2 hover:cursor-pointer group"
          >
            <div className="absolute inset-0 z-2 bg-linear-to-t from-zinc-950/80 opacity-50 group-hover:opacity-100 to-transparent w-full h-full border-b- 0 group-hover:border-b-16 border-primary transition-all duration-300 ease-in-out"></div>
            <Image
              src="/images/services-solar-home-vitrophanie.webp"
              alt=""
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-4 group-hover:bottom-7 left-4 z-2 transition-all duration-300 ease-in-out">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance w-full text-white font-title uppercase relative mt-4 lg:mt-0">
                Vitrophanie & Publicité
              </h3>
              <p className="relative inline-flex items-center text-white before:content-[''] before:block before:w-0 group-hover:before:w-full before:h-px before:bg-white before:absolute before:-bottom-0.5 before:left-0 before:transition-all before:duration-300 before:ease-in-out before:group-hover:w-full">
                Découvrir les services
                <LucideArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
