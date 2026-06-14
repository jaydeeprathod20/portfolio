import type { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "cost",
    question: "How much does a project cost?",
    answer:
      "Project costs depend on scope, complexity, and timeline. A focused MVP typically starts from $5,000, while enterprise ERP or logistics platforms range from $15,000 to $50,000+. I provide detailed estimates after a discovery call to understand your specific requirements.",
  },
  {
    id: "saas",
    question: "Can you build SaaS products?",
    answer:
      "Yes. I specialize in building SaaS products with multi-tenant architecture, subscription billing via Stripe, role-based access, admin dashboards, and scalable infrastructure designed for growth.",
  },
  {
    id: "maintenance",
    question: "Can you maintain existing applications?",
    answer:
      "Absolutely. I work with existing codebases — fixing bugs, adding features, optimizing performance, and modernizing legacy applications to current technology standards.",
  },
  {
    id: "international",
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with clients globally including Australia, UK, Singapore, and the US. Communication is handled via video calls, Slack, and email with flexible timezone coordination.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. I offer post-launch support packages including bug fixes, performance monitoring, feature updates, and ongoing maintenance to keep your application running smoothly.",
  },
  {
    id: "erp-crm",
    question: "Can you build ERP and CRM systems?",
    answer:
      "ERP and CRM systems are a core specialty. I have built manufacturing ERPs, logistics platforms, procurement systems, and custom CRM solutions for businesses across multiple industries.",
  },
];
