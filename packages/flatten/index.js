import concat from 'funny-concat'

/**
 * Flatten a list.
 *
 * @param  {Array} list List to flatten.
 * @return {Array}      Flattened list.
 */
export default function flatten (list) {
  return Array.isArray(list) ? _flatten([], list) : []
}

/**
 * Recursively flatten a list.
 *
 * @param  {Array} acc  Flattened list accumulator.
 * @param  {Array} list List to flatten.
 * @return {Array}      Flattened list.
 */
function _flatten (acc, list) {
  if (list.length <= 0) {
    return acc
  }

  const [head, ...rest] = list
  return _flatten(concat(acc, head), rest)
}
