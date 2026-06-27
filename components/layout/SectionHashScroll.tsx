"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADER_OFFSET = 88;
let activeScrollId = 0;

function getTargetId(hash: string) {
  return decodeURIComponent(hash).split("#").filter(Boolean).at(-1) ?? "";
}

function getHashTarget(hash: string) {
  const id = getTargetId(hash);

  return id ? document.getElementById(id) : null;
}

export function cancelHashScroll() {
  activeScrollId += 1;
}

export function scrollToHash(hash: string, attempt = 0, scrollId?: number) {
  if (!hash || hash === "#") return;

  const currentScrollId = scrollId ?? activeScrollId + 1;

  if (!scrollId) {
    activeScrollId = currentScrollId;
  }

  if (currentScrollId !== activeScrollId) {
    return;
  }

  const target = getHashTarget(hash);
  if (target) {
    if (getTargetId(window.location.hash) !== getTargetId(hash)) {
      return;
    }

    const top =
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({ top, behavior: attempt === 0 ? "smooth" : "auto" });

    if (attempt < 6) {
      window.setTimeout(
        () => scrollToHash(hash, attempt + 1, currentScrollId),
        150
      );
    }

    return;
  }

  if (attempt < 60) {
    window.setTimeout(
      () => scrollToHash(hash, attempt + 1, currentScrollId),
      150
    );
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

  useEffect(() => {
    const cancelOnUserScroll = () => cancelHashScroll();

    window.addEventListener("wheel", cancelOnUserScroll, { passive: true });
    window.addEventListener("touchstart", cancelOnUserScroll, { passive: true });
    window.addEventListener("keydown", cancelOnUserScroll);

    return () => {
      window.removeEventListener("wheel", cancelOnUserScroll);
      window.removeEventListener("touchstart", cancelOnUserScroll);
      window.removeEventListener("keydown", cancelOnUserScroll);
    };
  }, []);

  return null;
}
