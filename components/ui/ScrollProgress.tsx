"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        left-0
        top-0
        z-[100]
        h-1
        bg-gradient-to-r
        from-cyan-500
        via-blue-600
        to-indigo-600
        transition-all
        duration-150
      "
      style={{
        width: `${scrollProgress}%`,
      }}
    />
  );
}