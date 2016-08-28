import curryN from 'funny-curry-n'
import fold from 'funny-fold'

/**
 * Reduce applies a function to an accumulator and each value of an array (from
 * left-to-right), reducing it to a single value.
 *
 * @param  {Function} reducer Reducer function.
 * @param  {Array}    list    List to reduce.
 * @return {any}              Accumulated value.
 */
function _reduce (reducer, list) {
  let [acc, ...rest] = list

  return fold((acc, item, index, list) => reducer(acc, item, index + 1, list), acc, rest)
}

const reduce = curryN(2, _reduce)

export default reduce
