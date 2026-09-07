export type Experience = {
  readonly id: string;
  readonly company: string;
  readonly location: string;
  readonly title: string;
  readonly period: string;
  readonly summary: string;
  readonly context: string;
  readonly skills: readonly string[];
  readonly highlights: readonly string[];
  readonly roles?: readonly {
    readonly title: string;
    readonly period: string;
    readonly highlights: readonly string[];
  }[];
};
