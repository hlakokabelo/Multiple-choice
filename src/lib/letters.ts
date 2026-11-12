export const LETTERS = ["A", "B", "C", "D", "E", "F"] as const;

export function letterFor(index: number): string {
  return LETTERS[index] ?? "?";
}
