"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { ContactSectionProps } from "@/datas/types";

export function ContactSection({ title, subtitle }: ContactSectionProps) {
  return (
    <section className="py-12 md:py-24 px-6 lg:px-48 w-full bg-zinc-50 overflow-hidden">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance w-full lg:w-1/2 text-foreground font-title uppercase relative before:content-[''] before:block before:w-[50px] before:h-1 before:bg-primary before:absolute before:-top-4 before:left-0">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg text-balance">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-200 bg-white">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-zinc-900 p-8 md:p-12 text-white relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8 font-title uppercase tracking-wider">
                  Coordonnées
                </h3>

                <div className="space-y-8">
                  {[
                    { Icon: Phone, label: "Téléphone", val: "02 47 XX XX XX" },
                    {
                      Icon: Mail,
                      label: "Email",
                      val: "contact@solarhome37.fr",
                    },
                    {
                      Icon: MapPin,
                      label: "Localisation",
                      val: "Vouvray (37)",
                    },
                    {
                      Icon: Clock,
                      label: "Horaires",
                      val: "Lun - Ven : 08h00 - 12h00 / 14h00 - 18h00",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                        <item.Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm font-medium uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.val}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 pt-12 border-t border-zinc-800"
              >
                <p className="text-zinc-400 italic text-sm">
                  SolarHome™ - Expert en solutions de vitrage haute performance.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 p-8 md:p-12 bg-white"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="name"
                    className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    placeholder="Jean Dupont"
                    className="h-12 border-zinc-200 focus-visible:ring-primary focus-visible:border-primary transition-all bg-zinc-50/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    className="h-12 border-zinc-200 focus-visible:ring-primary focus-visible:border-primary transition-all bg-zinc-50/50"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="phone"
                    className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="06 12 34 56 78"
                    className="h-12 border-zinc-200 focus-visible:ring-primary focus-visible:border-primary transition-all bg-zinc-50/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor="subject"
                    className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    Sujet
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Demande de devis"
                    className="h-12 border-zinc-200 focus-visible:ring-primary focus-visible:border-primary transition-all bg-zinc-50/50"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="space-y-2"
              >
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold uppercase tracking-wider text-zinc-500"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet en quelques mots..."
                  className="min-h-[150px] border-zinc-200 focus-visible:ring-primary focus-visible:border-primary transition-all bg-zinc-50/50 resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Button
                  size="xl"
                  className="w-full md:w-auto h-14 px-12 text-lg font-bold uppercase tracking-widest group shadow-lg shadow-primary/20"
                >
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground mt-4">
                En envoyant ce formulaire, vous acceptez notre politique de
                confidentialité. Toutes vos données sont protégées.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
