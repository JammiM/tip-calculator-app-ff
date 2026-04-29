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
