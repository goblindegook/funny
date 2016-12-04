import curryN from 'funny-curry-n'
import map from 'funny-map'

/**
 * Converge.
 *
 * @param  {Function}   fn      ...
 * @param  {Function[]} fns     ...
 * @param  {*}          ...args ...
 * @return {*}                  ...
 */
function _converge (fn, fns, ...args) {
  return fn(...map(f => f(...args), fns))
}

const converge = curryN(3, _converge)

export default converge
