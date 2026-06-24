"use client";

import { Collapse } from "antd";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  const items = faqItems.map((item) => ({
    key: item.id,
    label: (
      <span className="text-base font-medium text-foreground">{item.question}</span>
    ),
    children: (
      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
    ),
  }));

  return (
    <Section id="faq" className="bg-muted/30">
      <SectionHeader
        label="FAQ"
        title="Frequently Asked Questions"
        description="Common questions for recruiters and hiring teams evaluating me for Senior React Developer roles."
      />

      <FadeIn className="mx-auto max-w-3xl">
        <Collapse
          items={items}
          bordered={false}
          expandIconPosition="end"
          className="faq-collapse bg-transparent"
        />
      </FadeIn>
    </Section>
  );
}
