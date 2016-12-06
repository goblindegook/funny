import curryN from 'funny-curry-n'

/**
 * Check whether no items in the provided list are satisfied by the
 * predicate function.
 *
 * @param  {Function} predicate Predicate function.
 * @param  {Array}    list      List to iterate over.
 * @return {Boolean}            Whether no items in the list satisfy the predicate.
 */
function _none (predicate, list) {
  for (let i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) {
      return false
    }
  }
  return true
}

const none = curryN(2, _none)

export default none
