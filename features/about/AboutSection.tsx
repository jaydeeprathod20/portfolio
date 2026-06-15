"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Users } from "lucide-react";
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
        title="Full Stack MERN Developer with Enterprise Application Experience"
        description="Building scalable, data-driven web applications with React.js, Next.js, Node.js, and MongoDB."
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

            <div className="space-y-4">
              {siteConfig.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-indigo-400" />
                <h3 className="font-semibold text-foreground">Experience</h3>
              </div>
              {siteConfig.workExperience.map((job) => (
                <div key={job.company} className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {job.position}
                    </h4>
                    <p className="text-sm text-indigo-400">{job.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {job.duration}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-base text-muted-foreground">
                    {job.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-400" />
                <h3 className="font-semibold text-foreground">
                  Currently Open To
                </h3>
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
