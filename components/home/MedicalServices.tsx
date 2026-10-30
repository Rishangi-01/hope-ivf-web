"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Maternity Care",
    image: "/images/home/wellness1.png",
    description: "Compassionate support throughout your pregnancy.",
  },
  {
    title: "Gynecology",
    image: "/images/home/wellness2.png",
    description: "Personalized care for women's health at every stage.",
  },
  {
    title: "Pediatric Care",
    image: "/images/home/wellness3.png",
    description: "Thoughtful healthcare for infants and growing children.",
  },
  {
    title: "Radiology",
    image: "/images/home/wellness4.png",
    description: "Modern diagnostic imaging and clinical support.",
  },
  {
    title: "Physiotherapy",
    image: "/images/home/wellness5.png",
    description: "Movement, rehabilitation, and recovery support.",
  },
  {
    title: "Nutrition",
    image: "/images/home/wellness6.png",
    description: "Practical nutrition guidance for everyday wellness.",
  },
];

export default function MedicalServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f7] via-[#fdf0ef] to-[#f9e8e7] w-[100%]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8c5b53]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px] px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-5 lg:grid-cols-[0.95fr_1.6fr] lg:gap-12">
          <div className="min-w-0 md:sticky md:top-6 md:flex md:h-[calc(100vh-3rem)] md:flex-col md:self-start lg:top-8 lg:h-[calc(100vh-4rem)]">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7 }}
              className="shrink-0 pb-5 sm:pb-7"
            >

              <h2 className="max-w-md font-serif text-[30px] font-normal leading-[1.12] tracking-[-0.035em] text-[#352c29] sm:text-4xl lg:text-[5rem]">
                Comprehensive
                <br />
                <span className="text-[#8c5b53]">Fertility</span> Treatments
              </h2>

              <div className="mt-4 h-px w-full max-w-[300px] bg-[#8c5b53]/40" />
              <div className="mt-1.5 h-px w-[72%] max-w-[240px] bg-[#8c5b53]/25" />
            </motion.div>

            <div className="grid flex-1 grid-cols-2 gap-3 md:min-h-0 md:grid-cols-1 md:grid-rows-2 md:gap-3">
              <motion.div
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: 0.12,
                }}
                className="group relative min-h-[190px] overflow-hidden rounded-xl lg:min-h-[460px] md:min-h-0 md:h-full md:rounded-lg"
              >
                <Image
                  src="/images/home/wellness4.png"
                  alt="Modern diagnostic imaging equipment"
                  fill
                  priority
                  sizes="(max-width: 767px) 50vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </motion.div>
            </div>
          </div>
          <div
            className="min-w-0 md:h-[calc(100vh-3rem)] md:overflow-y-auto md:overscroll-contain md:pr-1 lg:h-[calc(100vh-4rem)] lg:pr-2"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#d9b9b3 transparent",
            }}
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {services.map((service, index) => (
                <motion.a
                  key={service.title}
                  href="#contact"
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 25,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : (index % 3) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex min-h-[112px] items-center justify-between gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-[0_4px_20px_rgba(140,91,83,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8c5b53]/25 hover:bg-white hover:shadow-[0_10px_30px_rgba(140,91,83,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] lg:min-h-[340px] sm:gap-4 sm:p-4"
                >
                  <div className="min-w-0 flex-1 py-1 pl-1 sm:pl-2">
                    <h3 className="font-serif text-[16px] font-normal leading-snug text-[#352c29] transition-colors duration-300 group-hover:text-[#8c5b53] lg:text-[4rem]">
                      {service.title}
                    </h3>

                    <div className="mt-2 h-px w-8 bg-[#8c5b53]/45 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8c5b53]" />
                  </div>

                  {/* Service image */}
                  <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-lg bg-[#f3e8e5] lg:h-[322px] lg:w-[322px]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[#8c5b53]/0 transition-colors duration-300 group-hover:bg-[#8c5b53]/10" />
                  </div>

                  {/* Hover arrow */}
                  <ArrowUpRight
                    size={16}
                    className="hidden shrink-0 text-[#8c5b53] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block"
                  />
                </motion.a>
              ))}
            </div>

            <div className="pb-1 pt-5 text-center md:pb-0 md:pt-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#8c5b53] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#754840] hover:shadow-lg hover:shadow-[#8c5b53]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-2"
              >
                Explore All Services
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
