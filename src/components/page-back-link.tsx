import Link from "next/link";

/**
 * Renders a consistent back-to-home link used on inner pages.
 */
export function PageBackLink() {
  return (
    <Link
      href="/"
      className="mb-12 inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
    >
      <span>←</span>
      <span>Back</span>
    </Link>
  );
}
