// Calculate the correct tip and total cost of the bill per person

/**
 * Represents the total tip.
 * @param {number} tip - The tip.
 * @param {number} billPrice - The bill.
 * @returns {number} return tip total, by multiplying the bill by the tip
 */
export function totalTip(tip = 0, billPrice = 0) {
  const tipAsPercentage = divideByAHundred(tip);
  return Number((billPrice * tipAsPercentage).toFixed(2));
}

/**
 * Converts a number into a decimal
 * @param {number} subsetNumber - The subset of the number.
 * @returns {number} A decimal of a number
 */
export function divideByAHundred(subsetNumber = 0) {
  const percentage = Number((subsetNumber / 100).toFixed(2));
  return percentage;
}

/**
 * Calculates the Total Bill: The bill + Total Tip = Grand Total
 * @param {number} billPrice - The bill.
 * @param {number} tip - The tip.
 * @returns {number} The grand total
 */
export function totalBill(billPrice, tip) {
  const grandTotal = billPrice + tip;
  return grandTotal;
}

/**
 * Calulates the tip amount price per person
 * @param {number} grandTotal
 * @param {number} numberOfPeople
 * @returns {number} tip amount per person
 */
export function tipAmountPerPerson(grandTotal, numberOfPeople) {
  return Number((grandTotal / numberOfPeople).toFixed(2));
}

export function totalBillPerPerson(billAmount, totalTip, numberOfPeople) {
  const totalBill = Number(billAmount) + Number(totalTip);
  const splitTotalPerson = totalBill / numberOfPeople;

  return Number(splitTotalPerson).toFixed(2);
}

let tipAmount,
  resetButton,
  tipOptions,
  splitForm,
  billcost,
  numberOfPeople,
  customTip,
  tipPerPerson,
  totalBillPerPersonElem;

function setup() {
  splitForm = document.getElementById("splitForm");
  tipOptions = document.querySelectorAll(".tip-option");
  billcost = splitForm.elements.namedItem("bill");
  numberOfPeople = splitForm.elements.namedItem("number-of-people");
  customTip = splitForm.elements.namedItem("custom-tip-price");
  tipPerPerson = document.getElementById("tip-per-person");
  totalBillPerPersonElem = document.getElementById("total--bill-per-person");
  resetButton = document.getElementById("reset-button");
}

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

function calculateTotals() {
  if (!numberOfPeople || !billcost || !tipAmount) {
    return;
  }

  if (
    Number(billcost.value) > 0 &&
    Number(numberOfPeople.value) > 0 &&
    tipAmount > 0
  ) {
    // console.log("bill is fired");
  }

  if ((tipAmount > 0) & (numberOfPeople.value > 0) & (billcost.value > 0)) {
    const tip = totalTip(tipAmount, billcost.value);

    const splitPerPerson = tipAmountPerPerson(tip, numberOfPeople.value);
    tipPerPerson.innerText = `${formatCurrency(splitPerPerson)}`;

    const totalPerPerson = totalBillPerPerson(
      billcost.value,
      tip,
      numberOfPeople.value
    );

    totalBillPerPersonElem.innerText = `${formatCurrency(totalPerPerson)}`;
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

export function generateForm() {
  const container = document.body;
  container.innerHTML = `
  <main>
      <h1 class="sr-only">Splitter</h1>

      <picture>
        <img src=${new URL("/logo.svg", import.meta.url).href} alt="Splitter
        Logo" />
      </picture>

      <form action="" class="split-form" id="splitForm">
        <div class="user-inputs split-form__subgrid-item">
          <label for="tip-price">Bill:</label>
          <div class="split-form__prefixed-input-field">
            <span class="prefix">
              <img src=${
                new URL("../assets/icon-dollar.svg", import.meta.url).href
              } alt="Dollar icon" />
            </span>
            <input
              type="number"
              id="tip-price"
              name="bill"
              placeholder="price"
              step=".01"
              value="0"
              min="0"
              max="9999999"
            />
          </div>
          <p>Select Tip %</p>
          <div class="split-form__single-tip-amount">
            <button
              type="button"
              data-tip="5"
              class="tip-option split-form__tip-button"
              aria-label="5%"
            >
              5%
            </button>
            <button
              type="button"
              data-tip="10"
              class="tip-option split-form__tip-button"
              aria-label="10%"
            >
              10%
            </button>
            <button
              type="button"
              data-tip="15"
              class="tip-option split-form__tip-button"
              aria-label="15%"
            >
              15%
            </button>
            <button
              type="button"
              data-tip="25"
              class="tip-option split-form__tip-button"
              aria-label="25%"
            >
              25%
            </button>
            <button
              type="button"
              data-tip="50"
              class="tip-option split-form__tip-button"
              aria-label="50%"
            >
              50%
            </button>
            <div>
              <label for="custom-tip-price" class="sr-only">Custom Tip:</label>
              <input
                type="number"
                aria-label="Custom tip amount"
                name="custom-tip-price"
                id="custom-tip-price"
                min="0"
                class="tip-option split-form__number-input-field"
                max="100"
                placeholder="Custom"
              />
            </div>
          </div>

          <label for="number-of-people">Number of people:</label>
          <div class="split-form__prefixed-input-field">
            <span class="prefix">
              <img src=${
                new URL("../assets/icon-person.svg", import.meta.url).href
              } alt="Person icon" />
            </span>
            <input
              type="number"
              id="number-of-people"
              name="number-of-people"
              step="1"
              value="1"
              min="1"
              max="9999999"
              required
            />
          </div>
        </div>
        <div class="calulated-totals split-form__subgrid-item">
          <div>
            <div class="split-form__calulated-totals">
              <div class="split-form__calulated-text">
                <p class="split-form__total-text">Tip Amount</p>
                <p class="split-form__total-text--muted">/ person</p>
              </div>
              <h2 id="tip-per-person" class="split-form__final-cost">$0.00</h2>
            </div>
            <div class="split-form__calulated-totals">
              <div class="split-form__calulated-text">
                <p class="split-form__total-text">Total</p>
                <p class="split-form__total-text--muted">/ person</p>
              </div>
              <h2 id="total--bill-per-person" class="split-form__final-cost">
                $0.00
              </h2>
            </div>
          </div>
          <input
            type="submit"
            value="RESET"
            id="reset-button"
            class="split-form__reset-button"
          />
        </div>
      </form>
    </main>`;
}

export function destroyForm() {
  document.body.innerHTML = "";
}

generateForm();

setup();

resetButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  // numberOfPeople.reportValidity();

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

      tipAmount = Number(ev.target.getAttribute("data-tip"));

      handleTipStyling(tipOptions, ev.target);
      calculateTotals();
    }
  });
});

customTip.addEventListener("input", (ev) => {
  tipAmount = Number(ev.target.value);

  calculateTotals();
});

billcost.addEventListener("change", calculateTotals);

numberOfPeople.addEventListener("input", calculateTotals);
