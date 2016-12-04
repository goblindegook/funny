import converge from 'funny-converge'
import divide from 'funny-divide'
import length from 'funny-length'
import sum from 'funny-sum'

/**
 * Mean.
 *
 * @param  {Number[]} list List of numbers.
 * @return {Number}        Computed mean.
 */
export default function mean (list) {
  return converge(divide, [sum, length], list)
}
