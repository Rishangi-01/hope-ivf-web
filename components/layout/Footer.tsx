
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    icon: FaTiktok,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: FaPinterestP,
  },
];

const policyLinks = [
  { label: "About US", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
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
    <footer
      className="relative isolate overflow-hidden bg-[#8c5b53] text-[#f7f0e9]"
      aria-label="Website footer"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1800px] px-6 pb-7 pt-8 sm:px-10 sm:pt-10 lg:px-[3.8%] lg:pt-7">
        {/* Large brand name */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href="/"
            aria-label="logo"
            className="inline-block font-sans text-5xl font-normal tracking-[-0.055em] transition-opacity duration-300 hover:opacity-75 sm:text-6xl lg:text-[76px] xl:text-[84px]"
          >
            Hope IVF 
          </Link>
           <p className="text-sm lg:text-lg"> Science Care New Beginnings </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-10 lg:mt-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Contact details */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="space-y-1 text-base leading-relaxed sm:text-lg">
              <a
                href="tel:1234567890"
                className="block w-fit transition-colors duration-300 hover:text-white"
              >
                123-456-7890
              </a>

              <a
                href="mailto:info@mysite.com"
                className="block w-fit transition-colors duration-300 hover:text-white"
              >
                info@mysite.com
              </a>
            </div>

            <address className="mt-7 not-italic text-base leading-relaxed sm:text-lg">
              500 Terry Francine St.
              <br />
              San Francisco, CA 94158
            </address>

            {/* Social icons */}
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:mt-16">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 12,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : index * 0.08,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -5, scale: 1.08 }
                    }
                    whileTap={
                      reduceMotion ? undefined : { scale: 0.92 }
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f0e9] text-[#65514a] transition-colors duration-300 hover:bg-white sm:h-10 sm:w-10"
                  >
                    <Icon size={19} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Policy links */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start sm:pt-0"
          >
            <nav
              aria-label="Legal and policy links"
              className="flex flex-col items-start gap-1.5 text-base sm:text-lg"
            >
              {policyLinks.map((policy, index) => (
                <motion.div
                  key={policy.label}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 14,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.09,
                  }}
                >
                  <Link
                    href={policy.href}
                    className="group relative inline-block py-0.5 transition-colors duration-300 hover:text-white"
                  >
                    {policy.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 15,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.15,
          }}
          className="mt-12 border-t border-white/15 pt-6 sm:mt-14 lg:mt-16 lg:border-t-0 lg:pt-0"
        >
          <div className="flex flex-col gap-3 text-sm leading-relaxed sm:text-base lg:flex-row lg:items-center lg:justify-end lg:pr-[22%]">
            <p>
              Copyright © 2026. All Rights Reserved. Powered By Lestow.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
