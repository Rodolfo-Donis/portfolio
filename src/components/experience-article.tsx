import type { Experience } from "@/models/experience";
import { HighlightList } from "@/components/highlight-list";
import { SkillChip } from "@/components/skill-chip";

type ExperienceArticleProps = {
  readonly experience: Experience;
  readonly variant: "resume" | "work";
};

/**
 * Renders one professional role with context, highlights, and stack for recruiters.
 */
export function ExperienceArticle({
  experience,
  variant,
}: ExperienceArticleProps) {
  const isWorkVariant: boolean = variant === "work";
  const containerClassName: string = isWorkVariant
    ? "rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-accent/10"
    : "";
  return (
    <article className={containerClassName}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3
          className={
            isWorkVariant
              ? "font-heading text-xl font-semibold tracking-tight text-foreground"
              : "font-heading font-semibold"
          }
        >
          {experience.title}
        </h3>
        <span className="text-sm text-muted">{experience.period}</span>
      </div>
      <p className="text-muted">
        {experience.company} — {experience.location}
      </p>
      {isWorkVariant ? (
        <p className="mt-4 leading-relaxed text-foreground">
          {experience.context}
        </p>
      ) : null}
      <p
        className={
          isWorkVariant
            ? "mt-3 text-sm leading-relaxed text-muted"
            : "mt-2 text-sm leading-relaxed text-foreground"
        }
      >
        {experience.summary}
      </p>
      {experience.roles?.length ? (
        <div className="mt-4 space-y-5">
          {experience.roles.map((role) => (
            <div key={role.title}>
              <h4 className="font-heading text-sm font-medium text-foreground">
                {role.title}
                <span className="ml-2 font-sans font-normal text-muted">
                  {role.period}
                </span>
              </h4>
              <HighlightList items={role.highlights} />
            </div>
          ))}
        </div>
      ) : (
        <HighlightList items={experience.highlights} />
      )}
      <div className="mt-5 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <SkillChip key={skill} label={skill} size="sm" />
        ))}
      </div>
    </article>
  );
}
