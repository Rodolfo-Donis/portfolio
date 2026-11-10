import type { ReactElement } from "react";

type StepDiagramProps = {
  readonly steps: readonly string[];
  readonly caption: string;
  readonly isOrdered?: boolean;
};

type StepListProps = {
  readonly steps: readonly string[];
};

function UnorderedSteps({ steps }: StepListProps): ReactElement {
  return (
    <ul className="space-y-2">
      {steps.map((step: string): ReactElement => (
        <li key={step} className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-foreground">
          {step}
        </li>
      ))}
    </ul>
  );
}

function OrderedSteps({ steps }: StepListProps): ReactElement {
  return (
    <ol>
      {steps.map((step: string, index: number): ReactElement => {
        const isLast: boolean = index === steps.length - 1;
        const stepClassName: string = isLast
          ? "pt-1 text-sm leading-relaxed text-foreground"
          : "pt-1 pb-5 text-sm leading-relaxed text-foreground";
        return (
          <li key={step} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                aria-hidden
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent font-heading text-sm text-accent"
              >
                {index + 1}
              </span>
              {isLast ? null : <span aria-hidden className="min-h-4 w-px flex-1 bg-accent/40" />}
            </div>
            <p className={stepClassName}>{step}</p>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * Renders an original step diagram with a caption that states what it is.
 */
export function StepDiagram({
  steps,
  caption,
  isOrdered = false,
}: StepDiagramProps): ReactElement {
  return (
    <figure className="rounded-lg border border-zinc-200 bg-background p-4 dark:border-zinc-800">
      {isOrdered ? <OrderedSteps steps={steps} /> : <UnorderedSteps steps={steps} />}
      <figcaption className="mt-3 text-xs leading-relaxed text-muted">{caption}</figcaption>
    </figure>
  );
}
