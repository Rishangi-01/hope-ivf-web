
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OurJourney() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="our-journey"
      className="relative isolate overflow-hidden bg-[#fffaf7] text-[#8c5b53] w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-24 -z-10 h-[470px] w-[350px] rounded-[45%] bg-[#f6e7df]/70 sm:h-[580px] sm:w-[430px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 -z-10 h-[400px] w-[400px] rounded-full bg-[#f8e9e1]/65 blur-2xl sm:h-[520px] sm:w-[520px]"
      />

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-12 lg:py-16 xl:gap-20 xl:px-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 max-w-[550px]"
        >
          <div className="flex items-center gap-3">
            <span className="font-serif text-base font-semibold text-[#593c35] lg:text-xl">
              Our Journey
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.25,
              }}
              className="h-[2px] bg-[#8c5b53]/60"
            />
          </div>

          <motion.h2
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 font-serif text-7xl leading-[1.04] tracking-[-0.045em] text-[#783f36]"
          >
            Growing Together
            <br className="hidden sm:block" /> for a Healthier Future
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
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.25,
            }}
            className="mt-5 max-w-[460px] text-base leading-7 text-[#75635d] sm:text-lg sm:leading-8"
          >
            With years of experience in maternal and child care,
            we have helped countless families welcome happiness
            and good health.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.4,
            }}
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="mt-7 inline-flex"
            >
              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 rounded-full bg-[#8c5b53] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(140,91,83,0.18)] transition-colors duration-300 hover:bg-[#75473f] sm:px-7 lg:text-xl"
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 45,
            scale: reduceMotion ? 1 : 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: reduceMotion ? 0 : 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative w-full"
        >
          <div className="relative aspect-[1.55/1] overflow-hidden rounded-[26px] bg-[#f1e1da] shadow-[0_20px_55px_rgba(105,64,54,0.10)] sm:rounded-[34px] lg:aspect-[1.53/1] xl:rounded-[40px]">
            <Image
              src="/images/home/about-baby-hands.png"
              alt="A parent gently holding their baby's tiny hand"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 60vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8c5b53]/10 via-transparent to-white/10" />
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.5,
            }}
            className="absolute -bottom-2 right-8 h-1 w-20 origin-right rounded-full bg-[#8c5b53]/60 sm:right-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
