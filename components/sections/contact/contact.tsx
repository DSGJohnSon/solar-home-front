"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Paperclip } from "lucide-react";
import { ContactSectionProps } from "@/datas/types";

const PROJECT_TYPES = [
  "Films pour vitrages",
  "Adhésifs décoratifs",
  "Vitrophanie / stickage",
];

const BUILDING_TYPES = [
  "Habitation",
  "Commerce",
  "Bureau / local professionnel",
  "Autre",
];

export function ContactSection({ title, subtitle }: ContactSectionProps) {
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [buildingType, setBuildingType] = useState<string>("");
  const [clientType, setClientType] = useState<string>("");

  const toggleProjectType = (type: string) => {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-zinc-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="block w-12 h-1 bg-primary mb-6" />
          <h2
            className="font-title font-bold uppercase text-zinc-950 mb-4"
            style={{ fontSize: "clamp(18px, 3vw, 32px)" }}
          >
            {title}
          </h2>
          <p className="text-zinc-600 text-sm md:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden border border-border">
          {/* ── COORDONNÉES ─────────────────────────────── */}
          <div className="lg:col-span-2 order-2 lg:order-1 bg-zinc-900 p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-title font-bold uppercase text-sm tracking-wider text-zinc-400 mb-8">
                Coordonnées
              </h3>
              <div className="space-y-7">
                {[
                  { Icon: Phone, label: "Téléphone", val: "02 47 XX XX XX" },
                  { Icon: Mail, label: "Email", val: "contact@solarhome37.fr" },
                  { Icon: MapPin, label: "Localisation", val: "Vouvray (37)" },
                  {
                    Icon: Clock,
                    label: "Horaires",
                    val: "Lun – Ven : 08h – 12h / 14h – 18h",
                  },
                ].map(({ Icon, label, val }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-[11px] uppercase tracking-widest font-medium mb-0.5">
                        {label}
                      </p>
                      <p className="text-white text-sm font-semibold">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-zinc-600 italic text-xs mt-10 pt-8 border-t border-zinc-800">
              Solar Home 37 — Expert en solutions adhésives et décoratives à
              Tours et en Indre-et-Loire.
            </p>
          </div>

          {/* ── FORMULAIRE ──────────────────────────────── */}
          <div className="lg:col-span-3 order-1 lg:order-2 p-8 md:p-10 bg-white">
            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              {/* Infos générales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Nom / Prénom *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    className="h-11 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Téléphone *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="06 12 34 56 78"
                    className="h-11 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    className="h-11 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Vous êtes
                  </Label>
                  <div className="flex gap-4 pt-1.5">
                    {["Particulier", "Professionnel"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="clientType"
                          value={type}
                          checked={clientType === type}
                          onChange={() => setClientType(type)}
                          className="accent-primary w-4 h-4"
                        />
                        <span className="text-sm text-zinc-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="address"
                  className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                >
                  Adresse du projet
                </Label>
                <Input
                  id="address"
                  placeholder="Ville, code postal"
                  className="h-11 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50"
                />
              </div>

              {/* Type de projet */}
              <div className="space-y-2.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Type de projet
                </Label>
                <div className="flex flex-wrap gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={projectTypes.includes(type)}
                        onChange={() => toggleProjectType(type)}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-zinc-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type de bâtiment */}
              <div className="space-y-2.5">
                <Label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Type de bâtiment
                </Label>
                <div className="flex flex-wrap gap-3">
                  {BUILDING_TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="buildingType"
                        value={type}
                        checked={buildingType === type}
                        onChange={() => setBuildingType(type)}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-zinc-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                >
                  Description du projet *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre besoin en quelques mots : type de surface, objectif, contraintes particulières..."
                  className="min-h-30 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50 resize-none"
                />
              </div>

              {/* Surface */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="surface"
                  className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                >
                  Surface ou nombre de vitrages (si connu)
                </Label>
                <Input
                  id="surface"
                  placeholder="Ex : 3 fenêtres, ~12 m²"
                  className="h-11 border-zinc-200 focus-visible:ring-primary bg-zinc-50/50"
                />
              </div>

              {/* Photos */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="photos"
                  className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
                >
                  Photos{" "}
                  <span className="text-zinc-400 normal-case font-normal tracking-normal">
                    — recommandé pour une estimation plus précise
                  </span>
                </Label>
                <label
                  htmlFor="photos"
                  className="flex items-center gap-3 h-11 px-4 border border-zinc-200 bg-zinc-50/50 cursor-pointer hover:bg-zinc-100 transition-colors"
                >
                  <Paperclip className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="text-sm text-zinc-400">
                    Cliquez pour joindre des photos (vitrages, mobilier, vitrine)
                  </span>
                  <input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    className="sr-only"
                  />
                </label>
              </div>

              {/* Submit */}
              <div>
                <Button
                  size="xl"
                  className="w-full md:w-auto h-12 px-10 font-bold uppercase tracking-widest group"
                >
                  Obtenir mon devis gratuit
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>

              <p className="text-xs text-zinc-400">
                En envoyant ce formulaire, vous acceptez notre politique de
                confidentialité. Vos données sont protégées et ne sont jamais
                partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
