import curryN from 'funny-curry-n'

/**
 * Addition.
 *
 * @param  {Number} augend Augend.
 * @param  {Number} addend Addend.
 * @return {Number}        Addition result.
 */
function _add (augend, addend) {
  return augend + addend
}

const add = curryN(2, _add)

export default add
