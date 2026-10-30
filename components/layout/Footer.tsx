
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Heart,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

const services = [
  { label: "IVF Treatment", href: "/services/ivf-treatment" },
  { label: "ICSI Treatment", href: "/services/icsi-treatment" },
  { label: "IUI Treatment", href: "/services/iui-treatment" },
  { label: "Egg Freezing", href: "/services/egg-freezing" },
  { label: "Donor Program", href: "/services/donor-program" },
  {
    label: "Fertility Evaluation",
    href: "/services/fertility-evaluation",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

const contactDetails = [
  {
    icon: MapPin,
    text: "Sector 62, Noida, UP",
    href: "https://maps.google.com/?q=Sector+62+Noida",
  },
  {
    icon: Phone,
    text: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    text: "hello@hopeivf.com",
    href: "mailto:hello@hopeivf.com",
  },
];

const footerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#4a1631] via-[#4a1631] to-[#4a1631] text-white">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#d43a79]/15 blur-3xl" />
        <div className="absolute -bottom-40 left-[20%] h-80 w-80 rounded-full bg-[#b11b55]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Main footer */}
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={footerVariants}
          className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_1fr_1.15fr] lg:gap-12 lg:py-14"
        >
          
          <div className="max-w-[360px]">
            <Link
              href="/"
              aria-label="Hope IVF home"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="relative h-[54px] w-[80px] lg:h-[54px] lg:w-[211px] shrink-0">
                <Image
                  src="/images/white-logo.png"
                  alt="Hope IVF"
                  fill
                  sizes="52px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-5 max-w-[335px] text-sm leading-[1.8] text-white/75">
              Your trusted partner in fertility and parenthood.
              We combine advanced technology with compassionate
              care to help you build your family.
            </p>

            {/* Social media */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -4, scale: 1.08 }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white text-[#5b1d3d] transition-colors duration-300 hover:bg-[#fce7f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4a1631]"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-5 font-serif text-lg font-bold text-white">
              Quick Links
            </h2>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-[#f4a8c6]"
                  >
                    <ArrowRight
                      size={14}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-5 font-serif text-lg font-bold text-white">
              Our Services
            </h2>

            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-[#f4a8c6]"
                  >
                    <ArrowRight
                      size={14}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="mb-5 font-serif text-lg font-bold text-white">
              Contact Us
            </h2>

            <ul className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.text}>
                    <a
                      href={item.href}
                      className="group flex items-start gap-3 text-sm leading-6 text-white/75 transition-colors duration-300 hover:text-[#f4a8c6]"
                    >
                      <Icon
                        size={19}
                        className="mt-0.5 shrink-0 text-white transition-transform duration-300 group-hover:scale-110"
                      />
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}

              <li className="flex items-start gap-3 text-sm leading-6 text-white/75">
                <Clock3
                  size={19}
                  className="mt-0.5 shrink-0 text-white"
                />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom divider */}
        <div className="border-t border-white/15" />

        {/* Copyright bar */}
        <div className="flex flex-col gap-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-sm">
          <p>
            © {2026} Hope IVF. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/35">|</span>

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

            <Heart
              size={19}
              fill="currentColor"
              className="ml-1 text-white transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
