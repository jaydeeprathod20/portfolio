import type { CaseStudyContent } from "@/types/case-study";

export const caseStudyContents: CaseStudyContent[] = [
  {
    slug: "heycouriers",
    assetFolder: "heycouriers",
    title: "HeyCouriers",
    tagline:
      "Courier management platform for Australian last-mile delivery operations",
    overview:
      "HeyCouriers is a production-grade logistics platform serving Australian businesses with shipment tracking, driver operations, route optimization, and operational dashboards across web and mobile.",
    description:
      "Developed and led the frontend architecture for a courier management platform covering live delivery tracking, optimized route planning, shipment lifecycle management, carrier and driver administration, and company-level billing interfaces.",
    businessProblem:
      "Australian courier operators needed unified operational interfaces for managing deliveries, driver routes, and shipment status. Operations teams required real-time visibility into completed deliveries, pending shipments, and active drivers without switching between disconnected tools.",
    role: "Frontend Lead",
    responsibilities: [
      "Frontend Development",
      "API Integrations",
      "UI Architecture",
      "State Management",
      "Google Maps Integration",
      "User Experience",
      "Enterprise Features",
    ],
    challenges: [
      "Synchronizing shipment status updates across shipment lists, detail panels, and live map markers",
      "Building Google Maps route visualization with numbered delivery stops and optimized polylines",
      "Implementing proof-of-delivery workflows with photo uploads and downloadable POD documents",
      "Designing wallet recharge and invoice generation interfaces with accurate financial displays",
      "Managing role-based UI flows for drivers, depot managers, company admins, and platform operators",
    ],
    solution:
      "Led frontend development of a modular React.js application with Redux state management and Ant Design components. Integrated Google Maps for live delivery tracking and route optimization. Built shipment timelines with status badges, photo evidence capture, POD downloads, wallet management views, and responsive mobile interfaces for field operations.",
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
          "Operational dashboard showing completed deliveries, pending shipments, and active drivers with year-based filtering and a Sydney-area map with live route markers.",
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
          "Wallet recharge invoice interfaces with company billing details, ABN tracking, line-item amounts, and automated total calculations for prepaid/postpaid accounts.",
      },
    ],
    technologies: [
      "React.js",
      "Ant Design",
      "Redux",
      "REST APIs",
      "Google Maps API",
    ],
    architecture: [
      "React SPA with modular sidebar navigation for 15+ operational modules",
      "Redux-based state management for shipment, route, and driver data flows",
      "Google Maps JavaScript API integration for live markers, polylines, and route optimization",
      "Role-based UI components for admin, company, driver, and depot manager roles",
      "REST API integration layer for shipment tracking, billing, and operational workflows",
    ],
    timeline:
      "Multi-phase frontend development across core logistics modules, maps integration, billing interfaces, and production deployment.",
    businessImpact: [
      "Centralized delivery records with real-time operational visibility",
      "Streamlined invoice and wallet recharge workflows through intuitive UI",
      "End-to-end shipment tracking with photo-based proof of delivery",
      "Route optimization interfaces reducing delivery planning time across Sydney metro routes",
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
    title: "Alux ERP",
    tagline: "Manufacturing ERP for aluminium extrusion and logistics operations",
    overview:
      "Alux ERP is an enterprise resource planning system covering inquiry management, production workflows, inventory tracking, logistics operations, and reporting for aluminium extrusion manufacturing.",
    description:
      "Developed enterprise ERP interfaces supporting inquiry management, production workflows, inventory tracking, logistics operations, and reporting with scalable frontend modules focused on operational efficiency.",
    businessProblem:
      "Manufacturing teams needed unified ERP interfaces to replace manual weighbridge recording, paper-based material indents, and disconnected production tracking. Warehouse and logistics staff lacked real-time visibility into work orders, dispatch weights, and customer document workflows.",
    role: "Frontend Developer",
    responsibilities: [
      "Frontend Development",
      "UI Architecture",
      "State Management",
      "Business Logic Implementation",
      "API Integrations",
      "Enterprise Features",
    ],
    challenges: [
      "Building first and second weight entry interfaces with camera capture integration at the weighbridge",
      "Tracking precise bundle weights across packing and dispatch with fiscal year filtering",
      "Designing multi-module navigation across sales, production, warehouse, and logistics departments",
      "Developing customer PDF and purchase inward document generation workflows in the UI",
      "Managing material indents and scrap inventory interfaces with accurate stock reconciliation displays",
    ],
    solution:
      "Developed scalable React.js ERP interfaces with Redux Toolkit and Ant Design. Built weighbridge modules with vehicle master, transporter management, dual weight entry, and camera capture for load verification. Added dashboard KPI cards, material indent, purchase inward, scrap management, and customer PDF modules.",
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
          "First weight entry forms with vehicle selection, material type, purchaser details, date/time stamping, and dual camera capture for load verification at entry.",
      },
      {
        title: "Production Dashboard",
        description:
          "KPI cards for profiles, quotations, work orders, packed bundles, and dispatched weights with fiscal year filtering and monthly bar charts.",
      },
      {
        title: "Material & Procurement",
        description:
          "Material indent creation, purchase inward recording, and scrap management modules connected to warehouse inventory views.",
      },
      {
        title: "Customer Documents",
        description:
          "Customer PDF generation and purchase inward documentation interfaces built from structured ERP transaction data.",
      },
    ],
    technologies: ["React.js", "Redux Toolkit", "Ant Design"],
    architecture: [
      "Multi-module ERP with icon-based sidebar for sales, production, warehouse, and logistics",
      "Redux Toolkit state management for weighbridge entries, materials, indents, and dispatch records",
      "Camera capture integration for weighbridge photo evidence in frontend workflows",
      "Fiscal year and date-range filtering on dashboard aggregations",
      "PDF generation workflows for customer and purchase documents",
    ],
    timeline:
      "Phased frontend rollout starting with dashboard and production modules, followed by logistics weighbridge and procurement workflows.",
    businessImpact: [
      "Digitized weighbridge operations with photo-verified weight entry interfaces",
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
    tagline:
      "Manufacturing ERP for Hasten Extrusions with production-to-dispatch tracking",
    overview:
      "Hasten ERP is an enterprise platform covering design, sales, production, warehouse, packing, dispatch, reporting, and user management for manufacturing operations.",
    description:
      "Built multiple ERP modules including Profile Management, Bundle Inward, Reporting, and operational dashboards with advanced data tables, PDF generation, print functionality, and role-based workflows.",
    businessProblem:
      "Manufacturing teams managed hundreds of work orders across departments using disconnected processes. Teams lacked a single dashboard for packing vs dispatch metrics, user access was unmanaged across staff accounts, and report generation required manual PDF preparation.",
    role: "Frontend Developer",
    responsibilities: [
      "Frontend Development",
      "UI Architecture",
      "State Management",
      "Business Logic Implementation",
      "API Integrations",
      "Enterprise Features",
    ],
    challenges: [
      "Aggregating large production datasets into real-time dashboard KPIs",
      "Implementing role-based user management interfaces with activity logging and export to Excel/PDF",
      "Building monthly stats bar charts comparing work orders, packing, and dispatch volumes",
      "Designing bundle inward workflows with accurate weight and quantity tracking",
      "Creating print-ready PDF reports with consistent formatting for production teams",
    ],
    solution:
      "Built a React.js ERP frontend with Redux and Ant Design. Implemented a KPI dashboard with date-range filtering, monthly bar charts, and quotation conversion tracking. Added paginated user management with role groups, activity logs, Excel/PDF export, bundle inward module, and mobile-responsive views.",
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
          "KPI cards tracking profiles, quotations, work orders, packed bundles, and dispatched bundles with weight calculations and conversion metrics.",
      },
      {
        title: "User Management",
        description:
          "Paginated user table with role groups, last login tracking, active/inactive status, and Excel/PDF export for admin teams.",
      },
      {
        title: "Reporting & PDF",
        description:
          "Report pages with production data filters and print-ready PDF generation using jsPDF for warehouse and dispatch documentation.",
      },
      {
        title: "Bundle Inward",
        description:
          "Bundle inward module for recording incoming production bundles with weight and quantity validation against work orders.",
      },
    ],
    technologies: ["React.js", "Redux", "Ant Design", "jsPDF"],
    architecture: [
      "Multi-department ERP with sidebar modules for design, sales, production, warehouse, packing, and dispatch",
      "Redux state management for dashboard KPI calculations and monthly stats",
      "Role-based access UI with user groups, activity logs, and session tracking",
      "jsPDF integration for production and dispatch report generation",
      "Responsive layout supporting desktop admin and mobile shop floor views",
    ],
    timeline:
      "Iterative frontend development from core dashboard and user management through production tracking, reporting, and PDF workflows.",
    businessImpact: [
      "Real-time visibility into work orders and packed production metrics",
      "Managed user accounts with role-based access and activity auditing",
      "Automated PDF report generation replacing manual print preparation",
      "Quotation conversion tracking for sales pipeline visibility",
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
    title: "SmartBuyer",
    tagline:
      "Procurement platform for RFQ management, purchase orders, and supplier workflows",
    overview:
      "SmartBuyer is a B2B procurement platform enabling vendors and buyers to manage RFQ lifecycles — from initial offers and revised quotations through purchase order approval, invoicing, and procurement inward tracking.",
    description:
      "Developed procurement management workflows including RFQs, supplier management, approvals, purchase orders, GRNs, and billing modules with complex multi-step workflows and business process interfaces.",
    businessProblem:
      "Procurement teams and vendors tracked RFQs through email chains and spreadsheets with no visibility into offer stages, PO approvals, or lost bids. Finance teams manually calculated GST amounts on purchase orders, and supplier onboarding lacked a structured multi-step workflow.",
    role: "Frontend Developer",
    responsibilities: [
      "Frontend Development",
      "UI Architecture",
      "Business Logic Implementation",
      "API Integrations",
      "User Experience",
      "Enterprise Features",
    ],
    challenges: [
      "Tracking RFQ lifecycle stages with real-time status counters across vendor dashboards",
      "Building purchase order summary interfaces with GST-inclusive and GST-exclusive amount calculations",
      "Designing multi-step supplier onboarding with demo request and approval flows",
      "Implementing date-range and company filters across large RFQ datasets with sortable data tables",
      "Managing procurement inward workflows connecting PO approvals to inventory receipt",
    ],
    solution:
      "Developed a React.js procurement portal with Ant Design. Built vendor RFQ dashboard with status KPI cards, sortable data tables with date/company filters, PO summary with approval status tracking, multi-step supplier onboarding, invoice pages, and procurement inward module.",
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
          "Vendor dashboard with KPI cards for total RFQs, pending initial offers, revised offers, PO received, and lost RFQs — with sortable table columns for client, category, buyer, and due dates.",
      },
      {
        title: "Purchase Orders",
        description:
          "PO summary with status cards and financial columns for amounts with and without GST.",
      },
      {
        title: "Supplier Onboarding",
        description:
          "Multi-step onboarding flow with demo request pages and structured supplier registration for new vendor accounts.",
      },
      {
        title: "Invoicing & Inward",
        description:
          "Invoice generation interfaces linked to approved POs and procurement inward tracking for received goods.",
      },
    ],
    technologies: ["React.js", "Ant Design"],
    architecture: [
      "Vendor-facing portal with sidebar navigation for RFQ, PO, and user management modules",
      "Multi-stage workflow UI for RFQ status transitions and approval chains",
      "Data table components with server-side sorting, filtering, and pagination",
      "GST calculation display layer on purchase order financial summaries",
      "REST API integration for procurement lifecycle management",
    ],
    timeline:
      "Built in phases — RFQ vendor portal first, then PO approval workflows, onboarding, and invoicing modules.",
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
      "PharmaLinkage is a B2B pharmaceutical marketplace connecting buyers with API, formulation, and CDMO manufacturers worldwide — with company onboarding, facility management, inquiry workflows, and Stripe-powered payments.",
    description:
      "Contributed to a global pharmaceutical sourcing platform by developing responsive user interfaces, supplier discovery workflows, sourcing modules, and payment-related functionality with Stripe integration.",
    businessProblem:
      "Pharmaceutical buyers struggled to discover verified global manufacturers with the right regulatory approvals, manufacturing capacity, and product categories. Admins needed centralized dashboards to track company growth, facility types, inquiry response rates, and subscription expirations.",
    role: "Frontend Developer",
    responsibilities: [
      "Frontend Development",
      "API Integrations",
      "UI Architecture",
      "User Experience",
      "Business Logic Implementation",
      "Enterprise Features",
    ],
    challenges: [
      "Building Business Lounge discovery with multi-parameter filters — country, regulatory approvals, capacity, and monthly output",
      "Designing multi-step registration forms for API info, formulation details, and manufacturing facility profiles",
      "Tracking company acquisition metrics and facility type breakdowns on the admin dashboard",
      "Implementing inquiry management for sent/received B2B communications with response tracking",
      "Integrating Stripe payment workflows for concierge service purchases",
    ],
    solution:
      "Developed responsive React.js interfaces with Ant Design for marketplace discovery, admin dashboards, multi-step onboarding forms, manufacturing facility profiles, inquiry workflows, and Stripe payment integration — optimized for multiple devices.",
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
          "KPI cards for total companies, monthly onboardings, API facilities, formulation facilities, and CDMO — with monthly acquisition bar charts.",
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
    technologies: ["React.js", "Ant Design", "Stripe"],
    architecture: [
      "Multi-tenant marketplace UI with admin and company-facing portals",
      "Multi-step form wizard with progressive validation for pharmaceutical registrations",
      "Filter engine for Business Lounge with regulatory approval and capacity parameters",
      "Stripe payment workflow integration for concierge service purchases",
      "REST API integration for supplier discovery, inquiries, and onboarding",
    ],
    timeline:
      "Marketplace core and admin dashboard first, followed by Business Lounge discovery, registration forms, and payment integration.",
    businessImpact: [
      "Structured company onboarding with facility type tracking",
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
  {
    slug: "homedelish",
    assetFolder: "homedelish",
    title: "HomeDelish",
    tagline: "Full-stack food ordering platform built with the MERN stack",
    overview:
      "HomeDelish is a full-stack food ordering platform demonstrating end-to-end MERN stack development — from user authentication and menu management to cart functionality, order placement, and payment integration.",
    description:
      "Built a full-stack food ordering platform using the MERN stack. Implemented user authentication, menu management, cart functionality, order placement, payment integration, and backend APIs.",
    businessProblem:
      "A food ordering solution was needed that could handle user accounts, menu browsing, cart management, secure checkout, and order tracking — requiring both a responsive frontend and a scalable backend API layer.",
    role: "Full Stack Developer",
    responsibilities: [
      "Frontend Development",
      "Backend Development",
      "API Development",
      "Database Design",
      "Authentication",
      "Payment Integration",
    ],
    challenges: [
      "Building secure user authentication and session management across frontend and backend",
      "Designing menu management and cart state flows with real-time price calculations",
      "Implementing order placement workflows with inventory and status tracking",
      "Integrating Stripe payment processing for secure checkout",
      "Structuring MongoDB schemas for users, menus, orders, and payment records",
    ],
    solution:
      "Built a MERN stack application with React.js frontend and Node.js/Express.js backend with MongoDB. Implemented JWT authentication, menu CRUD operations, cart and checkout flows, order management APIs, and Stripe payment integration.",
    features: [
      "User Authentication",
      "Menu Management",
      "Shopping Cart",
      "Order Placement",
      "Stripe Payment Integration",
      "Order Tracking",
      "Admin Dashboard",
      "Responsive UI",
    ],
    featureBreakdown: [
      {
        title: "User Authentication",
        description:
          "Secure registration and login with JWT-based authentication and protected routes across the application.",
      },
      {
        title: "Menu & Cart",
        description:
          "Menu browsing with category filters, item customization, and cart management with real-time total calculations.",
      },
      {
        title: "Order Management",
        description:
          "Order placement workflows with status tracking, order history, and admin order management interfaces.",
      },
      {
        title: "Payment Integration",
        description:
          "Stripe payment integration for secure checkout with order confirmation and payment status handling.",
      },
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "JavaScript",
      "Stripe",
    ],
    architecture: [
      "React.js frontend with component-based architecture and responsive design",
      "Node.js and Express.js REST API with MongoDB and Mongoose data models",
      "JWT authentication middleware for protected API routes",
      "Stripe payment integration for checkout workflows",
      "MongoDB schemas for users, menus, orders, and transactions",
    ],
    timeline:
      "Full-stack development from authentication and menu modules through cart, checkout, and payment integration.",
    businessImpact: [
      "End-to-end food ordering workflow from menu browse to payment confirmation",
      "Secure authentication and role-based access for users and admins",
      "Scalable API architecture supporting order lifecycle management",
      "Demonstrates hands-on MERN stack development capabilities",
    ],
    keyMetrics: [
      { label: "Stack", value: "MERN" },
      { label: "Auth", value: "JWT" },
      { label: "Payments", value: "Stripe" },
      { label: "Database", value: "MongoDB" },
    ],
    category: "Full Stack",
    featured: true,
    featuredOrder: 6,
  },
];

export function getCaseStudyContentBySlug(
  slug: string
): CaseStudyContent | undefined {
  return caseStudyContents.find((study) => study.slug === slug);
}
