
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { site } from "@/data";

export default function LatestUpdates() {
  const content = site.blogs;
  const posts = content.posts.slice(0, content.homeCount);
  const detailsHref = site.Insurance.commerce.blog.detailsHref;
  if (!detailsHref) {
    throw new Error("Blog detail route is missing");
  }
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="latest-updates"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#fffaf7] px-5 py-16 text-[#302d2c] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#f1dfd8]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-[#ead4ca]/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-5xl text-center sm:mb-16 lg:mb-20"
        >

          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#172c59] sm:text-5xl md:text-6xl lg:text-[4rem]">
            {content.title}
            <span className="mt-2 block text-[#8c5b53]">
              {content.highlight}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 45,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.65,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8, transition: { duration: 0.25 } }
              }
              className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#8c5b53]/10 bg-white shadow-[0_8px_35px_rgba(74,47,40,0.05)] transition-shadow duration-500 hover:shadow-[0_24px_55px_rgba(100,57,47,0.13)]"
            >
              <Link
                href={detailsHref}
                aria-label={content.readAriaLabelTemplate.replace(
                  "{title}",
                  post.title,
                )}
                className="relative block aspect-[1.48/1] overflow-hidden bg-[#f1e5df]"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#432923]/25 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8c5b53] shadow-sm backdrop-blur-md sm:left-6 sm:top-6">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#85858a]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      className="text-[#8c5b53]"
                    />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold leading-snug tracking-tight text-[#172c59] transition-colors duration-300 group-hover:text-[#8c5b53] sm:text-[1.7rem]">
                  <Link href={detailsHref} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53]">
                    {post.title}
                  </Link>
                </h3>

                <Link
                  href={detailsHref}
                  className="mt-7 inline-flex w-fit items-center gap-3 rounded-full py-2 pr-2 text-base font-semibold text-[#8c5b53] transition-all duration-300 hover:gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-4"
                >
                  {content.readLabel}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e7e1] transition-all duration-300 group-hover:bg-[#8c5b53] group-hover:text-white">
                    <ArrowRight
                      size={21}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="mt-12 flex justify-center sm:mt-16"
        >
          <Link
            href={detailsHref}
            className="group inline-flex items-center gap-3 rounded-full bg-[#8c5b53] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#8c5b53]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#70443c] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c5b53] focus-visible:ring-offset-4 sm:text-base"
          >
            {content.buttonLabel}
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
