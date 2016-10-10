import concat from 'funny-concat'
import contains from 'funny-contains'
import curryN from 'funny-curry-n'
import reject from 'funny-reject'

/**
 * List difference.
 *
 * @param  {Array} list1 First list.
 * @param  {Array} list2 Second list.
 * @return {Array}       Difference between lists.
 */
function _difference (list1, list2) {
  return concat(
    reject(item => contains(item, list2), list1),
    reject(item => contains(item, list1), list2)
  )
}

const difference = curryN(2, _difference)

export default difference
