
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

const article = {
  category: "Fertility Insights",
  title: "Understanding Your Fertility Journey: A Guide to Your Next Steps",
  subtitle:
    "Explore the essentials of reproductive health, learn about your options, and discover how informed decisions can help you navigate your fertility journey.",
  date: "October 16, 2026",
  readTime: "7 min read",
  image: "/images/home/success-story1.png",
};


export default function BlogDetailsSec() {
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
      title: article.title,
      text: article.subtitle,
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
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-[#8c5b53]/20 bg-white px-5 py-3 text-sm font-semibold text-[#8c5b53] transition-all duration-300 hover:-translate-x-1 hover:bg-[#8c5b53] hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Articles
            </Link>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#8c5b53] sm:gap-4 sm:text-sm">
              <span className="rounded-full bg-[#f2e3dc] px-4 py-2">
                {article.category}
              </span>

              <span className="inline-flex items-center gap-2 font-medium normal-case tracking-normal text-[#82746e]">
                <CalendarDays size={16} />
                {article.date}
              </span>

              <span className="inline-flex items-center gap-2 font-medium normal-case tracking-normal text-[#82746e]">
                <Clock3 size={16} />
                {article.readTime}
              </span>
            </div>

            <h1 className="mt-7 max-w-5xl font-serif text-4xl leading-[1.12] tracking-tight text-[#713c34] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#786c67] sm:text-lg lg:text-xl lg:leading-9">
              {article.subtitle}
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
            src={article.image}
            alt="A mother holding her baby, representing family and reproductive health"
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
                A Guide to Getting Started
              </p>

              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl lg:text-5xl">
                Understanding your fertility journey
              </h2>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                Fertility is a personal aspect of health, and every
                individual or couple may have different questions,
                circumstances, and goals. Understanding your options
                can help you have informed conversations with a
                qualified healthcare professional.
              </p>

              <p className="mt-5 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                A good starting point is to discuss your medical
                history, concerns, and expectations with your
                healthcare provider. They can help determine which
                assessments, if any, may be appropriate for you.
              </p>
            </section>

            <section
              id="healthy-habits"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                Lifestyle and reproductive health
              </h2>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                General health habits can support overall well-being.
                Eating a varied, balanced diet, getting adequate rest,
                avoiding tobacco, and discussing medications or
                supplements with a clinician can all be useful topics
                to consider.
              </p>

              <div className="mt-7 rounded-r-2xl border-l-4 border-[#8c5b53] bg-[#f7ece7] p-6 sm:p-8">
                <p className="font-serif text-xl leading-relaxed text-[#713c34] sm:text-2xl">
                  “The right next step begins with reliable
                  information and care tailored to your needs.”
                </p>
              </div>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                Lifestyle changes cannot guarantee conception.
                Your age, medical history, and other factors may
                influence fertility, so personalized guidance is
                important.
              </p>
            </section>

            <section
              id="treatment-options"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                Understanding treatment options
              </h2>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                Depending on your circumstances, a specialist may
                discuss diagnostic testing, medication, intrauterine
                insemination (IUI), in vitro fertilization (IVF), or
                other approaches. Not every option is appropriate for
                every person.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#8c5b53]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Heart size={27} className="text-[#8c5b53]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#713c34]">
                    Personalized guidance
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#786c67]">
                    Discuss your health history and potential options
                    with a qualified fertility specialist.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#8c5b53]/15 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <MessageCircle
                    size={27}
                    className="text-[#8c5b53]"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-[#713c34]">
                    Clear communication
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#786c67]">
                    Ask about benefits, risks, costs, alternatives,
                    and what to expect at each stage.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="questions"
              className="mt-12 scroll-mt-10 border-t border-[#8c5b53]/15 pt-10 sm:mt-16 sm:pt-12"
            >
              <h2 className="font-serif text-3xl leading-tight text-[#713c34] sm:text-4xl">
                Questions to ask your specialist
              </h2>

              <p className="mt-6 text-base leading-8 text-[#71635d] sm:text-lg sm:leading-9">
                Preparing questions before an appointment can help
                you understand the available choices and feel more
                comfortable participating in decisions about your care.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Which assessments might be appropriate for my situation?",
                  "What treatment options could be considered, and why?",
                  "What are the possible risks, benefits, and costs?",
                  "Where can I find reliable support and information?",
                ].map((question) => (
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
                  Medical disclaimer:
                </strong>{" "}
                This article is for general educational purposes only
                and is not a substitute for medical advice, diagnosis,
                or treatment. Please consult a qualified healthcare
                professional for guidance specific to your situation.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
