type HighlightListProps = {
  readonly items: readonly string[];
};

/**
 * Renders recruiter-facing bullet highlights for a role or project.
 */
export function HighlightList({ items }: HighlightListProps) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
