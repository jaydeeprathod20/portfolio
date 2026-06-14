"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { cn } from "@/utils/cn";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ ...defaultTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
