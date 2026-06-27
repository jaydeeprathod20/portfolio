"use client";

import Image from "next/image";
import aboutImage from "@/public/images/about.png";
import aboutImage2 from "@/public/images/about_2.png";
import { Briefcase, MapPin, Users } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/profile";

const ABOUT_IMAGES = [
  {
    src: aboutImage,
    alt: `${siteConfig.name} speaking at Indus University`,
  },
  {
    src: aboutImage2,
    alt: `${siteConfig.name} working at a desk`,
  },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeader
        label="About"
        title="Senior React Developer with Enterprise Application Experience"
        description="Building scalable, data-driven web applications with React.js, Next.js, and modern frontend architecture, with hands-on exposure to Node.js, Express.js, and MongoDB."
      />

      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="mx-auto flex w-full max-w-[18rem] flex-col items-center gap-5 lg:max-w-[20rem]">
            {ABOUT_IMAGES.map((image) => (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 18rem, (max-width: 1024px) 18rem, 20rem"
              />
            ))}
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
