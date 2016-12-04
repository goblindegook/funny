import append from 'funny-append'
import curryN from 'funny-curry-n'

/**
 * Return a list with the value repeated n times.
 *
 * @param  {*}      item Item to repeat.
 * @param  {Number} n    Number of repetitions.
 * @return {Array}       List with item repeated n times.
 */
function _repeat (item, n) {
  return _recursiveRepeat([], item, n)
}

/**
 * Internal recursive repeat function.
 *
 * @param  {Array}  acc  Ac
 * cumulated result.
 * @param  {*}      item Item to repeat.
 * @param  {Number} n    Number of repetitions.
 * @return {Array}       List with item repeated n times.
 */
function _recursiveRepeat (acc, item, n) {
  if (n < 1) {
    return acc
  }

  return _recursiveRepeat(append(item, acc), item, n - 1)
}

const repeat = curryN(2, _repeat)

export default repeat
