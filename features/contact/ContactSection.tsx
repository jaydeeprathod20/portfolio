"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "emailjs-com";
import { Input, notification } from "antd";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  BUDGET_OPTIONS,
  EMAILJS_CONFIG,
  FORMSUBMIT_ENDPOINT,
  GMAIL_COMPOSE_URL,
  SOCIAL_LINKS,
} from "@/constants/site";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  projectDetails: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const { TextArea } = Input;
const successNotificationContent = (
  <div>
    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Message sent successfully!
    </p>
    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
      I'll get back to you soon.
    </p>
  </div>
);

const errorNotificationContent = (
  <div>
    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Failed to send message
    </p>
    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
      Please try WhatsApp or email directly.
    </p>
  </div>
);

const sendWithFormSubmit = async (data: ContactFormValues) => {
  const subject = data.name
    ? `React.js Role Opportunity from ${data.name}`
    : "React.js Role Opportunity";

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "table",
      _captcha: "false",
      name: data.name || "N/A",
      email: data.email,
      company: data.company || "N/A",
      opportunity_type: data.budget || "N/A",
      role_details: data.projectDetails || "N/A",
      _replyto: data.email,
    }),
  });

  if (!response.ok) {
    throw new Error("FormSubmit request failed");
  }
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationApi, notificationContextHolder] =
    notification.useNotification();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
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
        notificationApi.success({
          title: successNotificationContent,
          placement: "top",
          duration: 4,
          className: "contact-notification",
        });
      } else {
        await sendWithFormSubmit(data);
        notificationApi.success({
          title: successNotificationContent,
          placement: "top",
          duration: 4,
          className: "contact-notification",
        });
      }
      reset();
    } catch (error) {
      console.error(error);
      notificationApi.error({
        title: errorNotificationContent,
        placement: "top",
        duration: 4,
        className: "contact-notification",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      {notificationContextHolder}
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
                    href={GMAIL_COMPOSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  href={GMAIL_COMPOSE_URL}
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
                  Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Your full name"
                      size="large"
                      status={errors.name ? "error" : undefined}
                    />
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Email *
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="you@company.com"
                      size="large"
                      status={errors.email ? "error" : undefined}
                    />
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Company
                </label>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Your company name"
                      size="large"
                    />
                  )}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Opportunity Type
                </label>
                <Controller
                  name="budget"
                  control={control}
                  render={({ field }) => (
                    <div className="relative">
                      <select
                        value={field.value || ""}
                        onChange={(event) => field.onChange(event.target.value)}
                        onBlur={field.onBlur}
                        className={`h-11 w-full appearance-none rounded-lg border border-black/10 bg-white/90 px-3 pr-10 text-base shadow-sm outline-none transition-colors hover:border-indigo-500/35 focus:border-indigo-500/65 focus:ring-4 focus:ring-indigo-500/15 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white/20 dark:focus:border-indigo-400/60 ${
                          field.value
                            ? "text-foreground dark:text-foreground"
                            : "text-slate-400 dark:text-slate-400"
                        }`}
                      >
                        <option value="" className="bg-white text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                          Select role type
                        </option>
                        {BUDGET_OPTIONS.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-400" />
                    </div>
                  )}
                />
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-400">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Role Details
                </label>
                <Controller
                  name="projectDetails"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      placeholder="Tell me about the React.js role, responsibilities, tech stack, location/remote setup, and timeline..."
                      rows={5}
                      status={errors.projectDetails ? "error" : undefined}
                    />
                  )}
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
