import type { NavItem } from "@/types";
import { RESUME_PATH } from "@/constants/site";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#services" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Contact", href: "/#contact" },
  ],
  services: [
    { label: "React.js", href: "/#services" },
    { label: "Next.js", href: "/#services" },
    { label: "TypeScript", href: "/#services" },
    { label: "Frontend Architecture", href: "/#services" },
  ],
  resources: [
    { label: "Download Resume", href: RESUME_PATH },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Contact", href: "/#contact" },
  ],
};
