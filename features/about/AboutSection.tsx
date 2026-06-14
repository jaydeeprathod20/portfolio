"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/profile";

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeader
        label="About"
        title="Building Software That Drives Business Results"
        description="I translate complex business requirements into scalable, production-grade applications."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 blur-xl"
            />
            <GlassCard hover={false} className="relative overflow-hidden p-0">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#0a1628]">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </GlassCard>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge variant="accent">
                <MapPin className="mr-1 h-3 w-3" />
                {siteConfig.location}
              </Badge>
              <Badge variant="accent">
                {siteConfig.experience} Experience
              </Badge>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {siteConfig.aboutStory}
            </p>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-400" />
                <h3 className="font-semibold text-foreground">Who I Work With</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.targetClients.map((client) => (
                  <Badge key={client} variant="outline">
                    {client}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
