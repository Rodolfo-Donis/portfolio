import type { WorkingStep } from "@/models/working-step";

export const workingSteps: readonly WorkingStep[] = [
  {
    title: "Requirements",
    detail:
      "We start with the problem, the goals, and the constraints, gathered with the stakeholders who will use the result.",
  },
  {
    title: "Scope",
    detail:
      "We agree on priorities and deliverables, including how the work can grow when the project is a longer one.",
  },
  {
    title: "Agile delivery",
    detail:
      "I build in short cycles so you review working software as it takes shape, not only at the end.",
  },
  {
    title: "Stakeholder communication",
    detail:
      "The people who own the outcome stay in the conversation as decisions and changes come up.",
  },
  {
    title: "Handover",
    detail:
      "You receive the solution and documentation, structured so it can scale as the business changes.",
  },
];
