"use client";

import { useState, type ReactElement } from "react";
import { HighlightList } from "@/components/highlight-list";
import type { FreelanceService } from "@/models/freelance-service";

type ServiceDetailProps = {
  readonly service: FreelanceService;
};

/**
 * Renders one service as an expandable card of possible deliverables.
 */
export function ServiceDetail({ service }: ServiceDetailProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const panelId: string = `${service.id}-deliverables`;
  const buttonId: string = `${service.id}-toggle`;
  const toggleDeliverables = (): void => {
    setIsOpen((currentIsOpen: boolean): boolean => !currentIsOpen);
  };
  const toggleLabel: string = isOpen ? "Hide" : "Show";
  const toggleName: string = isOpen
    ? `Hide deliverables for ${service.title}`
    : `Show deliverables for ${service.title}`;
  const iconClassName: string = isOpen
    ? "font-heading text-xl leading-none rotate-45 transition-transform motion-reduce:transition-none"
    : "font-heading text-xl leading-none transition-transform motion-reduce:transition-none";
  const cardClassName: string = isOpen
    ? "rounded-xl border border-accent/40 bg-zinc-50/50 p-6 dark:bg-zinc-900/50"
    : "rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-accent/30 dark:border-zinc-800 dark:bg-zinc-900/50";
  const titleId: string = `${service.id}-title`;
  return (
    <section className={cardClassName} aria-labelledby={titleId}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 id={titleId} className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
        </div>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={toggleName}
          onClick={toggleDeliverables}
          className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-md px-2 text-sm font-medium text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <span>{toggleLabel}</span>
          <span aria-hidden className={iconClassName}>
            +
          </span>
        </button>
      </div>
      <div id={panelId} role="region" aria-labelledby={titleId} hidden={!isOpen} className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <p className="text-sm font-medium text-foreground">What this can include</p>
        <HighlightList items={service.deliverables} />
      </div>
    </section>
  );
}
