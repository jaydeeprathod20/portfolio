import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { SectionHashScroll } from "@/components/layout/SectionHashScroll";
import { getFeaturedCaseStudies } from "@/data/case-studies";
import dynamic from "next/dynamic";

const DomainsSection = dynamic(() =>
  import("@/features/domains/DomainsSection").then((m) => m.DomainsSection)
);
const ServicesSection = dynamic(() =>
  import("@/features/services/ServicesSection").then((m) => m.ServicesSection)
);
const CaseStudiesSection = dynamic(() =>
  import("@/features/case-studies/CaseStudiesSection").then(
    (m) => m.CaseStudiesSection
  )
);
const TechnologiesSection = dynamic(() =>
  import("@/features/technologies/TechnologiesSection").then(
    (m) => m.TechnologiesSection
  )
);
const WhyHireSection = dynamic(() =>
  import("@/features/why-hire/WhyHireSection").then((m) => m.WhyHireSection)
);
const ProcessSection = dynamic(() =>
  import("@/features/process/ProcessSection").then((m) => m.ProcessSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/features/testimonials/TestimonialsSection").then(
    (m) => m.TestimonialsSection
  )
);
const FAQSection = dynamic(() =>
  import("@/features/faq/FAQSection").then((m) => m.FAQSection)
);
const ContactSection = dynamic(() =>
  import("@/features/contact/ContactSection").then((m) => m.ContactSection)
);

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <>
      <SectionHashScroll />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <ServicesSection />
        <CaseStudiesSection caseStudies={featuredCaseStudies} />
        <TechnologiesSection />
        <WhyHireSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
