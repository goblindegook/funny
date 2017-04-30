import curryN from 'funny-curry-n'

/**
 * Find the index of the first element in a list that satisfies a predicate function.
 *
 * @param  {Function} predicate  Function that determines whether to pick the item.
 * @param  {Array}    list       List of items to find.
 * @return {Number}              Found element index, or -1 if not found.
 */
function _findIndex (predicate, list) {
  for (let i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i], i, list)) {
      return i
    }
  }

  return -1
}

const findIndex = curryN(2, _findIndex)

export default findIndex
