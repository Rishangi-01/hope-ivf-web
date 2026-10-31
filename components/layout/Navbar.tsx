"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Menu, X, Heart } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 w-full bg-white">
      <div className="border-b border-[#fdf2f7] bg-[#fdf2f7]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-2.5 lg:px-10 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] font-medium text-slate-600 sm:text-sm"
          >
            <a
              href="https://maps.google.com/?q=Sector+62+Noida"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-[#8c5b53]"
            >
              <MapPin size={16} className="text-[#8c5b53]" />
              <span>Sector 62, Noida, UP</span>
            </a>

            <a
              href="tel:+919876543210"
              className="group flex items-center gap-2 transition-colors hover:text-[#8c5b53]"
            >
              <Phone size={16} className="text-[#8c5b53]" />
              <span>+91 98765 43210</span>
            </a>

            <a
              href="mailto:hello@hopeivf.com"
              className="hidden items-center gap-2 transition-colors hover:text-[#8c5b53] sm:flex"
            >
              <Mail size={16} className="text-[#8c5b53]" />
              <span>hello@hopeivf.com</span>
            </a>
          </motion.div>

          <div className="hidden items-center gap-5 text-[#8c5b53] sm:flex">
            {[
              {
                icon: FaFacebookF,
                href: "https://facebook.com",
                label: "Facebook",
              },
              {
                icon: FaInstagram,
                href: "https://instagram.com",
                label: "Instagram",
              },
              {
                icon: FaYoutube,
                href: "https://youtube.com",
                label: "YouTube",
              },
              {
                icon: FaLinkedinIn,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.12 }}
                className="transition-colors hover:text-[#d43a79]"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-3.5 lg:px-10 xl:px-14">
          <Link
            href="/"
            aria-label="Hope IVF home"
            className="group flex shrink-0 items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.07, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex h-60 items-center justify-center rounded-full text-[#8c5b53] h-[54px] w-[80px] lg:h-[54px] lg:w-[211px]"
            >
              <Image
                src="/images/logo.png"
                alt="Hope IVF"
                fill
                sizes="52px"
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex 2xl:gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.12 + index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  className={`group relative block whitespace-nowrap py-3 text-[14px] lg:text-[16px] font-semibold transition-colors duration-300 ${
                    link.active
                      ? "text-[#8c5b53]"
                      : "text-slate-600 hover:text-[#8c5b53]"
                  }`}
                >
                  {link.name}

                  <motion.span
                    className="absolute -bottom-[2px] left-0 h-[2px] rounded-full bg-[#8c5b53]"
                    initial={false}
                    animate={{
                      width: link.active ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {!link.active && (
                    <span className="absolute -bottom-[2px] left-0 h-[3px] w-0 rounded-full bg-[#8c5b53] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden shrink-0 xl:block"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#8c5b53] px-6 py-3.5 text-[13px] lg:text-[16px] font-semibold text-white shadow-[0_6px_18px_rgba(194,24,91,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a51d55] hover:shadow-[0_10px_25px_rgba(194,24,91,0.25)]"
            >
              <span className="relative z-10">Book Appointment</span>
              <ArrowRight
                size={17}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </motion.div>

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#f9dce9] text-[#8c5b53] transition-colors hover:bg-[#fdf2f7] xl:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {menuOpen ? <X size={23} /> : <Menu size={23} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-[#fce7f3] bg-white xl:hidden"
          >
            <div className="mx-auto max-w-[1500px] px-5 pb-5 pt-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-slate-100 py-3.5 text-sm font-semibold transition-colors hover:text-[#8c5b53] ${
                      link.active ? "text-[#8c5b53]" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                    <ArrowRight size={16} className="opacity-60" />
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#8c5b53] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#a51d55]"
              >
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone size={14} className="text-[#8c5b53]" />
                  +91 98765 43210
                </a>
                <a
                  href="mailto:hello@hopeivf.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={14} className="text-[#8c5b53]" />
                  hello@hopeivf.com
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
