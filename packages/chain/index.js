import concat from 'funny-concat'
import curryN from 'funny-curry-n'
import fold from 'funny-fold'

/**
 * Map.
 *
 * @param  {Function} fn   Mapping function.
 * @param  {Array}    list List of items to chain.
 * @return {Array}         Mapped list.
 */
function _chain (fn, list) {
  return fold((acc, item, index) => concat(acc, fn(item, index, list)), [], list)
}

const chain = curryN(2, _chain)

export default chain
