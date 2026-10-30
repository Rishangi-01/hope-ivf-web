
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const galleryItems = [
  {
    src: "/images/home/wellness1.png",
    alt: "Woman enjoying a peaceful moment with a book",
    position: "mt-16 lg:mt-20",
    delay: 0.1,
  },
  {
    src: "/images/home/wellness2.png",
    alt: "Large green tropical leaf surrounded by nature",
    position: "mt-0 lg:-mt-1",
    delay: 0.25,
  },
  {
    src: "/images/home/wellness3.png",
    alt: "Incense smoke rising in a softly lit room",
    position: "mt-16 lg:mt-20",
    delay: 0.4,
  },
  {
    src: "/images/home/wellness4.png",
    alt: "Woman enjoying a quiet moment in nature",
    position: "mt-0 lg:-mt-1",
    delay: 0.55,
  },
];

export default function WellnessGallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f4f4f2] px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[740px] lg:px-5 lg:py-[62px] w-[100%]">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1800px]">
        
        <div className="grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-[34px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 45,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : item.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative w-full overflow-hidden bg-[#e7e3df] ${item.position}`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index % 2 === 0
                    ? "aspect-[3/3.85]"
                    : "aspect-[3/3.85]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 46vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* Elegant image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e211d]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <motion.div
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-white/90 text-[#8c5b53] opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight size={19} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 18,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: 0.2,
          }}
          className="mt-8 flex justify-center sm:mt-10 lg:absolute lg:-bottom-1 lg:right-0 lg:mt-0 lg:justify-end"
        >
          <a
            href="#get-started"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#8c5b53] px-8 py-4 text-base font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#754840] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-4 sm:min-w-[207px] sm:text-lg"
          >
            Start Today
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
