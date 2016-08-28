/**
 * Extract the last element off a list.
 *
 * @param  {Array} list List from which to get the last element.
 * @return {any}        Last element of provided list.
 */
export default function last (list) {
  const length = list.length
  return list.slice(length - 1, length)[0]
}
