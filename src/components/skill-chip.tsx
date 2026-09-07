type SkillChipProps = {
  readonly label: string;
  readonly size?: "sm" | "md";
};

/**
 * Renders a hoverable skill or technology chip.
 */
export function SkillChip({ label, size = "md" }: SkillChipProps) {
  const sizeClassName: string =
    size === "sm" ? "px-3 py-1 text-xs font-medium" : "px-3 py-1 text-sm";
  return (
    <span
      className={`inline-block cursor-default rounded-md border border-zinc-200 bg-zinc-50 ${sizeClassName} text-muted transition-all duration-200 ease-out hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-accent/20`}
    >
      {label}
    </span>
  );
}
