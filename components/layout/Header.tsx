"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { siteConfig } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useCounter";
import { RESUME_PATH } from "@/constants/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 bg-indigo-500 transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name.split(" ")[0]}
              <span className="text-indigo-400">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden sm:block">
              <Button href="/#contact" size="sm">
                Hire React Developer
              </Button>
            </div>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-white/10 bg-background/95 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex flex-col gap-2 px-4">
                  <Button href="/#contact" size="sm">
                    Hire React Developer
                  </Button>
                  <Button href={RESUME_PATH} variant="secondary" size="sm" external>
                    Download Resume
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
