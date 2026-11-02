
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

const treatments = [
  {
    id: "ivf",
    number: "01",
    eyebrow: "Advanced Fertility Care",
    title: "IVF Treatment",
    subtitle: "A carefully guided journey toward parenthood.",
    description:
      "In vitro fertilization (IVF) is a fertility treatment in which eggs and sperm are combined in a laboratory. An embryo may then be transferred into the uterus by a qualified fertility specialist.",
    image: "/images/home/why-choose.png",
    alt: "A patient discussing ultrasound results with a healthcare professional",
    features: [
      "Individualized treatment planning",
      "Specialist-led monitoring",
      "Laboratory-based fertilization",
      "Guidance throughout the process",
    ],
    process: [
      {
        title: "Initial consultation",
        description:
          "Your specialist reviews your medical history and discusses suitable investigations.",
      },
      {
        title: "Treatment planning",
        description:
          "A personalized plan is developed according to your circumstances and clinical findings.",
      },
      {
        title: "Fertilization",
        description:
          "Eggs and sperm are brought together in a laboratory, with fertilization monitored by the clinical team.",
      },
      {
        title: "Embryo transfer",
        description:
          "When appropriate, an embryo may be transferred into the uterus, followed by clinical guidance and testing.",
      },
    ],
  },
  {
    id: "iui",
    number: "02",
    eyebrow: "Personalized Fertility Care",
    title: "IUI Treatment",
    subtitle: "A less invasive option for selected fertility needs.",
    description:
      "Intrauterine insemination (IUI) involves placing prepared sperm directly into the uterus around the time of ovulation. A fertility specialist can help determine whether this approach is suitable for you.",
    image: "/images/about/our-mission.png",
    alt: "Fertility laboratory equipment used in reproductive care",
    features: [
      "Treatment suitability assessment",
      "Ovulation timing and monitoring",
      "Prepared sperm placed in the uterus",
      "Follow-up guidance from your specialist",
    ],
    process: [
      {
        title: "Consultation",
        description:
          "Your specialist reviews your health history and discusses fertility investigations.",
      },
      {
        title: "Ovulation monitoring",
        description:
          "The clinical team identifies the appropriate timing for the procedure.",
      },
      {
        title: "Sperm preparation",
        description:
          "A laboratory prepares a sperm sample for the insemination procedure.",
      },
      {
        title: "Insemination and follow-up",
        description:
          "Prepared sperm is placed in the uterus, followed by instructions about testing and follow-up.",
      },
    ],
  },
];

export default function FertilityTreatmentsDetails() {
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
    <main className="overflow-hidden bg-[#fffaf7] text-[#493b37]">

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c5b53]">
            Understanding Your Options
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[#713c34] sm:text-5xl md:text-6xl">
            Every Journey Is Different
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#786761] sm:text-lg">
            Fertility care begins with understanding your
            individual needs. Our goal is to help you explore
            available treatments, understand the process, and
            make informed decisions together with your clinical team.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Compassion",
              text: "Support that respects your feelings and circumstances.",
            },
            {
              icon: Microscope,
              title: "Clinical Guidance",
              text: "Understand investigations and treatment options.",
            },
            {
              icon: ShieldCheck,
              title: "Informed Choices",
              text: "Discuss benefits, limitations, risks, and costs.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

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
        className="bg-[#f8eee9]/60 px-5 py-20 sm:px-8 sm:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
              Our Treatment Options
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#713c34] sm:text-5xl md:text-6xl">
              Find the Care That Fits You
            </h2>
            <p className="mt-5 text-base leading-8 text-[#786761] sm:text-lg">
              Learn about two commonly used fertility
              treatments and discuss their suitability with
              your fertility specialist.
            </p>
          </motion.div>

          <div className="space-y-10 lg:space-y-14">
            {treatments.map((treatment, index) => (
              <motion.article
                key={treatment.id}
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
                    alt={treatment.alt}
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
                    href="/contact"
                    className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#8c5b53] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#70443c]"
                  >
                    Discuss This Treatment
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
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1250px]">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8c5b53]">
              What to Expect
            </span>
            <h2 className="mt-4 font-serif text-4xl text-[#713c34] sm:text-5xl md:text-6xl">
              Your Treatment Journey
            </h2>
            <p className="mt-5 text-base leading-8 text-[#786761] sm:text-lg">
              Each treatment follows its own clinical process.
              Your specialist will explain the steps and timing
              that apply to your plan.
            </p>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-2">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-3xl border border-[#8c5b53]/15 bg-white p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6e8e2] text-[#8c5b53]">
                    {index === 0 ? (
                      <Microscope size={28} />
                    ) : (
                      <Stethoscope size={28} />
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c5b53]">
                      Treatment {treatment.number}
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
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-14">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[30px] bg-[#8c5b53] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20"
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
                Take the Next Step With Confidence
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-lg sm:leading-8">
                Have questions about IVF or IUI? Arrange a
                consultation to discuss your needs, options,
                potential risks, and next steps.
              </p>
            </div>

            <Link
              href="/book-appointment"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#fffaf7] px-7 py-4 font-semibold text-[#8c5b53] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Book an Appointment
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
