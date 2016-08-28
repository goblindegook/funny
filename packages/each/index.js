import curryN from 'funny-curry-n'

/**
 * Loop over the items in a list, calling a function for each.
 *
 * @param  {Function} iterator Iterator function.
 * @param  {Array}    list     List to iterate.
 * @return {void}
 */
function _each (iterator, list) {
  _recursiveEach(0, list.length, iterator, list)
}

/**
 * Internal recursive each function.
 *
 * @param  {Number}   index    Current index.
 * @param  {Number}   length   List length.
 * @param  {Function} iterator Iterator function.
 * @param  {Array}    list     List to iterate.
 * @return {void}
 */
function _recursiveEach (index, length, iterator, list) {
  if (index < length) {
    iterator(list[index], index, list)
    return _recursiveEach(index + 1, length, iterator, list)
  }
}

const each = curryN(2, _each)

export default each
