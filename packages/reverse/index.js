import flip from 'funny-flip'
import fold from 'funny-fold'
import prepend from 'funny-prepend'

/**
 * Reverse the order of the items in a list.
 *
 * @param  {Array} list List to reverse.
 * @return {Array}      Reversed list.
 */
export default function reverse (list) {
  return fold(flip(prepend), [], list)
}
