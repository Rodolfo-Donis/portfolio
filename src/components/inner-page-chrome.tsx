import type { ReactElement } from "react";
import { PageBackLink } from "@/components/page-back-link";
import { SiteNav } from "@/components/site-nav";

type InnerPageChromeProps = {
  readonly currentPath: string;
};

/**
 * Renders the back link and section navigation shared by inner pages.
 */
export function InnerPageChrome({ currentPath }: InnerPageChromeProps): ReactElement {
  return (
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <PageBackLink className="mb-0" />
      <SiteNav currentPath={currentPath} />
    </div>
  );
}
