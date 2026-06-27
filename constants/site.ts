export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaydeeprathod.dev";

export const RESUME_PATH = "/resume/jaydeep_rathod_resume.pdf";
export const PROFILE_IMAGE = "/images/profile-react.png";

const DEFAULT_EMAIL = "jaydeepraj2001@gmail.com";

const getWhatsAppLink = (value: string) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "";
  }

  if (trimmedValue.startsWith("http")) {
    return trimmedValue;
  }

  const phoneNumber = trimmedValue.replace(/[^\d]/g, "");

  return phoneNumber ? `https://wa.me/${phoneNumber}` : "";
};

export const SOCIAL_LINKS = {
  email: process.env.NEXT_PUBLIC_EMAIL ?? DEFAULT_EMAIL,
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  whatsapp: getWhatsAppLink(
    process.env.NEXT_PUBLIC_WHATSAPP ?? process.env.NEXT_PUBLIC_PHONE ?? ""
  ),
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "",
} as const;

export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  SOCIAL_LINKS.email
)}`;

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
} as const;

export const FORMSUBMIT_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT ??
  `https://formsubmit.co/ajax/${SOCIAL_LINKS.email}`;

export const BUDGET_OPTIONS = [
  { label: "Full-time React.js role", value: "full-time-react-role" },
  { label: "Contract React.js role", value: "contract-react-role" },
  { label: "Frontend Engineer role", value: "frontend-engineer-role" },
  { label: "Next.js / React.js role", value: "nextjs-react-role" },
  { label: "Other hiring opportunity", value: "other-hiring-opportunity" },
] as const;
