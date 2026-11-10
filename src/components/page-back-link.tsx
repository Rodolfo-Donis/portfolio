import Link from "next/link";
import type { ReactElement } from "react";

type PageBackLinkProps = {
  readonly className?: string;
};

/**
 * Renders a consistent back-to-home link used on inner pages.
 */
export function PageBackLink({ className = "mb-12" }: PageBackLinkProps): ReactElement {
  return (
    <Link
      href="/"
      className={`${className} inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground`}
    >
      <span aria-hidden>←</span>
      <span>Back</span>
    </Link>
  );
}
