"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/data/services";
import { cn } from "@/utils/cn";

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(
    services[0]?.id ?? null
  );

  return (
    <Section id="services" className="bg-muted/30">
    <SectionHeader
  label="Technical Expertise"
  title="Technologies & Solutions I Build"
  description="3+ years of experience building React applications, enterprise ERP systems, logistics platforms, admin dashboards, and frontend-led web solutions."
/>

      <div className="grid gap-4 lg:grid-cols-2">
        {services.map((service) => {
          const isExpanded = expandedId === service.id;
          return (
            <GlassCard
              key={service.id}
              className={cn(
                "cursor-pointer transition-all",
                isExpanded && "ring-1 ring-indigo-500/30"
              )}
              hover={false}
            >
              <button
                className="flex w-full items-start gap-4 text-left"
                onClick={() =>
                  setExpandedId(isExpanded ? null : service.id)
                }
                aria-expanded={isExpanded}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
                  <service.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-400">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-400">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
