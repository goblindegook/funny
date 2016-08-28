import fold from 'funny-fold'
import reverse from 'funny-reverse'

/**
 * Right-to-left multiple function composition.
 *
 * Returns a higher-order function that combines simpler functions
 * such that the result of the right-most function is passed to the
 * function to its left, and so on.
 *
 * The firstFn function composed may have multiple arity. All other
 * functions must be unary.
 *
 * @param  {Function} ...fns Functions to compose.
 * @return {Function}        Composed function.
 */
export default function compose (...fns) {
  const [firstFn, ...rest] = reverse(fns)
  return (...args) => fold((result, fn) => fn(result), firstFn(...args), rest)
}
