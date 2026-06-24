"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { Input, Select, message } from "antd";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { BUDGET_OPTIONS, EMAILJS_CONFIG, SOCIAL_LINKS } from "@/constants/site";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.string().min(1, "Please select an opportunity type"),
  projectDetails: z
    .string()
    .min(20, "Please provide at least 20 characters about the role"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const { TextArea } = Input;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      projectDetails: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      if (
        EMAILJS_CONFIG.serviceId &&
        EMAILJS_CONFIG.templateId &&
        EMAILJS_CONFIG.publicKey
      ) {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            from_name: data.name,
            from_email: data.email,
            company: data.company || "Not provided",
            budget: data.budget,
            opportunity_type: data.budget,
            message: data.projectDetails,
            to_email: SOCIAL_LINKS.email,
          },
          EMAILJS_CONFIG.publicKey
        );
        message.success("Message sent successfully! I'll get back to you soon.");
      } else {
        const mailtoLink = `mailto:${SOCIAL_LINKS.email}?subject=React.js Role Opportunity from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || "N/A"}\nOpportunity Type: ${data.budget}\n\nRole Details:\n${data.projectDetails}`
        )}`;
        const anchor = document.createElement("a");
        anchor.href = mailtoLink;
        anchor.click();
        message.info("Opening your email client to send the inquiry.");
      }
      reset();
    } catch {
      message.error("Failed to send message. Please try email or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Let's Discuss a Senior React Developer Role"
        description="Share the role details and I'll respond within 24 hours with my availability, experience fit, and next steps."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <div className="space-y-6">
            <GlassCard hover={false}>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {SOCIAL_LINKS.email && (
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Mail className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm">{SOCIAL_LINKS.email}</p>
                    </div>
                  </a>
                )}
                {SOCIAL_LINKS.whatsapp && (
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                      <MessageCircle className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm">Chat directly on WhatsApp</p>
                    </div>
                  </a>
                )}
              </div>
            </GlassCard>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {SOCIAL_LINKS.whatsapp && (
                <Button href={SOCIAL_LINKS.whatsapp} variant="secondary" external className="w-full">
                  <MessageCircle className="h-4 w-4" />
                  Message on WhatsApp
                </Button>
              )}
              {SOCIAL_LINKS.email && (
                <Button
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  variant="secondary"
                  external
                  className="w-full"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                </Button>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <GlassCard hover={false}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  {...register("name")}
                  placeholder="Your full name"
                  size="large"
                  status={errors.name ? "error" : undefined}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Email *
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  size="large"
                  status={errors.email ? "error" : undefined}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  {...register("company")}
                  placeholder="Your company name"
                  size="large"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Opportunity Type *
                </label>
                <Select
                  placeholder="Select role type"
                  size="large"
                  className="w-full"
                  options={BUDGET_OPTIONS.map((opt) => ({
                    label: opt.label,
                    value: opt.value,
                  }))}
                  onChange={(value) => setValue("budget", value)}
                  status={errors.budget ? "error" : undefined}
                />
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Role Details *
                </label>
                <TextArea
                  {...register("projectDetails")}
                  placeholder="Tell me about the React.js role, responsibilities, tech stack, location/remote setup, and timeline..."
                  rows={5}
                  status={errors.projectDetails ? "error" : undefined}
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Role Opportunity
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
