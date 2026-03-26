"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  title: string;
  subtitle?: string;
}

export function ContactCTA({ title, subtitle }: ContactCTAProps) {
  return (
    <section className="py-12 md:py-16 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="flex-1">
          <span className="block w-10 h-1 bg-primary mb-4" />
          <h2
            className="font-title font-bold uppercase text-white"
            style={{ fontSize: "clamp(18px, 2.5vw, 28px)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-zinc-400 mt-2 text-sm leading-relaxed max-w-md">
              {subtitle}
            </p>
          )}
        </div>
        <div className="shrink-0">
          <Link href="/contact" title="Contacter Solar Home 37 — Devis gratuit">
            <Button variant="default" size="xl" className="cursor-pointer">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
