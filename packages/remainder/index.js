import curryN from 'funny-curry-n'

/**
 * Compute the remainder of the Euclidean division of two integers.
 *
 * @param  {Number} dividend Dividend.
 * @param  {Number} divisor  Divisor.
 * @return {Number}          Remainder.
 */
function _remainder (a, b) {
  return a % b
}

const remainder = curryN(2, _remainder)

export default remainder
