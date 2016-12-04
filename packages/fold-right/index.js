import curryN from 'funny-curry-n'
import fold from 'funny-fold'
import reverse from 'funny-reverse'

/**
 * Fold applies a function to an accumulator and each value of an array (from
 * right-to-left), reducing it to a single value.
 *
 * @param  {Function} folder  Folder function.
 * @param  {*}        initial Initial accumulated value.
 * @param  {Array}    list    List to reduce.
 * @return {*}                Accumulated value.
 */
function _foldRight (folder, initial, list) {
  const lastIndex = list.length - 1

  return fold((acc, item, index, list) => folder(acc, item, lastIndex - index, list), initial, reverse(list))
}

const foldRight = curryN(3, _foldRight)

export default foldRight
