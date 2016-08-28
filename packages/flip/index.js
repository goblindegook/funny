/**
 * Flip the first two arguments of a function.
 *
 * @param  {Function} fn Function whose first two arguments should be flipped.
 * @return {Function}    Function with flipped arguments.
 */
export default function flip (fn) {
  return (first, second, ...rest) => fn(second, first, ...rest)
}
