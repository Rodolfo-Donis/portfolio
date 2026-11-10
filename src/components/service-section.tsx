import type { ReactElement } from "react";
import { ServiceDetail } from "@/components/service-detail";
import { freelanceServices } from "@/data/freelance-services";
import type { FreelanceService } from "@/models/freelance-service";

/**
 * Renders the three freelance services.
 */
export function ServiceSection(): ReactElement {
  return (
    <section className="mt-20" aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        How I can help your business
      </h2>
      <div className="mt-6 space-y-4">
        {freelanceServices.map(
          (service: FreelanceService): ReactElement => (
            <ServiceDetail key={service.id} service={service} />
          ),
        )}
      </div>
    </section>
  );
}
