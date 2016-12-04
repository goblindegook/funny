import curryN from 'funny-curry-n'
import findIndex from 'funny-find-index'

/**
 * Find the first element in a list that satisfies a predicate function.
 *
 * @param  {Function} predicate  Function that determines whether to pick the item.
 * @param  {Array}    list       List of items to find.
 * @return {*}                   Found element, if any.
 */
function _find (predicate, list) {
  const index = findIndex(predicate, list)

  if (index >= 0) {
    return list[index]
  }
}

const find = curryN(2, _find)

export default find
