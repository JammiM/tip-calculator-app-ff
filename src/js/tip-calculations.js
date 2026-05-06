// Calculate the correct tip and total cost of the bill per person

/**
 * Represents the total tip.
 * @param {number} subTotal - The subTotal of the bill.
 * @param {number} percentage - The percentage.
 * @returns {number} return sub total multipled by the percentage
 */
export function totalTip(subTotal = 0, percentage = 0) {
  const totalTip = subTotal * percentage;
  return totalTip;
}

/**
 * Calculates the percentage
 * @param {number} subsetNumber - The subset of the number.
 * @param {number} wholeNumber - The whole number.
 * @returns {number} Percentage of a and b
 */
export function calculatePercentage(subsetNumber = 0, wholeNumber = 0) {
  const percentage = (subsetNumber / wholeNumber) * 100;
  return percentage;
}

/**
 * Calculates the Total Bill: sub total + Total Tip = Grand Total
 * @param {number} subTotal
 * @param {number} tipAmount
 * @returns {number} The grand total
 */
export function totalBill(subTotal, tipAmount) {
  const grandTotal = subTotal + tipAmount;
  return grandTotal;
}

/**
 * Calulates the tip amount price per person
 * @param {number} grandTotal
 * @param {number} numberOfPeople
 * @returns {number} tip amount per person
 */
export function tipAmountPerPerson(grandTotal, numberOfPeople) {
  const amountPerPerson = grandTotal / numberOfPeople;
  return amountPerPerson;
}

let tipAmount = 0;

const resetButton = document.getElementById("reset-button");
const tipOptions = document.querySelectorAll(".tip-option");
const splitForm = document.getElementById("splitForm");
const numberOfPeople = splitForm.elements.namedItem("number-of-people");
const billcost = splitForm.elements.namedItem("bill");

const customTip = splitForm.elements.namedItem("custom-tip-price");

const tipPerPerson = document.getElementById("tip-per-person");
const totalPerPerson = document.getElementById("total-per-person");

resetButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  numberOfPeople.reportValidity();

  Array.from(splitForm.elements).map((item) => {
    if (item.type == "number") {
      item.value = 0;
    }

    item.classList.remove("selected-tip");
  });

  splitForm.reset();
});

tipOptions.forEach((inputItem) => {
  inputItem.addEventListener("click", (ev) => {
    if (ev.target.tagName == "BUTTON") {
      splitForm.elements.namedItem("custom-tip-price").value = 0;

      tipAmount = ev.target.getAttribute("data-tip");

      handleTipStyling(tipOptions, ev.target);
      calculateTotals();
    }
  });
});

customTip.addEventListener("input", (ev) => {
  tipAmount = ev.target.value;

  calculateTotals();
});

function deselectTipOption(inputElement) {
  inputElement.classList.remove("selected-tip");
}

function selectTipOption(inputElement) {
  inputElement.classList.add("selected-tip");
}

function handleTipStyling(_tipOptions, _targetElement) {
  _tipOptions.forEach((currentElement) => {
    if (_targetElement == currentElement) {
      selectTipOption(_targetElement);
    } else {
      deselectTipOption(currentElement);
    }
  });
}

billcost.addEventListener("change", calculateTotals);

numberOfPeople.addEventListener("input", (ev) => {
  calculateTotals();
});

function calculateTotals() {
  if ((tipAmount > 0) & (numberOfPeople.value > 0) & (billcost.value > 0)) {
    tipPerPerson.innerText = `${formatCurrency(
      numberOfPeople.value + billcost.value + tipAmount
    )}`;

    totalPerPerson.innerText = `${formatCurrency(
      numberOfPeople.value + billcost.value + tipAmount
    )}`;
  }
}

function formatCurrency(initialNumber) {
  const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  return nf.format(initialNumber);
}
