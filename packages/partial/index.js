import map from 'funny-map'

/**
 * Partial functions.
 *
 * @param  {Function} fn Function to partial.
 * @return {Function}    Partially implemented function.
 */
export default function partial (fn, ...partialArgs) {
  if (!partialArgs.length) {
    return fn
  }

  return (...args) => {
    let index = 0
    return fn(...map(arg => arg === undefined ? args[index++] : arg, partialArgs))
  }
}
