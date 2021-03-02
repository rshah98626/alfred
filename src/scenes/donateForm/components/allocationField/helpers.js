/**
 * Rounds a number to the nearest hundredth.
 * @param {Number} num
 * @returns {Number}
 */
export const roundToNearestHundredth = (num) =>
  Math.round((num + Number.EPSILON) * 100) / 100

/**
 * This function evenly divides total money amongst numParties.
 * Rounds to the nearest cent. Returns an array which is numParties
 * long and has the correct number of divided values.
 * @param {Number} total
 * @param {Number} numParties
 * @returns {Array}
 */
export const rebalanceMoney = (total, numParties) => {
  if (isNaN(total) || numParties === 0) return []

  let units = total * 100
  let fraction = Math.floor(units / numParties)
  let remainder = Math.round(Math.abs(units) % numParties)

  return Array(numParties - remainder)
    .fill(fraction)
    .concat(Array(remainder).fill(fraction + Math.sign(units)))
    .map((v) => v / 100)
}
