import append from 'funny-append'
import curryN from 'funny-curry-n'

/**
 * Create numerical ranges of integers.
 *
 * @param  {Number} start Starting number.
 * @param  {Number} end   Ending number.
 * @return {Array}        Range.
 */
function _range (start = 0, end = 0) {
  return _recursiveRange([], parseInt(start, 10), parseInt(end, 10))
}

/**
 * Internal recursive range function.
 *
 * @param  {Array}  acc   Accumulated range.
 * @param  {Number} start Starting number.
 * @param  {Number} end   Ending number.
 * @return {Array}        Range.
 */
function _recursiveRange (acc, start, end) {
  const step = start < end ? 1 : -1

  if (start * step < end * step) {
    return _recursiveRange(append(start, acc), start + step, end)
  }

  return append(start, acc)
}

const range = curryN(2, _range)

export default range
