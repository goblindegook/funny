import head from 'funny-head'
import length from 'funny-length'

/**
 * Extract the last element off a list.
 *
 * @param  {Array} list List from which to get the last element.
 * @return {*}          Last element of provided list.
 */
export default function last (list) {
  const listLength = length(list)
  return head(list.slice(listLength - 1, listLength))
}
