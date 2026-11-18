"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { site } from "@/data";

import "swiper/css";

const itemPositions = [
  "pt-8 sm:pt-12",
  "pt-0",
  "pt-8 sm:pt-12",
  "pt-0",
];

export default function WellnessGallery() {
  const galleryItems =
    site.Insurance.sections.Gallery.variants.InsuranceGallery1.items;
  const galleryTitle =
    site.Insurance.sections.Gallery.variants.InsuranceGallery1.title;
  const reduceMotion = useReducedMotion();

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (event.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + galleryItems.length) % galleryItems.length
        );
      } else if (event.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev === null ? null : (prev + 1) % galleryItems.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, galleryItems.length]);

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-[#fffaf7] py-16 sm:py-20 lg:py-24 px-6 sm:px-6 lg:px-10 xl:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#8c5b53]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#302624] sm:text-5xl lg:text-6xl">
            {galleryTitle}{" "}
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-[3px] w-12 rounded-full bg-[#8c5b53]"
          />
        </motion.div>

        <Suspense
          fallback={
            <div
              className="h-[370px] sm:h-[440px] lg:h-[500px]"
              aria-hidden="true"
            />
          }
        >
          <Swiper
            modules={[Autoplay]}
            loop
            grabCursor
            speed={850}
            autoplay={
              reduceMotion || selectedImageIndex !== null
                ? false
                : {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            slidesPerView={1.12}
            spaceBetween={16}
            breakpoints={{
              480: {
                slidesPerView: 1.55,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2.3,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="!overflow-hidden"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={item.src}>
                <div className={itemPositions[index % itemPositions.length]}>
                  <button
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`View enlarged image: ${item.alt || `Gallery image ${index + 1}`}`}
                    className="group relative block w-full h-[350px] overflow-hidden rounded-[4px] bg-[#e7e3df] sm:h-[420px] lg:h-[470px] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#8c5b53] focus-visible:outline-offset-2"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 479px) 88vw, (max-width: 639px) 64vw, (max-width: 899px) 43vw, (max-width: 1199px) 31vw, 24vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#2e211d]/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#8c5b53] shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <ZoomIn size={22} />
                      </span>
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </div>

      {/* Lightbox Modal Popup */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6 md:p-10 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            {/* Top Bar with counter and close button */}
            <div
              className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wider text-white backdrop-blur-md">
                {selectedImageIndex + 1} / {galleryItems.length}
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Close enlarged image"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation: Previous Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Navigation: Next Image */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            {/* Enlarged Image & Caption */}
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center justify-center max-h-[82vh] max-w-5xl w-full"
            >
              <div className="relative h-[65vh] sm:h-[75vh] w-full">
                <Image
                  src={galleryItems[selectedImageIndex].src}
                  alt={galleryItems[selectedImageIndex].alt}
                  fill
                  sizes="95vw"
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
