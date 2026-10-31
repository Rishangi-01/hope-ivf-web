
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "IVF Treatment",
    image: "/images/home/wellness6.png",
    alt: "Patient during an ultrasound consultation",
    href: "/services/service-details",
    number: "01",
  },
  {
    title: "IUI Treatment",
    image: "/images/home/wellness6.png",
    alt: "Fertility laboratory equipment used in treatment",
    href: "/services/service-details",
    number: "02",
  },
];

export default function FertilityTreatments() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="fertility-treatments"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#fffaf7] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-12 w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-96 w-96 rounded-full bg-[#f5e8e1]/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#e9edf8]/60 blur-3xl"
      />

      <div className="mx-auto w-full max-w-[1450px]">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-10 max-w-6xl text-center sm:mb-12 lg:mb-14"
        >
          <h2 className="font-sans text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-[#243a59] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Personalized Fertility
            <span className="mt-1 block text-[#8c5b53]">
              Care for Every Journey
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.title}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                reduceMotion ? undefined : { y: -7 }
              }
              className="group relative overflow-hidden rounded-xl border border-[#8c5b53]/15 bg-white/80 shadow-[0_8px_30px_rgba(70,60,55,0.035)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(100,65,55,0.12)]"
            >
              <div className="relative aspect-[1.8/1] overflow-hidden bg-[#f1e8e3]">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#47352f]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wider text-[#8c5b53] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  {treatment.number}
                </span>
              </div>

              <div className="flex min-h-[125px] items-center justify-between gap-4 p-5 sm:min-h-[145px] sm:p-6 lg:p-7">
                <div className="min-w-0">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-[#243a59] transition-colors duration-300 group-hover:text-[#8c5b53] lg:text-4xl">
                    {treatment.title}
                  </h3>
                </div>

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { scale: 1.08 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.94 }
                  }
                  className="shrink-0"
                >
                  <Link
                    href={treatment.href}
                    aria-label={`Learn more about ${treatment.title}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e7e1] text-[#8c5b53] transition-colors duration-300 hover:bg-[#8c5b53] hover:text-white sm:h-14 sm:w-14"
                  >
                    <ArrowRight
                      size={26}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#8c5b53] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
