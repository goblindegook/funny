import contains from 'funny-contains'
import curryN from 'funny-curry-n'
import filter from 'funny-filter'

/**
 * List intersection.
 *
 * @param  {Array} list1 First list.
 * @param  {Array} list2 Second list.
 * @return {Array}       Intersection between lists.
 */
function _intersection (list1, list2) {
  return filter(item => contains(item, list2), list1)
}

const intersection = curryN(2, _intersection)

export default intersection
