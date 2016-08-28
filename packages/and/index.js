import curryN from 'funny-curry-n'

/**
 * Logical conjunction operator.
 *
 * @param  {Number} a A operand.
 * @param  {Number} b B operand.
 * @return {Number}   Conjunction result.
 */
function _and (a, b) {
  return a && b
}

const and = curryN(2, _and)

export default and
