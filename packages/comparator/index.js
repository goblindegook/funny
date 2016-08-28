/**
 * Comparator function factory.
 *
 * @param  {Function} predicate Comparison predicate.
 * @return {Function}           Comparator function.
 */
export default function comparator (predicate) {
  return (a, b) => predicate(a, b) ? -1 : predicate(b, a) ? 1 : 0
}
