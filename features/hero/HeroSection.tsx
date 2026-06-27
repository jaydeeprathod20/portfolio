"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Briefcase,
  Building2,
  Globe,
  Award,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animations/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/profile";
import { RESUME_PATH } from "@/constants/site";
import { fadeInUp, defaultTransition } from "@/lib/animations";
import { useTheme } from "@/components/providers/ThemeProvider";

const trustIndicators = [
  { icon: Award, label: "Professional Experience", value: "3+ Years Experience" },
  { icon: Building2, label: "Business Software", value: "Enterprise Applications" },
  { icon: Briefcase, label: "Platform Expertise", value: "ERP & SaaS Platforms" },
  { icon: Globe, label: "Live Deployments", value: "Production Systems" },
];

export function HeroSection() {
  const [profileImageError, setProfileImageError] = useState(false);
  const { resolvedTheme } = useTheme();
  const profileImage =
    resolvedTheme === "light" ? "/images/light-mode.png" : siteConfig.profileImage;

  useEffect(() => {
    setProfileImageError(false);
  }, [profileImage]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Availability badge — full width above both columns */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="mb-8 lg:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm shadow-indigo-100/60 backdrop-blur-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300 dark:shadow-none">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Open to Senior React Developer roles
          </span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-x-16 lg:gap-y-0">
          {/* Role label — own row on desktop, aligns both columns below */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="text-sm font-medium uppercase tracking-widest text-indigo-400 lg:col-start-1 lg:row-start-1"
          >
            {siteConfig.role}
          </motion.p>

          {/* Headline + copy + actions — left column */}
          <div className="flex flex-col lg:col-start-1 lg:row-start-2 lg:pt-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.2 }}
              className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              {siteConfig.heroHeadline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.28 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mt-6"
            >
              {siteConfig.heroSubheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.36 }}
              className="mt-8 flex flex-wrap gap-4 lg:mt-10"
            >
              <Button href="/#case-studies" size="lg">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={RESUME_PATH} variant="secondary" size="lg" external>
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button href="/#contact" variant="ghost" size="lg">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...defaultTransition, delay: 0.44 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-12"
            >
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ ...defaultTransition, delay: 0.5 + index * 0.08 }}
                  className="text-center sm:text-left"
                >
                  <item.icon className="mx-auto mb-2 h-5 w-5 text-indigo-400 sm:mx-0" />
                  <p className="text-xs font-semibold text-foreground">{item.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile card — starts on same row as headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...defaultTransition, delay: 0.25 }}
            className="relative w-full lg:col-start-2 lg:row-start-2 lg:sticky lg:top-28 lg:pt-5"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/25 via-violet-500/10 to-cyan-500/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                {!profileImageError ? (
                  <Image
                    src={profileImage}
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    onError={() => setProfileImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-950">
                    <span className="text-6xl font-bold text-indigo-400/30">
                      {siteConfig.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 px-5 py-4">
                <h3 className="text-base font-semibold text-foreground">
                  {siteConfig.name}
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {siteConfig.location}
                </p>
                <p className="mt-1.5 text-sm font-medium text-indigo-400">
                  {siteConfig.experience} Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
