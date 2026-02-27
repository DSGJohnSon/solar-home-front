import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import {
  SimpleSectionProps,
  SimpleSectionContentBlock,
  SimpleSectionCTA,
} from "@/types/sections/simple-section";
import { motion } from "framer-motion";

function CTAButton({ cta }: { cta: SimpleSectionCTA }) {
  // Use Phosphor icons dynamically if specified
  const Icon = cta.icon
    ? (PhosphorIcons as Record<string, React.ElementType>)[cta.icon]
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Link
        href={cta.href}
        target={cta.target}
        title={cta.title || cta.label}
        className={cn(
          buttonVariants({ variant: "default" }),
          "group h-12 px-6",
        )}
      >
        {cta.label}
        {Icon && <Icon className="ml-2 w-5 h-5" />}
      </Link>
    </motion.div>
  );
}

function ContentBlock({
  block,
  isCentered,
}: {
  block: SimpleSectionContentBlock;
  isCentered: boolean;
}) {
  if (block.type === "paragraph") {
    return (
      <p
        className="mb-6 text-muted-foreground lg:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: block.text }}
      />
    );
  }

  if (block.type === "list") {
    const isCheck = block.iconType === "check";

    return (
      <ul
        className={cn(
          "mb-8 space-y-4",
          isCentered ? "inline-block text-left" : "",
        )}
      >
        {block.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            {isCheck ? (
              <div
                className="mt-1 shrink-0 w-6 h-6 bg-primary"
                style={{
                  maskImage: "url(/icons/check.svg)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: "url(/icons/check.svg)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
            ) : (
              <div className="mt-2.5 shrink-0 w-2 h-2 rounded-full bg-primary" />
            )}
            <span
              className="text-secondary-foreground text-lg"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export function SimpleSection(props: SimpleSectionProps) {
  const { layout, title, subtitle, content, ctas, image } = props;

  const isCentered = layout === "center" || layout === "center-with-image";
  const isImageLeft = layout === "image-left";
  const isImageRight = layout === "image-right";
  const hasImage =
    !!image && (isImageLeft || isImageRight || layout === "center-with-image");

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={cn(
            "flex flex-col gap-12 lg:gap-20",
            isImageLeft && "lg:flex-row items-center",
            isImageRight && "lg:flex-row-reverse items-center",
            isCentered && "items-center text-center max-w-4xl mx-auto",
          )}
        >
          {/* IMAGE (for left/right) */}
          {hasImage && (isImageLeft || isImageRight) && (
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden aspect-4/3 lg:aspect-square relative shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* CONTENT */}
          <div
            className={cn(
              "w-full flex flex-col justify-center",
              isImageLeft || isImageRight ? "lg:w-1/2" : "w-full",
              isCentered ? "items-center" : "items-start",
            )}
          >
            {subtitle && (
              <span className="text-primary font-light tracking-widest uppercase text-sm mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-2xl lg:text-4xl font-title font-bold uppercase text-balance text-foreground mb-8 leading-tight">
                {title}
              </h2>
            )}

            <div
              className={cn(
                "w-full",
                isCentered ? "text-center mx-auto" : "text-left",
              )}
            >
              {content?.map((block, idx) => (
                <ContentBlock key={idx} block={block} isCentered={isCentered} />
              ))}
            </div>

            {ctas && ctas.length > 0 && (
              <div
                className={cn(
                  "mt-6 flex flex-wrap gap-4",
                  isCentered ? "justify-center w-full" : "justify-start",
                )}
              >
                {ctas.map((cta, idx) => (
                  <CTAButton key={idx} cta={cta} />
                ))}
              </div>
            )}
          </div>

          {/* IMAGE (for center) */}
          {hasImage && layout === "center-with-image" && (
            <div className="w-full rounded-2xl overflow-hidden aspect-video relative mt-8 shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
