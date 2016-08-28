import curryN from 'funny-curry-n'

/**
 * Logical disjunction operator.
 *
 * @param  {Number} a A operand.
 * @param  {Number} b B operand.
 * @return {Number}   Disjunction result.
 */
function _or (a, b) {
  return a || b
}

const or = curryN(2, _or)

export default or
