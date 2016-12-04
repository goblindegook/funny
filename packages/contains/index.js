import curryN from 'funny-curry-n'

/**
 * Contains.
 *
 * @param  {*}       element Element to look for.
 * @param  {Array}   list    List to check.
 * @return {Boolean}         Whether the element exists in the list.
 */
function _contains (element, list) {
  const [head, ...rest] = list

  if (element === head) {
    return true
  }

  return rest.length ? _contains(element, rest) : false
}

const contains = curryN(2, _contains)

export default contains
