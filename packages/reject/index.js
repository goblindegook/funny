import append from 'funny-append'
import curryN from 'funny-curry-n'
import fold from 'funny-fold'

/**
 * Filter a list such that every element does not satisfy a predicate function.
 *
 * @param  {Function} predicate Function that determines whether to reject the item.
 * @param  {Array}    list      List of items to reject.
 * @return {Array}              Rejected list.
 */
function _reject (predicate, list) {
  return fold((acc, item, index, list) => predicate(item, index, list) ? acc : append(item, acc), [], list)
}

const reject = curryN(2, _reject)

export default reject
