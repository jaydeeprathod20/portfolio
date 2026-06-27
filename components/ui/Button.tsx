"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { scrollToHash } from "@/components/layout/SectionHashScroll";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 hover:shadow-indigo-500/40",
    secondary:
      "border border-black/10 bg-white/70 text-foreground shadow-sm backdrop-blur-sm hover:border-indigo-500/30 hover:bg-white dark:border-white/20 dark:bg-white/5 dark:hover:border-white/30 dark:hover:bg-white/10",
    ghost:
      "text-muted-foreground hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);
  const handleHashLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!href?.includes("#")) {
      return;
    }

    const url = new URL(href, window.location.href);

    if (url.pathname === window.location.pathname && url.hash) {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.hash}`);
      scrollToHash(url.hash);
    }
  };

  if (href) {
    const shouldOpenNewTab =
      external && !href.startsWith("mailto:") && !href.startsWith("tel:");

    if (external) {
      return (
        <motion.a
          href={href}
          target={shouldOpenNewTab ? "_blank" : undefined}
          rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          scroll={!href.includes("#")}
          className={classes}
          onClick={handleHashLinkClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(classes, disabled && "cursor-not-allowed opacity-50")}
    >
      {children}
    </motion.button>
  );
}
