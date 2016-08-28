import fold from 'funny-fold'

/**
 * Left-to-right multiple function composition.
 *
 * Returns a higher-order function that combines simpler functions
 * such that the result of the left-most function is passed to the
 * function to its right, and so on.
 *
 * The first function sequenced may have multiple arity. All other
 * functions must be unary.
 *
 * @param  {Function} firstFn First function to sequence.
 * @param  {Function} ...rest  Remaining functions to sequence.
 * @return {Function}         Composed function.
 */
export default function sequence (firstFn, ...rest) {
  return (...args) => fold((result, fn) => fn(result), firstFn(...args), rest)
}
