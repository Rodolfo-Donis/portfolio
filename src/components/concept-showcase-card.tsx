import type { ReactElement } from "react";
import { HighlightList } from "@/components/highlight-list";
import { StepDiagram } from "@/components/step-diagram";
import type { ShowcaseItem } from "@/models/showcase-item";

type ConceptShowcaseCardProps = {
  readonly concept: Extract<ShowcaseItem, { readonly kind: "concept" }>;
};

/**
 * Renders an illustrative concept that is explicitly not client work.
 */
export function ConceptShowcaseCard({ concept }: ConceptShowcaseCardProps): ReactElement {
  return (
    <article className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
        {concept.title}
      </h3>
      <div className="mt-5">
        <StepDiagram steps={concept.steps} caption={concept.diagramCaption} isOrdered />
      </div>
      <div className="mt-5 space-y-4">
        <div>
          <h4 className="font-heading text-sm font-medium text-foreground">Business problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{concept.problem}</p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-medium text-foreground">Proposed approach</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{concept.approach}</p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-medium text-foreground">Possible deliverables</h4>
          <HighlightList items={concept.deliverables} />
        </div>
      </div>
    </article>
  );
}
