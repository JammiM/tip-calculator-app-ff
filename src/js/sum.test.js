import { expect, describe, it } from "vitest";
import { sum } from "./sum.js";

describe("my first test", () => {
  it("works", () => {
    expect(true);
  });

  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
