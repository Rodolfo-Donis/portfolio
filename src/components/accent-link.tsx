import type { ReactElement } from "react";

type AccentLinkProps = {
  readonly href: string;
  readonly label: string;
};

const accentLinkClassName: string =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

/**
 * Renders the terracotta link used for the freelance contact call to action.
 */
export function AccentLink({ href, label }: AccentLinkProps): ReactElement {
  return (
    <a href={href} className={accentLinkClassName}>
      {label}
    </a>
  );
}
