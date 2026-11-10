import type { ReactElement } from "react";
import { workingSteps } from "@/data/working-steps";
import type { WorkingStep } from "@/models/working-step";

/**
 * Renders the freelance project workflow.
 */
export function WorkingProcess(): ReactElement {
  return (
    <section className="mt-20" aria-labelledby="process-heading">
      <h2
        id="process-heading"
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {"How we'll work together"}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        {"Here's what a longer project looks like, from the first conversation to handover."}
      </p>
      <ol className="mt-6 space-y-6">
        {workingSteps.map((step: WorkingStep, index: number): ReactElement => (
          <li key={step.title} className="flex gap-4">
            <span aria-hidden className="font-heading text-xl font-semibold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-1">
              <h3 className="font-heading font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
