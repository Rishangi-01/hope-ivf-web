
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";
import { site } from "@/data";

export default function Testimonials() {
  const content = site.testimonials;
  const testimonials = content.items;
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = testimonials[activeIndex];

  const next = useCallback(() => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  }, []);

  const previous = useCallback(() => {
    setActiveIndex(
      (index) =>
        (index - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(next, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, next, reduceMotion]);

  return (
    <section
      id="testimonials"
      aria-label={content.ariaLabel}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fffaf7] px-5 py-20 text-[#493b37] lg:py-24 px-6 sm:px-6 lg:px-10 xl:px-14 w-[100%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-10 h-80 w-80 rounded-full bg-[#f2dfd7]/60 blur-3xl sm:h-[450px] sm:w-[450px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-[#ead2c9]/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1600px]">
        
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
        >

          <h2 className="mt-6 font-serif text-4xl leading-[1.12] tracking-tight text-[#713c34] sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            {content.title}
            <span className="mt-2 block text-[#8c5b53]">
              {content.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#786761] sm:text-lg sm:leading-8">
            {content.text}
          </p>
        </motion.div>

        
        <div
          className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -35,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.8 }}
            className="group relative min-h-[300px] overflow-hidden rounded-[28px] bg-[#f0dfd7] sm:min-h-[420px] lg:min-h-[510px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 1.05,
                }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2925]/65 via-transparent to-[#3d2925]/5" />

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/40 bg-white/85 text-[#8c5b53] shadow-lg backdrop-blur-md sm:right-7 sm:top-7 sm:h-20 sm:w-20"
            >
              <Quote size={38} strokeWidth={1.5} />
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white/90">
                <Sparkles size={17} />
                {content.storyLabel}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35 }}
                >
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    {current.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/85 sm:text-base">
                    {current.city}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="flex min-w-0 flex-col justify-between rounded-[28px] border border-[#8c5b53]/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(110,65,54,0.07)] sm:p-9 lg:p-12 xl:p-14">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f6e8e2] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#8c5b53] sm:text-sm">
                  <Heart size={15} />
                  {current.treatment}
                </span>

                <div
                  className="flex gap-1 text-[#c18a56]"
                  aria-label={content.ratingLabel}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={19}
                      fill="currentColor"
                      strokeWidth={1.3}
                    />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 18,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -12,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.4 }}
                  className="mt-8 sm:mt-10"
                >
                  <Quote
                    size={54}
                    strokeWidth={1.2}
                    className="mb-5 text-[#8c5b53]/30 sm:h-16 sm:w-16"
                  />

                  <blockquote
                    aria-live="polite"
                    className="font-serif text-2xl leading-[1.5] text-[#713c34] sm:text-3xl lg:text-[2.5rem] lg:leading-[1.4]"
                  >
                    “{current.quote}”
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-9 border-t border-[#8c5b53]/15 pt-6 sm:mt-12 sm:pt-8">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="mt-1 text-sm text-[#9a857c]">
                    {String(activeIndex + 1).padStart(2, "0")}{" "}
                    <span className="px-1">/</span>{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label={content.previousLabel}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8c5b53]/25 text-[#8c5b53] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8c5b53] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-2"
                  >
                    <ArrowLeft size={21} />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label={content.nextLabel}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8c5b53] text-white shadow-md shadow-[#8c5b53]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#70443c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-2"
                  >
                    <ArrowRight size={21} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={content.showLabelTemplate.replace(
                      "{number}",
                      String(index + 1),
                    )}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] ${
                      activeIndex === index
                        ? "w-10 bg-[#8c5b53]"
                        : "w-2 bg-[#8c5b53]/25 hover:bg-[#8c5b53]/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
