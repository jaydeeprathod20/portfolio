"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur-xl",
        "dark:border-white/10 dark:bg-white/[0.03]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
        hover && "transition-shadow hover:shadow-[0_16px_48px_rgba(99,102,241,0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
