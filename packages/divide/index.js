import curryN from 'funny-curry-n'

/**
 * Division.
 *
 * @param  {Number} dividend Dividend.
 * @param  {Number} divisor  Divisor.
 * @return {Number}          Division result.
 */
function _divide (dividend, divisor) {
  return dividend / divisor
}

const divide = curryN(2, _divide)

export default divide
