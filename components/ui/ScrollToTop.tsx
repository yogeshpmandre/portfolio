"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
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
        dark:bg-blue-500
        dark:hover:bg-blue-400
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0 pointer-events-none"
        }
      `}
    >
      <span className="-mt-1 text-3xl">⌃</span>
    </button>
  );
}