import concat from 'funny-concat'
import curryN from 'funny-curry-n'

/**
 * Append an item to the end of a list.
 *
 * @param  {*}     item Items to append.
 * @param  {Array} list List to receive the new item.
 * @return {Array}      List with appended item.
 */
function _append (item, list) {
  return concat(list, [item])
}

const append = curryN(2, _append)

export default append
