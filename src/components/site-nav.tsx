import Link from "next/link";
import type { ReactElement } from "react";

type SiteNavProps = {
  readonly currentPath: string;
  readonly className?: string;
};

type SiteNavItem = {
  readonly href: string;
  readonly label: string;
};

const siteNavItems: readonly SiteNavItem[] = [
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/freelance", label: "Freelance" },
];

const focusClassName: string =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

function renderSiteNavItem(item: SiteNavItem, currentPath: string): ReactElement {
  const isActive: boolean = currentPath === item.href;
  const itemClassName: string = isActive
    ? `inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent decoration-2 underline-offset-8 ${focusClassName}`
    : `group inline-flex min-h-11 items-center gap-2 font-medium text-foreground transition-colors hover:text-accent motion-reduce:transition-none ${focusClassName}`;
  return (
    <Link
      key={item.href}
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={itemClassName}
    >
      <span>{item.label}</span>
      {isActive ? null : (
        <span
          aria-hidden
          className="text-muted transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      )}
    </Link>
  );
}

/**
 * Renders Work, Resume, and Freelance links, marking the current page.
 */
export function SiteNav({ currentPath, className = "" }: SiteNavProps): ReactElement {
  return (
    <nav aria-label="Sections" className={`flex flex-wrap gap-x-6 ${className}`}>
      {siteNavItems.map(
        (item: SiteNavItem): ReactElement => renderSiteNavItem(item, currentPath),
      )}
    </nav>
  );
}
