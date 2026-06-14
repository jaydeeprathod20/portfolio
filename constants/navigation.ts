import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_LINKS = {
  navigation: NAV_ITEMS,
  services: [
    { label: "SaaS Development", href: "/#services" },
    { label: "ERP Systems", href: "/#services" },
    { label: "Logistics Platforms", href: "/#services" },
    { label: "Application Modernization", href: "/#services" },
  ],
  resources: [
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Download Resume", href: "/resume/Jaydeep-Rathod-Resume.pdf" },
    { label: "FAQ", href: "/#faq" },
  ],
};
