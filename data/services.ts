import {
  Cloud,
  Building2,
  Users,
  LayoutDashboard,
  Truck,
  Layers,
  Server,
  Plug,
  CreditCard,
  MapPin,
  Gauge,
  RefreshCw,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "saas-development",
    title: "SaaS Development",
    description:
      "Build subscription-ready SaaS products with scalable architecture, role-based access, and billing integrations.",
    benefits: [
      "Faster time-to-market for MVPs",
      "Architecture designed for growth",
      "Reduced technical debt from day one",
    ],
    deliverables: [
      "Multi-tenant application architecture",
      "Authentication & authorization",
      "Stripe billing integration",
      "Admin dashboard & analytics",
    ],
    icon: Cloud,
  },
  {
    id: "erp-development",
    title: "ERP Development",
    description:
      "Custom ERP systems tailored to manufacturing, logistics, and operational workflows.",
    benefits: [
      "Unified business operations",
      "Real-time inventory visibility",
      "Automated reporting & workflows",
    ],
    deliverables: [
      "Inventory & production modules",
      "Role-based access control",
      "PDF generation & printing",
      "Custom reporting dashboards",
    ],
    icon: Building2,
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    description:
      "Customer relationship platforms with pipeline management, communications, and analytics.",
    benefits: [
      "Centralized customer data",
      "Improved sales visibility",
      "Automated follow-up workflows",
    ],
    deliverables: [
      "Contact & lead management",
      "Pipeline tracking",
      "Activity logging",
      "Reporting & exports",
    ],
    icon: Users,
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    description:
      "Data-rich admin panels with real-time metrics, filters, and operational controls.",
    benefits: [
      "Actionable business insights",
      "Reduced admin overhead",
      "Consistent UX across modules",
    ],
    deliverables: [
      "Interactive data visualizations",
      "CRUD management interfaces",
      "Export & bulk operations",
      "Responsive layouts",
    ],
    icon: LayoutDashboard,
  },
  {
    id: "logistics-platforms",
    title: "Logistics Platforms",
    description:
      "Courier management, shipment tracking, driver operations, and route optimization systems.",
    benefits: [
      "End-to-end shipment visibility",
      "Optimized delivery operations",
      "Automated invoicing & labels",
    ],
    deliverables: [
      "Shipment tracking portal",
      "Carrier & driver management",
      "Google Maps integration",
      "Label printing & invoicing",
    ],
    icon: Truck,
  },
  {
    id: "nextjs-development",
    title: "Next.js Development",
    description:
      "High-performance web applications with SSR, SEO optimization, and modern React patterns.",
    benefits: [
      "Superior SEO & performance",
      "Fast page loads globally",
      "Production-ready architecture",
    ],
    deliverables: [
      "App Router implementation",
      "Server & client components",
      "API routes & middleware",
      "Performance optimization",
    ],
    icon: Layers,
  },
  {
    id: "mern-stack",
    title: "MERN Stack Applications",
    description:
      "Full-stack JavaScript applications with MongoDB, Express, React, and Node.js.",
    benefits: [
      "Single language across stack",
      "Rapid development cycles",
      "Flexible document-based data",
    ],
    deliverables: [
      "RESTful API development",
      "MongoDB schema design",
      "React frontend",
      "Authentication & authorization",
    ],
    icon: Server,
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    description:
      "Connect your application with third-party services, legacy systems, and external data sources.",
    benefits: [
      "Unified data across systems",
      "Automated data sync",
      "Reduced manual entry",
    ],
    deliverables: [
      "REST & webhook integrations",
      "Error handling & retry logic",
      "API documentation",
      "Monitoring & logging",
    ],
    icon: Plug,
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Integration",
    description:
      "Secure payment processing with Stripe and other gateways for subscriptions and one-time payments.",
    benefits: [
      "PCI-compliant payment flows",
      "Subscription management",
      "Automated billing cycles",
    ],
    deliverables: [
      "Stripe checkout integration",
      "Webhook handling",
      "Invoice & receipt generation",
      "Refund & dispute workflows",
    ],
    icon: CreditCard,
  },
  {
    id: "google-maps",
    title: "Google Maps Integration",
    description:
      "Location services, route optimization, geocoding, and interactive map experiences.",
    benefits: [
      "Real-time location tracking",
      "Optimized delivery routes",
      "Enhanced user experience",
    ],
    deliverables: [
      "Interactive map components",
      "Route calculation",
      "Geocoding & autocomplete",
      "Marker & cluster management",
    ],
    icon: MapPin,
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Audit and optimize existing applications for speed, Core Web Vitals, and scalability.",
    benefits: [
      "Improved user retention",
      "Better search rankings",
      "Reduced infrastructure costs",
    ],
    deliverables: [
      "Performance audit report",
      "Code splitting & lazy loading",
      "Database query optimization",
      "Caching strategy",
    ],
    icon: Gauge,
  },
  {
    id: "modernization",
    title: "Existing Application Modernization",
    description:
      "Migrate legacy applications to modern stacks with minimal disruption to operations.",
    benefits: [
      "Extended application lifespan",
      "Improved maintainability",
      "Modern developer experience",
    ],
    deliverables: [
      "Migration roadmap",
      "Incremental refactoring",
      "Testing & QA coverage",
      "Documentation & handoff",
    ],
    icon: RefreshCw,
  },
];
