import type { Metadata } from "next";
import type { ReactElement } from "react";
import { FreelanceContact } from "@/components/freelance-contact";
import { FreelanceIntro } from "@/components/freelance-intro";
import { InnerPageChrome } from "@/components/inner-page-chrome";
import { ProjectShowcase } from "@/components/project-showcase";
import { ServiceSection } from "@/components/service-section";
import { WorkingProcess } from "@/components/working-process";
import { showcaseItems } from "@/data/showcase-items";

export const metadata: Metadata = {
  title: "Rodolfo Donis | Freelance",
  description:
    "I help businesses build web applications, connect their tools, and solve backend and database problems.",
};

/**
 * Renders the freelance services page.
 */
export default function FreelancePage(): ReactElement {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <InnerPageChrome currentPath="/freelance" />
        <FreelanceIntro />
        <ServiceSection />
        <ProjectShowcase items={showcaseItems} />
        <WorkingProcess />
        <FreelanceContact />
      </main>
    </div>
  );
}
