
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data";

export default function OurMission() {
  const content = site.about.mission;
  const reduceMotion = useReducedMotion();

  const smoothTransition = {
    duration: reduceMotion ? 0 : 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="our-mission"
      className="relative isolate overflow-hidden bg-[#fffaf7] text-[#8c5b53] w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#f4e3da]/45 sm:h-[550px] sm:w-[550px]"
      />

      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.45fr_1fr] lg:gap-16 lg:px-8 lg:py-12 xl:gap-24 xl:px-12">
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -45,
            scale: reduceMotion ? 1 : 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={smoothTransition}
          className="group relative w-full"
        >
          <div className="relative aspect-[1.52/1] overflow-hidden rounded-[26px] bg-[#f0e4df] shadow-[0_18px_55px_rgba(90,48,39,0.09)] sm:rounded-[32px] lg:aspect-[1.57/1]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 62vw"
              priority
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8c5b53]/10 via-transparent to-white/10" />
          </div>

          {/* Decorative accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.35,
            }}
            className="absolute -bottom-2 left-8 h-1 w-20 origin-left rounded-full bg-[#8c5b53]/70 sm:left-12"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            ...smoothTransition,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="flex flex-col items-start justify-center py-5 lg:py-8"
        >
          <span className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#8c5b53]/75 sm:text-sm">
            {content.eyebrow}
          </span>

          <h2 className="max-w-[480px] font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#713c34] sm:text-6xl lg:text-6xl xl:text-[76px]">
            {content.title.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 74 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.4,
            }}
            className="mt-7 h-[3px] rounded-full bg-[#8c5b53]"
          />

          <motion.a
            href={content.button.href}
            whileHover={reduceMotion ? undefined : { x: 5 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#8c5b53]/30 px-6 py-3.5 text-sm font-semibold text-[#8c5b53] transition-colors duration-300 hover:border-[#8c5b53] hover:bg-[#8c5b53] hover:text-white sm:text-base"
          >
            {content.button.label}
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
