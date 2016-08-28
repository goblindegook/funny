import curryN from 'funny-curry-n'

/**
 * Concatenate items to the end of a list.
 *
 * @param  {Array} list     List to receive new items.
 * @param  {Array} ...items Items to concatenate, will be flattened.
 * @return {Array}          Concatenated list.
 */
function _concat (list, ...items) {
  return list.concat(...items)
}

const concat = curryN(2, _concat)

export default concat
