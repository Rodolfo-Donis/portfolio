import type { Project } from "@/models/project";
import { SkillChip } from "@/components/skill-chip";

type ProjectArticleProps = {
  readonly project: Project;
};

/**
 * Renders a selected project card with deliverables, stack, and live link.
 */
export function ProjectArticle({ project }: ProjectArticleProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-accent/10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {project.name}
          </h2>
          <span className="mt-1 inline-block text-sm font-medium uppercase tracking-wider text-accent">
            {project.kind}
          </span>
        </div>
      </div>
      <p className="mt-4 leading-relaxed text-foreground">{project.summary}</p>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="text-accent">→</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.skills.map((skill) => (
          <SkillChip key={skill} label={skill} size="sm" />
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-accent dark:hover:bg-accent"
      >
        <span>{project.urlLabel}</span>
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}
