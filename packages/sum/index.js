import add from 'funny-add'
import fold from 'funny-fold'

/**
 * Sum adds together all the numerical items in a list.
 *
 * @param  {Array}  list Items to sum.
 * @return {Number}      Summed total.
 */
export default function sum (list) {
  return fold(add, 0, list)
}
