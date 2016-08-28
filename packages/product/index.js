import fold from 'funny-fold'
import multiply from 'funny-multiply'

/**
 * Product multiplies together all the numbers in a list.
 *
 * @param  {Array} list Numbers to multiply.
 * @return {Number}     Multiplied total.
 */
export default function product (list) {
  return fold(multiply, 1, list)
}
