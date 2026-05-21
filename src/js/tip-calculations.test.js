import { expect, describe, it, test, beforeEach, afterEach } from "vitest";
import { page, userEvent } from "vitest/browser";

import {
  generateForm,
  destroyForm,
  totalTip,
  divideByAHundred,
  tipAmountPerPerson,
  totalBillPerPerson,
} from "./tip-calculations";

beforeEach(() => {
  document.body.innerHTML = '<div id="container"></div>';

  generateForm();
});

afterEach(() => {
  destroyForm();
});

describe("Renders Correctly", () => {
  test("should display the form correctly", () => {
    //Select Tip %
  });
});

describe("UI tests", () => {
  test("should highlight the 10% button, when it is selected", () => {
    // https://vitest.dev/api/browser/assertions.html#tohaveclass
  });
});

describe("Button interaction tests", () => {
  test("Bill price should be set to zero when the reset button is clicked", async () => {
    const quantityInput = page.getByRole("spinbutton", { name: "bill" });
    const numOfPeopleInput = page.getByRole("spinbutton", {
      name: "Number of people:",
    });
    const submitButton = page.getByRole("button", { name: /Reset/i });

    const form = document.querySelector("#splitForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    await userEvent.fill(quantityInput, "9999998");
    await userEvent.fill(numOfPeopleInput, "33");

    await userEvent.click(submitButton);
    await expect.element(numOfPeopleInput).toHaveValue(33);
  });
});

describe("Cost calulations", () => {
  test("tip per person", () => {});

  test("total per person", () => {});
});

describe("Decimal conversion tests", () => {
  it("23 as a decimal should equal 23.0", () => {
    expect(divideByAHundred(23)).toEqual(0.23);
  });

  it("5 as a decimal should equal 0.05", () => {
    expect(divideByAHundred(5)).toEqual(0.05);
  });

  it("99 as a decimal should equal 0.99", () => {
    expect(divideByAHundred(99)).toEqual(0.99);
  });
});

describe("total tip tests", () => {
  test("should test for NaN for Tip Amount/ person  ", () => {
    // if (isNaN(x)) {
    //   return NaN;
    // }
  });

  it("bill of €49 and a tip of 99% should be €48.51", () => {
    expect(totalTip(99, 49)).toEqual(48.51);
  });

  it("bill of €142.55 and a tip of 15%, total tip should be 21.38", () => {
    expect(totalTip(15, 142.55)).toEqual(21.38);
  });
});

describe("Calculate the Tip Per Person", () => {
  it("€48.51 divided by 3 people should, total tip per person at €16.17", () => {
    expect(tipAmountPerPerson(48.51, 3)).toEqual(16.17);
  });
});

describe("Calculate the total amount Per Person", () => {
  it("bill of €49 with a total tip of €48.51 divided by 3 people should be €32.50", () => {
    expect(totalBillPerPerson(49, 48.51, 3)).toEqual("32.50");
  });

  it("bill of €142.55 with a total tip of €21.38 divided by 5 people should be €32.50", () => {
    expect(totalBillPerPerson(142.55, 21.38, 5)).toEqual("32.79");
  });
});
