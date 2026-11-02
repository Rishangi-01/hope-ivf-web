
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Heart,
  Share2,
  Check,
  BookOpen,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/data";

const articleIcons: Record<string, LucideIcon> = {
  heart: Heart,
  "message-circle": MessageCircle,
};

export default function BlogDetailsSec() {
  const article = site.Insurance.commerce.blogDetails;
  const blogHref = site.Insurance.commerce.blog.detailsHref;
  if (!blogHref) {
    throw new Error("Blog route is missing");
  }
  const [gettingStarted, lifestyle, treatmentOptions, questions] = article.tips;
  const treatmentCards =
    "cards" in treatmentOptions ? treatmentOptions.cards : undefined;
  if (!treatmentCards) {
    throw new Error("Blog article treatment cards are missing");
  }
  const articleTitle = `${article.headingFirst}${article.headingHighlight}`;
  const reduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  async function handleShare() {
    const shareData = {
      title: articleTitle,
      text: article.introduction,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }
    } catch {
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf7] text-[#342b29] w-[100%]">
      {/* HERO */}
      <section className="relative px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#ead4ca]/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1250px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <Link
              href={blogHref}
              className="group inline-flex items-center gap-2 rounded-full border border-[#8c5b53]/20 bg-white px-5 py-3 text-sm font-semibold text-[#8c5b53] transition-all duration-300 hover:-translate-x-1 hover:bg-[#8c5b53] hover:text-white"
            >
              <ArrowLeft size={17} />
              {article.backLabel}
            </Link>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#8c5b53] sm:gap-4 sm:text-sm">
              <span className="rounded-full bg-[#f2e3dc] px-4 py-2">
                {article.eyebrow}
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl font-serif text-4xl leading-[1.12] tracking-tight text-[#713c34] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {articleTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#786c67] sm:text-lg lg:text-xl lg:leading-9">
              {article.introduction}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 0.97,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          className="relative mx-auto aspect-[16/9] max-h-[650px] max-w-[1450px] overflow-hidden rounded-[24px] bg-[#f0dfd7] shadow-[0_25px_80px_rgba(83,48,39,0.12)] sm:rounded-[32px] lg:aspect-[2/0.85]"
        >
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#38241f]/20 to-transparent" />
        </motion.div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1250px] gap-12 lg:gap-16">

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={reveal}
            className="min-w-0"
          >
            <section id="introduction" className="scroll-mt-10">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8c5b53] sm:text-sm">
                {gettingStarted.title}
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl lg:text-5xl">
                {article.articleHeading}
              </h2>

              {gettingStarted.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9 ${
                    index === 0 ? "mt-6" : "mt-5"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </section>

            <section
              id="healthy-habits"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                {lifestyle.sectionTitle}
              </h2>

              {lifestyle.paragraphs.map((paragraph, index) => (
                <div key={paragraph}>
                  <p
                    className={`text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9 ${
                      index === 0 ? "mt-6" : "mt-6"
                    }`}
                  >
                    {paragraph}
                  </p>
                  {index === 0 && (
                    <div className="mt-7 rounded-r-2xl border-l-4 border-[#8c5b53] bg-[#f7ece7] p-6 sm:p-8">
                      <p className="font-serif text-xl leading-relaxed text-[#713c34] sm:text-2xl">
                        “{article.quotation}”
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </section>

            <section
              id="treatment-options"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                {treatmentOptions.sectionTitle}
              </h2>

              {treatmentOptions.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {treatmentCards.map((card) => {
                  const Icon = articleIcons[card.icon];
                  if (!Icon) {
                    throw new Error(`Unknown blog article icon: ${card.icon}`);
                  }

                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-[#8c5b53]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Icon size={27} className="text-[#8c5b53]" />
                      <h3 className="mt-4 text-xl font-semibold text-[#713c34]">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#786c67]">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section
              id="questions"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                {questions.sectionTitle}
              </h2>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                {questions.paragraphs[0]}
              </p>

              <ul className="mt-6 space-y-4">
                {questions.paragraphs.slice(1).map((question) => (
                  <li
                    key={question}
                    className="flex items-start gap-3 text-base leading-7 text-[#71635d] sm:text-lg"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f2e3dc] text-[#8c5b53]">
                      <Check size={15} />
                    </span>
                    {question}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-12 rounded-2xl border border-[#8c5b53]/15 bg-white p-6 sm:p-8">
              <p className="text-sm leading-7 text-[#82746e]">
                <strong className="text-[#713c34]">
                  {article.disclaimer.label}
                </strong>{" "}
                {article.disclaimer.text}
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
