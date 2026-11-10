import type { Project } from "@/models/project";
import type { ShowcaseItem } from "@/models/showcase-item";
import { projects } from "@/data/projects";

const conceptItems: readonly ShowcaseItem[] = [
  {
    kind: "concept",
    id: "integration-concept",
    title: "Connect your CRM, APIs, and internal tools",
    problem:
      "A team retypes the same customer or order updates into a CRM, an inbox, and an internal tool.",
    approach:
      "Map that handoff, then connect the systems so one update can move through without being copied again.",
    deliverables: [
      "API integrations between the CRM and the tools already in the workflow",
      "Workflow automation for the repeated handoff",
      "Background processing so those updates do not wait on a person to click through them",
    ],
    steps: [
      "CRM, inbox, and internal tool each hold a copy",
      "A proposed connection watches the handoff",
      "The update lands once, without retyping",
    ],
    diagramCaption: "Illustrative workflow, not a product screenshot.",
  },
  {
    kind: "concept",
    id: "database-concept",
    title: "Trace a slow or unreliable API",
    problem:
      "People use an API during the workday, and it is slow or fails often enough that they stop trusting it.",
    approach:
      "Follow one failing request from the API into the database, then change the query, index, or boundary that is actually at fault.",
    deliverables: [
      "SQL optimization for the queries on that path",
      "API troubleshooting for the errors that keep returning",
      "Production diagnostics that show where the time or the failures go",
    ],
    steps: [
      "A request is slow or fails in production",
      "Inspect the API boundary and the SQL behind it",
      "Change the specific query, index, or error path",
    ],
    diagramCaption: "Illustrative diagnostic path, not a product screenshot.",
  },
];

function findLeasingProject(): Project | undefined {
  return projects.find((project: Project): boolean => project.id === "conviccion-leasing");
}

function createClientShowcaseItems(): readonly ShowcaseItem[] {
  const leasingProject: Project | undefined = findLeasingProject();
  if (!leasingProject) {
    return [];
  }
  return [{ kind: "client-work", project: leasingProject }];
}

export const showcaseItems: readonly ShowcaseItem[] = [
  ...createClientShowcaseItems(),
  ...conceptItems,
];
