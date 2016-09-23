import curryN from 'funny-curry-n'

/**
 * Check whether any items in the provided list are satisfied by the
 * predicate function.
 *
 * @param  {Function} predicate Predicate function.
 * @param  {Array}    list      List to iterate over.
 * @return {Boolean}            Whether any items in the list match the predicate.
 */
function _any (predicate, list) {
  for (let i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) {
      return true
    }
  }
  return false
}

const any = curryN(2, _any)

export default any
