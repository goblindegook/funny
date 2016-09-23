import concat from 'funny-concat'
import fold from 'funny-fold'
import none from 'funny-none'
import same from 'funny-same'

/**
 * Returns a list with duplicate items removed.
 *
 * @param  {Array} list List with duplicates to remove.
 * @return {Array}      List with duplicates removed.
 */
export default function unique (list) {
  return fold((acc, item) => none(same(item), acc) ? concat(acc, item) : acc, [], list)
}
