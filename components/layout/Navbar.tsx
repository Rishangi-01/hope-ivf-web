"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About Us", href: "/about-us" },
  { name: "Our Services", href: "/services" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10 lg:py-6 xl:px-14">
        <Link
          href="/"
          aria-label="Hope IVF home"
          className="relative z-10 flex h-12 w-[148px] shrink-0 items-center justify-center rounded-full bg-[#8c5b53] px-4 transition-transform duration-300 hover:scale-[1.03] sm:h-14 sm:w-[184px]"
        >
          <Image
            src="/images/white-logo.png"
            alt="Hope IVF"
            fill
            sizes="184px"
            className="object-contain px-4 py-2"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-[#fdf2f7]/95 px-3 py-2 shadow-sm backdrop-blur-md lg:flex"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <Link
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={`block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold tracking-[0.04em] transition-colors duration-200 2xl:px-4 2xl:text-base ${
                  link.active
                    ? "bg-white/70 text-[#8c5b53]"
                    : "text-[#71504a] hover:bg-white/60 hover:text-[#8c5b53]"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="relative z-10 hidden lg:block"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Link
            href="/book-appointment"
            className="flex min-h-12 items-center justify-center rounded-full bg-[#fdf2f7] px-7 text-sm font-medium text-[#71504a] shadow-sm transition-colors duration-200 hover:bg-white sm:min-h-14 sm:min-w-[172px] sm:text-base"
          >
            Book Appointment
          </Link>
        </motion.div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#f9dce9] bg-white/90 text-[#8c5b53] shadow-sm transition-colors hover:bg-[#fdf2f7] lg:hidden"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-4 overflow-hidden rounded-2xl border border-[#f9dce9] bg-white/95 shadow-lg backdrop-blur-md sm:mx-6 lg:hidden"
          >
            <div className="px-5 pb-5 pt-2">
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
                    aria-current={link.active ? "page" : undefined}
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
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[#8c5b53] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#754840]"
              >
                Contact Us
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
