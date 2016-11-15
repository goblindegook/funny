import curryN from 'funny-curry-n'

/**
 * Check whether a number is an integer.
 * @param   {Number}  n Number to check.
 * @returns {Boolean}   True if number is an integer.
 */
function _isInteger (a) {
  return Math.floor(a) === a
}

/**
 * Compute the modulo of the Euclidean division of two integers.
 *
 * @param  {Number} dividend Dividend.
 * @param  {Number} divisor  Divisor.
 * @return {Number}          Modulo.
 */
function _modulo (a, b) {
  if (!_isInteger(a)) {
    return NaN
  }

  return (a % b + b) % b
}

const modulo = curryN(2, _modulo)

export default modulo
