import append from 'funny-append'
import curryN from 'funny-curry-n'
import fold from 'funny-fold'

/**
 * Map.
 *
 * @param  {Function} fn   Mapping function.
 * @param  {Array}    list List of items to map.
 * @return {Array}         Mapped list.
 */
function _map (fn, list) {
  return fold((acc, item, index) => append(fn(item, index, list), acc), [], list)
}

const map = curryN(2, _map)

export default map
