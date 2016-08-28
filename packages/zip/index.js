import curryN from 'funny-curry-n'
import prepend from 'funny-prepend'

/**
 * Zip.
 *
 * @param  {Array} left  Items to zip on the left.
 * @param  {Array} right Items to zip on the right.
 * @return {Array}       Zipped list.
 */
function _zip (left, right) {
  const lastIndex = Math.min(left.length, right.length) - 1
  return _recursiveZip([], lastIndex, left, right)
}

/**
 * Internal recursive zip function.
 *
 * @param  {Array}  acc   Accumulated result.
 * @param  {Number} index Index to add to zipped list.
 * @param  {Array}  left  Items to zip on the left.
 * @param  {Array}  right Items to zip on the right.
 * @return {Array}        Zipped list.
 */
function _recursiveZip (acc, index, left, right) {
  if (index < 0) {
    return acc
  }

  return _recursiveZip(prepend([left[index], right[index]], acc), index - 1, left, right)
}

const zip = curryN(2, _zip)

export default zip
