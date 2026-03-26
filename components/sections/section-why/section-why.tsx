import { motion } from "framer-motion";
import { Card3 } from "./card3";
import { Card4 } from "./card4";
import { Card5 } from "./card5";

export function SectionWhy() {
  return (
    <section className="bg-linear-to-t from-zinc-50 to-white py-12 md:py-24 px-8 xl:px-48 w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance w-2/3 text-foreground font-title uppercase relative before:content-[''] before:block before:w-[50px] before:h-1 before:bg-primary before:absolute before:-top-4 before:left-0"
      >
        Pourquoi choisir une solution adhésive ?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-sm md:text-base text-muted-foreground"
      >
        Une alternative intelligente aux travaux de remplacement
      </motion.p>
      <div className="mx-auto mt-8">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-full xl:col-span-2"
            >
              <Card3 />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full sm:col-span-3 xl:col-span-2"
            >
              <Card4 />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-full sm:col-span-3 xl:col-span-2"
            >
              <Card5 />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
