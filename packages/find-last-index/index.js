import curryN from 'funny-curry-n'

/**
 * Find the index of the last element in a list that satisfies a predicate function.
 *
 * @param  {Function} predicate  Function that determines whether to pick the item.
 * @param  {Array}    list       List of items to find.
 * @return {Number}              Found element index, or -1 if not found.
 */
function _findLastIndex (predicate, list) {
  for (let i = list.length - 1; i >= 0; i--) {
    if (predicate(list[i], i, list)) {
      return i
    }
  }

  return -1
}

const findLastIndex = curryN(2, _findLastIndex)

export default findLastIndex
