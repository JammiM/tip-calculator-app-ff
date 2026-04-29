import { expect, describe, it } from "vitest";

import { totalTip, calculatePercentage } from "./tip-calculations";

describe("Tip splitter tests", () => {
  it("works", () => {
    expect(true);
  });

  it("adds subtotal of 100 and tip percentage of 2% to equal 20", () => {
    expect(totalTip(100, 0.2)).toEqual(20);
  });

  it("Should calulate to correct percentage", () => {
    expect(calculatePercentage(20, 50)).toEqual(40);
  });

  // TODO

  // tip per person

  // total per person

  // custom is a real percentage

  // one tip is selected

  // after reset is clicked, everthing is reset

  // reset is clickable once any input is selected

  // check correct currency
});
