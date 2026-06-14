import type { CaseStudyContent } from "@/types/case-study";

export const caseStudyContents: CaseStudyContent[] = [
  {
    slug: "heycouriers",
    assetFolder: "heycouriers",
    title: "HeyCouriers",
    tagline: "Courier management platform for Australian last-mile delivery operations",
    overview:
      "HeyCouriers is a production-grade logistics platform built for THE BIG BOX GROUP PTY LTD T/A HEY COURIERS, serving Australian businesses with shipment tracking, driver operations, route optimization, wallet billing, and invoice generation across web and mobile.",
    description:
      "A full-stack courier management system covering live delivery tracking on Google Maps, optimized route planning, shipment lifecycle management with proof-of-delivery, carrier and driver administration, wallet recharges, and company-level billing for Australian courier operations.",
    businessProblem:
      "Australian courier operators were managing deliveries across disconnected tools — spreadsheets for shipments, manual invoicing, and no unified view of driver routes or delivery status. Operations teams could not track 5,500+ completed deliveries, 443 pending shipments, and 7 active drivers in real time, leading to delayed customer updates and inefficient route planning across Sydney and surrounding regions.",
    role: "Full Stack Developer — end-to-end ownership of frontend modules, REST APIs, database design, Google Maps integration, and deployment.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Database Design",
      "Authentication",
      "Deployment",
      "Testing",
    ],
    challenges: [
      "Synchronizing shipment status updates across the shipment list, detail panels, and live map markers in real time",
      "Building Google Maps route visualization with numbered delivery stops and optimized polylines across large geographic areas",
      "Implementing proof-of-delivery workflows with photo uploads, GPS coordinates, and downloadable POD documents",
      "Designing wallet recharge and invoice generation flows with accurate financial calculations for multiple companies",
      "Managing role-based access for drivers, depot managers, company admins, and platform operators",
    ],
    solution:
      "Built a modular React frontend with an Express.js and MongoDB backend. Integrated Google Maps for live delivery tracking and route optimization. Implemented a shipment timeline with status badges (Loaded, In Transit, Delivered, Failed), photo evidence capture, and POD downloads. Added wallet management, invoice generation, CSV route exports, and responsive mobile views for field operations.",
    features: [
      "Live Delivery Dashboard",
      "Shipment Tracking Timeline",
      "Optimized Routes with Google Maps",
      "Proof of Delivery & Photo Upload",
      "Invoice & Wallet Management",
      "Driver & Carrier Management",
      "Company & User Administration",
      "Mobile-Responsive Operations View",
    ],
    featureBreakdown: [
      {
        title: "Live Delivery Dashboard",
        description:
          "Operational dashboard showing 5,500+ completed deliveries, 443 pending, and 7 active drivers with year-based filtering and a Sydney-area map with live route markers.",
      },
      {
        title: "Shipment Tracking",
        description:
          "Chronological delivery timeline with status badges, driver assignment, GPS coordinates, photo evidence, and one-click POD download for delivered packages.",
      },
      {
        title: "Optimized Routes",
        description:
          "Route optimization view with delivery list, destination details, activity notes, and map polylines connecting numbered stops — with CSV export for route data.",
      },
      {
        title: "Billing & Wallet",
        description:
          "Wallet recharge invoices with company billing details, ABN tracking, line-item amounts, and automated total calculations for prepaid/postpaid accounts.",
      },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "REST APIs",
      "Redux",
    ],
    architecture: [
      "React SPA with modular sidebar navigation for 15+ operational modules",
      "Express.js REST API with MongoDB document models for shipments, routes, drivers, and companies",
      "Google Maps JavaScript API for live markers, polylines, and route optimization",
      "Role-based access control for admin, company, driver, and depot manager roles",
      "File upload pipeline for proof-of-delivery photos and PDF invoice generation",
    ],
    timeline: "Multi-phase development across discovery, core logistics modules, maps integration, billing, and production deployment.",
    businessImpact: [
      "Centralized 5,500+ delivery records with real-time operational visibility",
      "Automated invoice and wallet recharge workflows replacing manual billing",
      "End-to-end shipment tracking with photo-based proof of delivery",
      "Route optimization reducing delivery planning time across Sydney metro routes",
    ],
    keyMetrics: [
      { label: "Completed Deliveries", value: "5,500+" },
      { label: "Active Drivers", value: "7" },
      { label: "Operational Modules", value: "15+" },
      { label: "Map Integration", value: "Google Maps" },
    ],
    category: "Logistics",
    featured: true,
    featuredOrder: 1,
  },
  {
    slug: "aluka-erp",
    assetFolder: "aluka-erp",
    title: "Aluka ERP",
    tagline: "Manufacturing ERP for aluminium extrusion and logistics operations",
    overview:
      "Aluka ERP (Aluka Extrusion Industries LLP) is an enterprise resource planning system covering sales, production, warehouse, logistics weighbridge operations, material indents, purchase inward, scrap management, and customer document generation for aluminium extrusion manufacturing.",
    description:
      "A custom ERP platform for Aluka Extrusion with dashboard KPIs, production workflows, first and second weight entry at weighbridge, transporter and vehicle master management, material indents, purchase inward tracking, scrap management, and customer PDF generation.",
    businessProblem:
      "Aluka Extrusion needed to replace manual weighbridge recording, paper-based material indents, and disconnected production tracking. Logistics teams recorded vehicle weights on paper without photo evidence, warehouse staff lacked real-time visibility into work orders and dispatch weights, and customer documents were generated manually.",
    role: "Full Stack Developer — responsible for ERP module development, logistics workflows, reporting dashboards, and PDF generation.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Integration",
      "Authentication",
      "Testing",
    ],
    challenges: [
      "Building first and second weight entry workflows with camera capture integration at the weighbridge",
      "Tracking precise bundle weights (kg) across packing and dispatch with fiscal year filtering",
      "Designing multi-module navigation across sales, production, warehouse, and logistics departments",
      "Generating customer PDFs and purchase inward documents from structured ERP data",
      "Managing material indents and scrap inventory with accurate stock reconciliation",
    ],
    solution:
      "Developed a React-based ERP with Express.js and MongoDB. Built weighbridge modules with vehicle master, transporter management, dual weight entry (first/second), and camera capture for load verification. Added dashboard KPI cards for work orders, packed bundles, and dispatch weights with monthly bar charts. Implemented material indent, purchase inward, scrap management, and customer PDF modules.",
    features: [
      "Operational Dashboard with KPI Cards",
      "First & Second Weight Entry",
      "Vehicle & Transporter Master",
      "Material Indent Management",
      "Purchase Inward Tracking",
      "Scrap Management",
      "Customer PDF Generation",
      "Monthly Production Analytics",
    ],
    featureBreakdown: [
      {
        title: "Weighbridge Operations",
        description:
          "First weight entry form with vehicle selection, material type, purchaser details, date/time stamping, and dual camera capture for load verification at entry.",
      },
      {
        title: "Production Dashboard",
        description:
          "KPI cards for profiles, quotations, work orders, packed bundles, and dispatched weights with FY 2026-27 filtering and monthly bar charts.",
      },
      {
        title: "Material & Procurement",
        description:
          "Material indent creation, purchase inward recording, and scrap management modules connected to warehouse inventory.",
      },
      {
        title: "Customer Documents",
        description:
          "Automated customer PDF generation and purchase inward documentation from ERP transaction data.",
      },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PDF Generation",
      "REST APIs",
    ],
    architecture: [
      "Multi-module ERP with icon-based sidebar for sales, production, warehouse, and logistics",
      "MongoDB schemas for weighbridge entries, vehicles, materials, indents, and dispatch records",
      "Camera capture integration for weighbridge photo evidence",
      "Fiscal year and date-range filtering on dashboard aggregations",
      "PDF generation service for customer and purchase documents",
    ],
    timeline: "Phased rollout starting with dashboard and production modules, followed by logistics weighbridge and procurement workflows.",
    businessImpact: [
      "Digitized weighbridge operations with photo-verified weight entries",
      "Unified visibility into work orders, packing, and dispatch weights",
      "Automated customer PDF generation reducing manual document preparation",
      "Streamlined material indent and purchase inward workflows",
    ],
    keyMetrics: [
      { label: "ERP Modules", value: "8+" },
      { label: "Weighbridge Capture", value: "Dual Camera" },
      { label: "Fiscal Year Support", value: "FY 2026-27" },
      { label: "Weight Tracking", value: "kg Precision" },
    ],
    category: "Manufacturing ERP",
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: "hasten-erp",
    assetFolder: "hasten-erp",
    title: "Hasten ERP",
    tagline: "Manufacturing ERP for Hasten Extrusions with production-to-dispatch tracking",
    overview:
      "Hasten ERP is an enterprise platform for Hasten Extrusions Pvt. Ltd. covering design, sales, production, warehouse, packing, dispatch, reporting, and user management — tracking 685 work orders, 31,251 packed bundles, and 29,432 dispatched bundles with precise weight calculations.",
    description:
      "A manufacturing ERP with role-based user management, production dashboards, bundle inward tracking, report generation, PDF printing workflows, and mobile-responsive views for factory and warehouse operations.",
    businessProblem:
      "Hasten Extrusions managed 175 profiles, 157 quotations, and hundreds of work orders across departments using disconnected processes. Teams lacked a single dashboard for packing vs dispatch metrics (1.1M+ kg packed, 1M+ kg dispatched), user access was unmanaged across 26 staff accounts, and report generation required manual PDF preparation.",
    role: "Full Stack Developer — built dashboard analytics, user management, reporting, PDF generation, and production workflow modules.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Authentication",
      "API Integration",
      "Testing",
      "Deployment",
    ],
    challenges: [
      "Aggregating large production datasets — 31,251 packed bundles and 29,432 dispatched bundles — into real-time dashboard KPIs",
      "Implementing role-based user management with 26+ users, activity logging, and export to Excel/PDF",
      "Building monthly stats bar charts comparing work orders, packing, and dispatch volumes",
      "Designing bundle inward workflows with accurate weight and quantity tracking",
      "Creating print-ready PDF reports with consistent formatting for production teams",
    ],
    solution:
      "Built a React ERP frontend with Express.js/MongoDB backend. Implemented a KPI dashboard with date-range filtering, monthly bar charts, and quotation conversion tracking (108 of 157 converted). Added paginated user management with role groups, activity logs, Excel/PDF export, bundle inward module, and mobile-responsive views for shop floor access.",
    features: [
      "Production Dashboard with KPI Cards",
      "Monthly Stats Bar Charts",
      "User & Role Management",
      "Bundle Inward Tracking",
      "Report Generation",
      "PDF Print Workflows",
      "Activity Logging",
      "Mobile-Responsive Views",
    ],
    featureBreakdown: [
      {
        title: "Production Dashboard",
        description:
          "Seven KPI cards tracking 175 profiles, 157 quotations (108 converted), 685 work orders, 31,251 packed bundles (1.12M kg), and 29,432 dispatched bundles (1.05M kg).",
      },
      {
        title: "User Management",
        description:
          "Paginated user table with 26 accounts, role groups, last login tracking, active/inactive status, and Excel/PDF export for admin teams.",
      },
      {
        title: "Reporting & PDF",
        description:
          "Report pages with production data filters and print-ready PDF generation for warehouse and dispatch documentation.",
      },
      {
        title: "Bundle Inward",
        description:
          "Bundle inward module for recording incoming production bundles with weight and quantity validation against work orders.",
      },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PDF Generation",
      "Redux",
      "REST APIs",
    ],
    architecture: [
      "Multi-department ERP with sidebar modules for design, sales, production, warehouse, packing, and dispatch",
      "MongoDB aggregation pipelines for dashboard KPI calculations and monthly stats",
      "Role-based access with user groups, activity logs, and session tracking",
      "PDF generation engine for production and dispatch reports",
      "Responsive layout supporting desktop admin and mobile shop floor views",
    ],
    timeline: "Iterative development from core dashboard and user management through production tracking, reporting, and PDF workflows.",
    businessImpact: [
      "Real-time visibility into 685 work orders and 1.1M+ kg of packed production",
      "Managed 26 user accounts with role-based access and activity auditing",
      "Automated PDF report generation replacing manual print preparation",
      "Quotation conversion tracking (69% conversion rate) for sales pipeline visibility",
    ],
    keyMetrics: [
      { label: "Work Orders", value: "685" },
      { label: "Packed Bundles", value: "31,251" },
      { label: "Dispatched (kg)", value: "1.05M+" },
      { label: "System Users", value: "26" },
    ],
    category: "Manufacturing ERP",
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: "smartbuyer",
    assetFolder: "smartbuyer",
    title: "SmartBuyer (PROCEM)",
    tagline: "Procurement platform for RFQ management, purchase orders, and supplier workflows",
    overview:
      "SmartBuyer (PROCEM) is a B2B procurement platform enabling vendors and buyers to manage RFQ lifecycles — from initial offers and revised quotations through purchase order approval, invoicing, and procurement inward tracking.",
    description:
      "An enterprise procurement system with vendor RFQ dashboards, multi-stage offer submissions, purchase order summaries with GST calculations, approval workflows, supplier onboarding, demo requests, and invoice management.",
    businessProblem:
      "Procurement teams and vendors tracked RFQs through email chains and spreadsheets with no visibility into offer stages — initial submissions, revised offers (R1/R2), PO approvals, or lost bids. Finance teams manually calculated GST amounts on purchase orders, and supplier onboarding lacked a structured multi-step workflow.",
    role: "Full Stack Developer — built RFQ vendor portal, purchase order module, approval workflows, and supplier onboarding.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Database Design",
      "Authentication",
      "Testing",
    ],
    challenges: [
      "Tracking RFQ lifecycle stages — initial offer, revised offers, PO received, and RFQ lost — with real-time status counters",
      "Building purchase order summary with GST-inclusive and GST-exclusive amount calculations",
      "Designing multi-step supplier onboarding with demo request and approval flows",
      "Implementing date-range and company filters across large RFQ datasets with sortable data tables",
      "Managing procurement inward workflows connecting PO approvals to inventory receipt",
    ],
    solution:
      "Developed a React procurement portal with Express.js/MongoDB backend. Built vendor RFQ dashboard with status KPI cards, sortable data tables with date/company filters, PO summary with approval status tracking, multi-step supplier onboarding, invoice pages, and procurement inward module.",
    features: [
      "RFQ Vendor Dashboard",
      "Multi-Stage Offer Tracking",
      "Purchase Order Summary",
      "Approval Workflows",
      "Supplier Onboarding",
      "Invoice Management",
      "Procurement Inward",
      "Demo Request Portal",
    ],
    featureBreakdown: [
      {
        title: "RFQ Management",
        description:
          "Vendor dashboard with KPI cards for total RFQs, pending initial offers, revised offers (R1/R2), PO received, and lost RFQs — with sortable table columns for client, category, buyer, and due dates.",
      },
      {
        title: "Purchase Orders",
        description:
          "PO summary with status cards (issued, approval pending, accepted, rejected) and financial columns for amounts with and without GST.",
      },
      {
        title: "Supplier Onboarding",
        description:
          "Multi-step onboarding flow with demo request pages and structured supplier registration for new vendor accounts.",
      },
      {
        title: "Invoicing & Inward",
        description:
          "Invoice generation linked to approved POs and procurement inward tracking for received goods against purchase orders.",
      },
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Ant Design",
    ],
    architecture: [
      "Vendor-facing portal with sidebar navigation for RFQ, PO, and user management modules",
      "MongoDB document models for RFQs, offers, purchase orders, and supplier profiles",
      "Multi-stage workflow engine for RFQ status transitions and approval chains",
      "Data table components with server-side sorting, filtering, and pagination",
      "GST calculation layer on purchase order financial summaries",
    ],
    timeline: "Built in phases — RFQ vendor portal first, then PO approval workflows, onboarding, and invoicing modules.",
    businessImpact: [
      "Centralized RFQ-to-PO procurement cycle replacing email-based tracking",
      "Real-time visibility into offer stages and approval bottlenecks",
      "Automated GST calculations on purchase order summaries",
      "Structured supplier onboarding reducing vendor setup time",
    ],
    keyMetrics: [
      { label: "RFQ Stages", value: "5" },
      { label: "PO Status Types", value: "6" },
      { label: "Filter Dimensions", value: "Date + Company" },
      { label: "GST Support", value: "Built-in" },
    ],
    category: "Procurement",
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: "pharmalinkage",
    assetFolder: "pharmalinkage",
    title: "PharmaLinkage",
    tagline: "Global pharmaceutical sourcing marketplace and B2B admin platform",
    overview:
      "PharmaLinkage (app.pharmalinkage.com) is a B2B pharmaceutical marketplace connecting buyers with API, formulation, and CDMO manufacturers worldwide — with company onboarding, facility management, inquiry workflows, concierge services, and Stripe-powered payments.",
    description:
      "A healthcare marketplace platform with admin dashboard tracking 12 companies and 9 monthly onboardings, Business Lounge supplier discovery with regulatory filtering, multi-step API/formulation registration forms, manufacturing facility profiles, inquiry management, and concierge service workflows.",
    businessProblem:
      "Pharmaceutical buyers struggled to discover verified global manufacturers with the right regulatory approvals (FDA, WHO, Health Canada), manufacturing capacity, and product categories. Admins had no centralized dashboard to track company growth, facility types (API, Formulation, CDMO), inquiry response rates, or subscription expirations.",
    role: "Full Stack Developer — built marketplace discovery, admin dashboard, multi-step registration forms, inquiry system, and payment integration.",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Database Design",
      "Authentication",
      "Deployment",
      "Testing",
    ],
    challenges: [
      "Building Business Lounge discovery with multi-parameter filters — country, regulatory approvals, capacity (KL), and monthly output (MT)",
      "Designing multi-step registration forms for API info, formulation details, and manufacturing facility profiles",
      "Tracking company acquisition metrics and facility type breakdowns on the admin dashboard",
      "Implementing inquiry management for sent/received B2B communications with response tracking",
      "Integrating Stripe payments for concierge service purchases",
    ],
    solution:
      "Built a React/Next.js marketplace with Node.js/MongoDB backend. Implemented admin dashboard with acquisition charts, Business Lounge with grid/list views and regulatory badge display, multi-step onboarding forms, manufacturing facility profiles, inquiry workflows, concierge service management, and Stripe payment integration.",
    features: [
      "Admin Analytics Dashboard",
      "Business Lounge Marketplace",
      "Supplier Discovery & Filtering",
      "Multi-Step Registration Forms",
      "Manufacturing Facility Profiles",
      "Inquiry Management",
      "Concierge Services",
      "Stripe Payment Integration",
    ],
    featureBreakdown: [
      {
        title: "Admin Dashboard",
        description:
          "KPI cards for 12 total companies, 9 monthly onboardings, 7 API facilities, 4 formulation facilities, and 1 CDMO — with monthly acquisition bar charts.",
      },
      {
        title: "Business Lounge",
        description:
          "Supplier discovery grid with filters for API/Formulation/CDMO categories, country, regulatory approvals, capacity, and product search — with verified badges and inquiry CTAs.",
      },
      {
        title: "Registration Workflows",
        description:
          "Multi-step forms for API information, formulation details, and manufacturing facility registration with guided field validation.",
      },
      {
        title: "Concierge & Payments",
        description:
          "Concierge service request, purchase, and management workflows with Stripe payment processing for premium marketplace services.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "REST APIs",
    ],
    architecture: [
      "Multi-tenant marketplace with admin and company-facing portals",
      "MongoDB schemas for companies, facilities, inquiries, and concierge services",
      "Multi-step form wizard with progressive validation for pharmaceutical registrations",
      "Filter engine for Business Lounge with regulatory approval and capacity parameters",
      "Stripe webhook integration for concierge service payments",
    ],
    timeline: "Marketplace core and admin dashboard first, followed by Business Lounge discovery, registration forms, and payment integration.",
    businessImpact: [
      "Onboarded 12 companies with structured facility type tracking",
      "Centralized global supplier discovery with regulatory compliance filtering",
      "Streamlined B2B inquiry workflows replacing manual email sourcing",
      "Stripe-powered concierge services enabling monetized marketplace features",
    ],
    keyMetrics: [
      { label: "Companies", value: "12" },
      { label: "API Facilities", value: "7" },
      { label: "Facility Types", value: "3" },
      { label: "Payments", value: "Stripe" },
    ],
    category: "Healthcare Marketplace",
    featured: true,
    featuredOrder: 5,
  },
];

export function getCaseStudyContentBySlug(
  slug: string
): CaseStudyContent | undefined {
  return caseStudyContents.find((study) => study.slug === slug);
}
