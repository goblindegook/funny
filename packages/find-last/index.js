import curryN from 'funny-curry-n'
import findLastIndex from 'funny-find-last-index'

/**
 * Find the first element in a list that satisfies a predicate function.
 *
 * @param  {Function} predicate  Function that determines whether to pick the item.
 * @param  {Array}    list       List of items to find.
 * @return {any}                 Found element, if any.
 */
function _findLast (predicate, list) {
  const index = findLastIndex(predicate, list)

  if (index >= 0) {
    return list[index]
  }
}

const findLast = curryN(2, _findLast)

export default findLast
