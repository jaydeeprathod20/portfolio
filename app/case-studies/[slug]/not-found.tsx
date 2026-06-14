import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function CaseStudyNotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] flex-col items-center justify-center pt-20">
        <h1 className="text-2xl font-bold text-foreground">Case study not found</h1>
        <p className="mt-2 text-muted-foreground">
          The project you are looking for does not exist.
        </p>
        <Link href="/#case-studies" className="mt-6">
          <Button variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
