import type { Project } from "@/models/project";

export type ShowcaseItem =
  | {
      readonly kind: "client-work";
      readonly project: Project;
    }
  | {
      readonly kind: "concept";
      readonly id: string;
      readonly title: string;
      readonly problem: string;
      readonly approach: string;
      readonly deliverables: readonly string[];
      readonly steps: readonly string[];
      readonly diagramCaption: string;
    };
