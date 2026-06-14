"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string, attempt = 0) {
  if (!hash || hash === "#") return;

  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (attempt < 15) {
    window.setTimeout(() => scrollToHash(hash, attempt + 1), 100);
  }
}

export function SectionHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    scrollToHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname === "/") {
        scrollToHash(window.location.hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
}
