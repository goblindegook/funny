import curryN from 'funny-curry-n'

/**
 * Strictly compare two operands.
 *
 * @param  {any}     a A operand.
 * @param  {any}     b B operand.
 * @return {Boolean}   Strict comparison result.
 */
function _same (a, b) {
  return a === b
}

const same = curryN(2, _same)

export default same
