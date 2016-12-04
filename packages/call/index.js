import curryN from 'funny-curry-n'

/**
 * Call.
 *
 * @param  {Function} fn      Function to call.
 * @param  {Array}    ...args Function arguments.
 */
function _call (fn, ...args) {
  return fn(...args)
}

const call = curryN(2, _call)

export default call
