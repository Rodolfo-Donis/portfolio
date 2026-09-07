export type Project = {
  readonly id: string;
  readonly name: string;
  readonly kind: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly skills: readonly string[];
  readonly url: string;
  readonly urlLabel: string;
};
