import append from 'funny-append'
import curryN from 'funny-curry-n'
import fold from 'funny-fold'

/**
 * Filter a list such that every element satisfies a predicate function.
 *
 * @param  {Function} predicate  Function that determines whether to allow the item.
 * @param  {Array}    list       List of items to filter.
 * @return {Array}               Filtered list.
 */
function _filter (predicate, list) {
  return fold((acc, item, index) => predicate(item, index, list) ? append(item, acc) : acc, [], list)
}

const filter = curryN(2, _filter)

export default filter
