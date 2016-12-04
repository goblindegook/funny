import concat from 'funny-concat'
import curryN from 'funny-curry-n'

/**
 * Append an item to the start of a list.
 *
 * @param  {*}     item Items to prepend.
 * @param  {Array} list List to receive the new item.
 * @return {Array}      List with prepended item.
 */
function _prepend (item, list) {
  return concat([item], list)
}

const prepend = curryN(2, _prepend)

export default prepend
