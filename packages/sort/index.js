import curryN from 'funny-curry-n'

/**
 * Sort a list.
 *
 * @param  {Function} comparator Comparator function.
 * @param  {Array}    list       List to sort.
 * @return {Array}               Sorted list.
 */
function _sort (comparator, list) {
  return list.slice().sort(comparator)
}

const sort = curryN(2, _sort)

export default sort
