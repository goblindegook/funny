import curryN from 'funny-curry-n'
import filter from 'funny-filter'
import reject from 'funny-reject'

/**
 * Partition a list in two lists with the items that pass and fail a predicate,
 * respectively.
 *
 * @param  {Function} predicate  Function that determines whether to allow the item.
 * @param  {Array}    list       List of items to partition.
 * @return {Array}               Partitioned list, with the accepted items in the
 *                               first position and the rejected items in the second.
 */
function _partition (predicate, list) {
  return [filter(predicate, list), reject(predicate, list)]
}

const partition = curryN(2, _partition)

export default partition
