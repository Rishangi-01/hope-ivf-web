
"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { site } from "@/data";

export default function ServiceDetailsHero() {
  const reduceMotion = useReducedMotion();

  const transition = {
    duration: reduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <main className="overflow-hidden bg-[#fffaf7] text-[#8c5b53] w-[100%]">
      <section className="relative isolate min-h-[540px] overflow-hidden sm:min-h-[600px] lg:min-h-[min(620px,calc(100svh-76px))] xl:min-h-[650px]">
        <motion.div
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 1.07,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={site.site.heroImage}
            alt={site.site.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_center] sm:object-[60%_center] lg:object-center"
          />
        </motion.div>

        <div className="mx-auto flex min-h-[540px] max-w-[1800px] items-center px-6 py-20 sm:min-h-[600px] sm:px-10 lg:min-h-[min(620px,calc(100svh-76px))] lg:px-12 xl:min-h-[650px]">
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="max-w-[850px]"
          >
            <h1 className="font-serif text-[clamp(4.2rem,9vw,8.5rem)] leading-[0.98] tracking-[-0.055em] text-[#7c443a]">
              {site.planDetail.bannerTitle}
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 92 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.65,
              }}
              className="mt-8 h-[3px] bg-[#8c5b53]"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
