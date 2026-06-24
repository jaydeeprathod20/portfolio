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
  { label: "Full-time React.js role", value: "full-time-react-role" },
  { label: "Contract React.js role", value: "contract-react-role" },
  { label: "Frontend Engineer role", value: "frontend-engineer-role" },
  { label: "Next.js / React.js role", value: "nextjs-react-role" },
  { label: "Other hiring opportunity", value: "other-hiring-opportunity" },
] as const;
