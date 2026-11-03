
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { site } from "@/data";

export default function OurValuesSection() {
  const content = site.about.values;
  const reduceMotion = useReducedMotion();

  const transition = {
    duration: reduceMotion ? 0 : 0.85,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="our-values"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#fff9f6] py-12 text-[#8c5b53] sm:py-16 lg:py-12 px-6 sm:px-6 lg:px-10 xl:px-14 w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[-15%] -z-10 h-[480px] w-[480px] rounded-full bg-[#f6e7df]/60 blur-3xl sm:h-[650px] sm:w-[650px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-[-20%] -z-10 h-[450px] w-[450px] rounded-full bg-[#f3dfd6]/60 blur-3xl sm:h-[600px] sm:w-[600px]"
      />

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12 xl:gap-16">
        
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={transition}
          className="relative z-10 flex flex-col items-start"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-serif text-lg font-semibold text-[#51352f] lg:text-2xl">
              {content.eyebrow}
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.25,
              }}
              className="h-[2px] w-14 origin-left bg-[#8c5b53]/60"
            />
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="max-w-[560px] font-serif text-4xl leading-[1.08] tracking-[-0.04em] text-[#783f36] sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,3.5vw,4rem)] xl:text-[6rem]"
          >
            {content.title}
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.22,
            }}
            className="mt-5 max-w-[440px] text-base leading-7 text-[#76625c] sm:text-xl sm:leading-8"
          >
            {content.text}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 50,
            scale: reduceMotion ? 1 : 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.12,
          }}
          className="group relative w-full"
        >
          <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-[28px] bg-[#f0dfd7] shadow-[0_20px_65px_rgba(104,61,51,0.10)] sm:rounded-[36px] lg:aspect-[1.65/1] xl:aspect-[1.8/1]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8c5b53]/10 via-transparent to-white/10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : 0.55,
              }}
              className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-[#fff9f6]/90 text-[#8c5b53] shadow-lg backdrop-blur-sm sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
            >
              <Heart size={25} strokeWidth={1.6} />
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.4,
            }}
            className="absolute -bottom-2 right-8 h-1 w-20 origin-right rounded-full bg-[#8c5b53]/60 sm:right-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
