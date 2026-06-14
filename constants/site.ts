export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaydeeprathod.dev";

export const RESUME_PATH = "/resume/Jaydeep-Rathod-Resume.pdf";
export const PROFILE_IMAGE = "/images/profile.png";

export const SOCIAL_LINKS = {
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "",
} as const;

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
} as const;

export const BUDGET_OPTIONS = [
  { label: "Under $5,000", value: "under-5k" },
  { label: "$5,000 – $15,000", value: "5k-15k" },
  { label: "$15,000 – $50,000", value: "15k-50k" },
  { label: "$50,000+", value: "50k-plus" },
  { label: "Not sure yet", value: "not-sure" },
] as const;
