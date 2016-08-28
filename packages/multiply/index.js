import curryN from 'funny-curry-n'

/**
 * Multiplication.
 *
 * @param  {Number} multiplier   Multiplier.
 * @param  {Number} multiplicand Multiplicand.
 * @return {Number}              Multiplication result.
 */
function _multiply (multiplier, multiplicand) {
  return multiplier * multiplicand
}

const multiply = curryN(2, _multiply)

export default multiply
