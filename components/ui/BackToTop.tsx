"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-700
      "
      aria-label="Back to top"
    >
      <ArrowUp size={22} />
    </button>
  );
}