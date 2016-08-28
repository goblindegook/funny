import curryN from 'funny-curry-n'

/**
 * Subtraction.
 *
 * @param  {Number} minuend    Minuend.
 * @param  {Number} subtrahend Subtrahend.
 * @return {Number}            Subtraction result.
 */
function _subtract (minuend, subtrahend) {
  return minuend - subtrahend
}

const subtract = curryN(2, _subtract)

export default subtract
