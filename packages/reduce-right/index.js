import curryN from 'funny-curry-n'
import fold from 'funny-fold'
import reverse from 'funny-reverse'

/**
 * Reduce applies a function to an accumulator and each value of an array (from
 * right-to-left), reducing it to a single value.
 *
 * @param  {Function} reducer Reducer function.
 * @param  {Array}    list    List to reduce.
 * @return {*}                Accumulated value.
 */
function _reduceRight (reducer, list) {
  const [acc, ...rest] = reverse(list)
  const lastIndex = rest.length - 1

  return fold((acc, item, index, list) => reducer(acc, item, lastIndex - index, list), acc, rest)
}

const reduceRight = curryN(2, _reduceRight)

export default reduceRight
