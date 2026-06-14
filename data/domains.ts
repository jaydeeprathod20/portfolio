import {
  Truck,
  Factory,
  PackageSearch,
  HeartPulse,
  Cloud,
  Workflow,
  ShoppingCart,
} from "lucide-react";
import type { BusinessDomain } from "@/types";

export const businessDomains: BusinessDomain[] = [
  {
    id: "logistics",
    title: "Logistics & Courier Management",
    description:
      "End-to-end shipment tracking, carrier management, and route optimization for delivery businesses.",
    icon: Truck,
  },
  {
    id: "manufacturing-erp",
    title: "Manufacturing ERP",
    description:
      "Production workflows, inventory control, and operational reporting for manufacturing companies.",
    icon: Factory,
  },
  {
    id: "procurement",
    title: "Procurement & Supply Chain",
    description:
      "RFQ management, supplier workflows, purchase orders, and approval pipelines.",
    icon: PackageSearch,
  },
  {
    id: "healthcare",
    title: "Healthcare Marketplace",
    description:
      "Supplier discovery, quotation workflows, and secure marketplace platforms for healthcare.",
    icon: HeartPulse,
  },
  {
    id: "saas",
    title: "SaaS Platforms",
    description:
      "Multi-tenant architecture, subscription billing, and scalable product foundations.",
    icon: Cloud,
  },
  {
    id: "automation",
    title: "Business Automation",
    description:
      "Custom workflows, admin dashboards, and integrations that eliminate manual processes.",
    icon: Workflow,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Full-stack ordering platforms with payments, inventory, and admin management.",
    icon: ShoppingCart,
  },
];
