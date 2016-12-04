import curryN from 'funny-curry-n'

/**
 * Fold applies a function to an accumulator and each value of an array (from
 * left-to-right), reducing it to a single value.
 *
 * @param  {Function} folder  Folder function.
 * @param  {*}        initial Initial accumulated value.
 * @param  {Array}    list    List to fold.
 * @return {*}                Accumulated value.
 */
function _fold (folder, initial, list) {
  return _recursiveFold(initial, 0, folder, list)
}

/**
 * Recursive fold.
 *
 * @param  {*}        acc    Accumulated result.
 * @param  {Number}   index  Current item index.
 * @param  {Function} folder Folder function.
 * @param  {Array}    list   List to fold.
 * @return {*}               Fold result.
 */
function _recursiveFold (acc, index, folder, list) {
  if (index < list.length) {
    return _recursiveFold(folder(acc, list[index], index, list), index + 1, folder, list)
  }

  return acc
}

const fold = curryN(3, _fold)

export default fold
