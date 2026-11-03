
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Baby,
  CalendarCheck,
  Clock3,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "@/data";

const introIcons: Record<string, LucideIcon> = {
  heart: Heart,
  microscope: Microscope,
  "shield-check": ShieldCheck,
};

const treatmentIcons: Record<string, LucideIcon> = {
  microscope: Microscope,
  stethoscope: Stethoscope,
};

export default function FertilityTreatmentsDetails() {
  const content = site.planDetail;
  const treatments = content.treatments.map((treatment) => {
    const plan = site.plans.items.find((item) => item.slug === treatment.slug);
    if (!plan) {
      throw new Error(`Missing service plan for ${treatment.slug}`);
    }

    return { ...treatment, title: plan.title, icon: plan.icon };
  });
  const reduceMotion = useReducedMotion();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="overflow-hidden bg-[#fffaf7] text-[#493b37] w-[100%] px-6 sm:px-6 lg:px-10 xl:px-14">

      <section className="py-20 sm:py-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c5b53]">
            {content.overviewEyebrow}
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#713c34] sm:text-5xl md:text-6xl">
            {content.overviewTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#786761] sm:text-lg">
            {content.overviewText}
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3 max-w-[1600px]">
          {content.introCards.map((item, index) => {
            const Icon = introIcons[item.icon];
            if (!Icon) {
              throw new Error(`Unknown treatment guidance icon: ${item.icon}`);
            }

            return (
              <motion.div
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className="rounded-2xl border border-[#8c5b53]/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg sm:p-7"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f6e8e2] text-[#8c5b53]">
                  <Icon size={27} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-[#713c34]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#786761]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= TREATMENT DETAILS ================= */}
      <section
        id="treatment-options"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
              {content.featuresEyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#713c34] sm:text-5xl md:text-6xl">
              {content.treatmentSectionTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#786761] sm:text-lg">
              {content.treatmentSectionText}
            </p>
          </motion.div>

          <div className="space-y-10 lg:space-y-14">
            {treatments.map((treatment, index) => (
              <motion.article
                key={treatment.slug}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                className="grid overflow-hidden rounded-[28px] border border-[#8c5b53]/10 bg-white shadow-[0_15px_50px_rgba(105,65,55,0.06)] lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[280px] overflow-hidden bg-[#f0e2dc] sm:min-h-[380px] lg:min-h-[510px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
                    {treatment.eyebrow}
                  </span>

                  <h3 className="mt-4 font-serif text-4xl leading-tight text-[#713c34] sm:text-5xl">
                    {treatment.title}
                  </h3>

                  <p className="mt-3 text-lg font-medium text-[#8c5b53] sm:text-xl">
                    {treatment.subtitle}
                  </p>

                  <p className="mt-5 text-base leading-8 text-[#786761]">
                    {treatment.description}
                  </p>

                  <div className="mt-7 space-y-4">
                    {treatment.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={21}
                          className="mt-0.5 shrink-0 text-[#8c5b53]"
                        />
                        <span className="text-sm leading-6 text-[#5f504a] sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={content.contactHref}
                    className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#8c5b53] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#70443c]"
                  >
                    {site.plans.buttonLabel}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
              {content.processSectionEyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#713c34] sm:text-5xl md:text-6xl">
              {content.processSectionTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-[#786761] sm:text-lg">
              {content.processSectionText}
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.slug}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-3xl border border-[#8c5b53]/15 bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6e8e2] text-[#8c5b53]">
                    {(() => {
                      const Icon = treatmentIcons[treatment.icon];
                      if (!Icon) {
                        throw new Error(`Unknown treatment icon: ${treatment.icon}`);
                      }
                      return <Icon size={28} />;
                    })()}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c5b53]">
                      {content.treatmentPrefix} {treatment.number}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-[#713c34] sm:text-3xl">
                      {treatment.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-7">
                  {treatment.process.map((step, stepIndex) => (
                    <div
                      key={step.title}
                      className="relative flex gap-4"
                    >
                      <div className="relative flex shrink-0 flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8c5b53] text-sm font-semibold text-white">
                          {stepIndex + 1}
                        </div>
                        {stepIndex < treatment.process.length - 1 && (
                          <div className="mt-2 min-h-8 w-px flex-1 bg-[#8c5b53]/20" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h4 className="font-semibold text-[#493b37]">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-[#786761] sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT BANNER ================= */}
      <section className="pb-20 sm:pb-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[30px] bg-[#8c5b53] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/15 sm:h-96 sm:w-96"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/15 sm:h-72 sm:w-72"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <Sparkles size={29} className="mb-5 text-[#f5ded4]" />
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                {content.supportTitle}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-lg sm:leading-8">
                {content.formText}
              </p>
            </div>

            <Link
              href={content.supportButton.href}
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#fffaf7] px-7 py-4 font-semibold text-[#8c5b53] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              {content.supportButton.label}
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
