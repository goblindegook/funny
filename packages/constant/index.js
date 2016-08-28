/**
 * Constant function.
 *
 * Generates functions that always return the same thing.
 *
 * @param  {any}      result Result to always return.
 * @return {Function}        Function that always returns the result.
 */
export default function constant (result) {
  return () => result
}
