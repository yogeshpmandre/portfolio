"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

import { certificates } from "@/data";

export default function Certificates() {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const scrollRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  const scroll = (
    direction: "left" | "right"
  ) => {
    if (!scrollRef.current) {
      return;
    }

    const amount = 350;

    scrollRef.current.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,
      behavior: "smooth",
    });
  };

  return (
    <Section id="certificates">
      <Container>
        <SectionTitle
          eyebrow="Certificates & Training"
          title="Continuous learning and professional development."
          description="Certifications and training programs across analytics engineering, AI, cloud platforms, visualization, and leadership."
        />

        <div className="group relative mt-16">
          {/* Left Arrow */}
          <button
            onClick={() =>
              scroll("left")
            }
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-lg
              backdrop-blur
              transition-all
              hover:scale-110
              dark:bg-slate-900/90
              lg:flex
              lg:opacity-0
              lg:group-hover:opacity-100
            "
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() =>
              scroll("right")
            }
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-lg
              backdrop-blur
              transition-all
              hover:scale-110
              dark:bg-slate-900/90
              lg:flex
              lg:opacity-0
              lg:group-hover:opacity-100
            "
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>

          {/* Certificate Strip */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-8
              overflow-x-auto
              pb-6
              snap-x
              snap-mandatory
              scroll-smooth
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {certificates.map(
              (certificate) => (
                <div
                  key={certificate.id}
                  onClick={() =>
                    setSelectedImage(
                      certificate.image
                    )
                  }
                  className="
                    group/card
                    min-w-[300px]
                    max-w-[300px]
                    cursor-pointer
                    snap-start
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    dark:border-slate-800
                    dark:bg-slate-900
                  "
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="
                        absolute inset-0 z-10
                        flex items-center justify-center
                        bg-black/0
                        text-sm font-medium text-white
                        opacity-0
                        transition-all duration-300
                        group-hover/card:bg-black/40
                        group-hover/card:opacity-100
                      "
                    >
                      Click to View
                    </div>

                    <Image
                      src={
                        certificate.image
                      }
                      alt={
                        certificate.title
                      }
                      fill
                      sizes="300px"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover/card:scale-105
                      "
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-4 p-6">
                    <Badge>
                      {
                        certificate.category
                      }
                    </Badge>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {
                        certificate.title
                      }
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {
                        certificate.issuer
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
            ← Hover to use arrows or swipe
            horizontally →
          </p>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              p-6
            "
            onClick={() =>
              setSelectedImage(null)
            }
          >
            <div
              className="relative"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <button
                onClick={() =>
                  setSelectedImage(null)
                }
                className="
                  absolute
                  -right-4
                  -top-4
                  z-10
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-slate-700
                  shadow-lg
                  hover:bg-slate-100
                "
              >
                <X size={20} />
              </button>

              <Image
                src={selectedImage}
                alt="Certificate"
                width={1600}
                height={1200}
                className="
                  max-h-[85vh]
                  w-auto
                  rounded-2xl
                  object-contain
                  shadow-2xl
                "
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}