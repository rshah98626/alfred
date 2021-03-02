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

  let roundedValue = roundToNearestHundredth(total / numParties)
  let remainder = roundToNearestHundredth(roundedValue * numParties - total)
  let balancingValue = remainder < 0 ? roundedValue + 0.01 : roundedValue - 0.01
  let numBalancing = Math.abs(remainder * 100)

  return Array(numParties - numBalancing)
    .fill(roundedValue)
    .concat(Array(numBalancing).fill(balancingValue))
}
