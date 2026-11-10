import type { FreelanceService } from "@/models/freelance-service";

export const freelanceServices: readonly FreelanceService[] = [
  {
    id: "web-apps",
    title: "Web apps and dashboards",
    summary:
      "Replace scattered spreadsheets with tools built around your business workflow.",
    deliverables: [
      "Custom web applications built around your workflow",
      "Internal tools that replace scattered spreadsheets",
      "Dashboards for the work your team already tracks",
    ],
  },
  {
    id: "integrations",
    title: "Integrations and automation",
    summary: "Connect your CRM, APIs, and internal tools to reduce repetitive work.",
    deliverables: [
      "API integrations between your CRM and the tools you already use",
      "Workflow automation for repeated handoffs",
      "Background processing for tasks that should not block a person",
    ],
  },
  {
    id: "backend",
    title: "Backend and database support",
    summary: "Troubleshoot slow queries, unreliable APIs, and recurring production issues.",
    deliverables: [
      "SQL optimization when queries get slow",
      "API troubleshooting when responses are unreliable",
      "Production diagnostics for issues that keep coming back",
    ],
  },
];
