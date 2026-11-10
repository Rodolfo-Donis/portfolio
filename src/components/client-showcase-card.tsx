import type { ReactElement } from "react";
import { HighlightList } from "@/components/highlight-list";
import { StepDiagram } from "@/components/step-diagram";
import type { Project } from "@/models/project";

type ClientShowcaseCardProps = {
  readonly project: Project;
};

const leasingStructure: readonly string[] = [
  "Single-page site",
  "Light and dark theme, with system preference detection",
  "Contact form using EmailJS",
  "Responsive layout across mobile, tablet, and desktop",
  "SEO-optimized structure and metadata",
];

const leasingDiagramCaption: string =
  "Diagram of the documented site structure. Not a screenshot of the live site.";

const projectLinkClassName: string =
  "mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground dark:border-zinc-700 dark:bg-zinc-900";

function renderProjectLink(project: Project): ReactElement | null {
  if (project.url.length === 0) {
    return null;
  }
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={projectLinkClassName}
    >
      <span>{project.urlLabel}</span>
      <span className="sr-only"> (opens in a new tab)</span>
      <span aria-hidden>→</span>
    </a>
  );
}

/**
 * Renders the verified Convicción Leasing project without adding new claims.
 */
export function ClientShowcaseCard({ project }: ClientShowcaseCardProps): ReactElement {
  return (
    <article className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <p className="text-sm font-medium uppercase tracking-wider text-accent">{project.kind}</p>
      <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight text-foreground">
        {project.name}
      </h3>
      <div className="mt-5">
        <StepDiagram steps={leasingStructure} caption={leasingDiagramCaption} />
      </div>
      <p className="mt-5 leading-relaxed text-foreground">{project.summary}</p>
      <h4 className="mt-5 font-heading text-sm font-medium text-foreground">Documented details</h4>
      <HighlightList items={project.highlights} />
      {renderProjectLink(project)}
    </article>
  );
}
