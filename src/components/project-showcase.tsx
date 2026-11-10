"use client";

import { useState, type ReactElement } from "react";
import { ClientShowcaseCard } from "@/components/client-showcase-card";
import { ConceptShowcaseCard } from "@/components/concept-showcase-card";
import type { ShowcaseItem } from "@/models/showcase-item";

type ProjectShowcaseProps = {
  readonly items: readonly ShowcaseItem[];
};

type ShowcaseFilter = "all" | "client-work" | "concept";

type ShowcaseFilterOption = {
  readonly id: ShowcaseFilter;
  readonly label: string;
};

const showcaseFilters: readonly ShowcaseFilterOption[] = [
  { id: "all", label: "All" },
  { id: "client-work", label: "Client work" },
  { id: "concept", label: "Concepts" },
];

const filterFocusClassName: string =
  "inline-flex min-h-11 items-center rounded-lg border px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

function getFilterButtonClassName(isSelected: boolean): string {
  if (isSelected) {
    return `${filterFocusClassName} border-accent bg-accent text-accent-foreground`;
  }
  return `${filterFocusClassName} border-zinc-200 bg-white text-foreground hover:border-accent hover:text-accent dark:border-zinc-700 dark:bg-zinc-900`;
}

function filterShowcaseItems(
  items: readonly ShowcaseItem[],
  selectedFilter: ShowcaseFilter,
): readonly ShowcaseItem[] {
  if (selectedFilter === "all") {
    return items;
  }
  return items.filter((item: ShowcaseItem): boolean => item.kind === selectedFilter);
}

function getShowcaseKey(item: ShowcaseItem): string {
  if (item.kind === "client-work") {
    return item.project.id;
  }
  return item.id;
}

function formatFilterStatus(selectedFilter: ShowcaseFilter, count: number): string {
  const noun: string = count === 1 ? "entry" : "entries";
  if (selectedFilter === "client-work") {
    return `Showing client work, ${count} ${noun}.`;
  }
  if (selectedFilter === "concept") {
    return `Showing concepts, ${count} ${noun}.`;
  }
  return `Showing all entries, ${count} ${noun}.`;
}

function renderShowcaseCard(item: ShowcaseItem): ReactElement {
  if (item.kind === "concept") {
    return <ConceptShowcaseCard concept={item} />;
  }
  return <ClientShowcaseCard project={item.project} />;
}

type ShowcaseFilterButtonProps = {
  readonly filter: ShowcaseFilterOption;
  readonly isSelected: boolean;
  readonly onSelect: (filterId: ShowcaseFilter) => void;
};

function ShowcaseFilterButton({
  filter,
  isSelected,
  onSelect,
}: ShowcaseFilterButtonProps): ReactElement {
  const selectFilter = (): void => {
    onSelect(filter.id);
  };
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={selectFilter}
      className={getFilterButtonClassName(isSelected)}
    >
      {filter.label}
    </button>
  );
}

/**
 * Renders verified client work and labeled concept demos with a category filter.
 */
export function ProjectShowcase({ items }: ProjectShowcaseProps): ReactElement {
  const [selectedFilter, setSelectedFilter] = useState<ShowcaseFilter>("all");
  const visibleItems: readonly ShowcaseItem[] = filterShowcaseItems(items, selectedFilter);
  const selectShowcaseFilter = (filterId: ShowcaseFilter): void => {
    setSelectedFilter(filterId);
  };
  return (
    <section id="selected-work" className="mt-20 scroll-mt-8" aria-labelledby="showcase-heading">
      <h2
        id="showcase-heading"
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        Selected work and concepts
      </h2>
      <p className="mt-4 leading-relaxed text-muted">
        Client work is limited to what is documented in this portfolio. Concept demos show how an engagement could be framed. They are not implemented products.
      </p>
      <div className="mt-6">
        <p id="showcase-filter-label" className="text-sm font-medium text-muted">
          Filter
        </p>
        <div
          role="group"
          aria-labelledby="showcase-filter-label"
          className="mt-3 flex flex-wrap gap-2"
        >
          {showcaseFilters.map(
            (filter: ShowcaseFilterOption): ReactElement => (
              <ShowcaseFilterButton
                key={filter.id}
                filter={filter}
                isSelected={selectedFilter === filter.id}
                onSelect={selectShowcaseFilter}
              />
            ),
          )}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {formatFilterStatus(selectedFilter, visibleItems.length)}
      </p>
      {visibleItems.length === 0 ? (
        <p className="mt-6 text-muted">No entries in this filter.</p>
      ) : (
        <div className="mt-6 space-y-8">
          {visibleItems.map(
            (item: ShowcaseItem): ReactElement => (
              <div key={getShowcaseKey(item)}>{renderShowcaseCard(item)}</div>
            ),
          )}
        </div>
      )}
    </section>
  );
}
