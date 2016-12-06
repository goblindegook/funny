import curryN from 'funny-curry-n'

/**
 * Check whether all items in the provided list are satisfied by the
 * predicate function.
 *
 * @param  {Function} predicate Predicate function.
 * @param  {Array}    list      List to iterate over.
 * @return {Boolean}            Whether all items in the list satisfy the predicate.
 */
function _all (predicate, list) {
  for (let i = 0, length = list.length; i < length; i++) {
    if (!predicate(list[i])) {
      return false
    }
  }
  return true
}

const all = curryN(2, _all)

export default all
