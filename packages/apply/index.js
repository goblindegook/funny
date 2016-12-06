import curryN from 'funny-curry-n'

/**
 * Apply.
 *
 * @param  {Function} fn   Function to apply.
 * @param  {Array}    args List of function arguments.
 * @return {*}             Result of arguments applied to the function.
 */
function _apply (fn, args) {
  return fn(...args)
}

const apply = curryN(2, _apply)

export default apply
