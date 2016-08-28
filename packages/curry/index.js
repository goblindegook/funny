import curryN from 'funny-curry-n'

/**
 * Function currying.
 *
 * @param  {Function} fn         Function to curry.
 * @param  {*}        ...curried Curried arguments.
 * @return {Function}            Curried function.
 */
export default function curry (fn, ...curried) {
  return curryN(fn.length, fn, ...curried)
}
