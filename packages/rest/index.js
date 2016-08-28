/**
 * Extract the second to last elements off a list.
 *
 * @param  {Array} list List from which to get the rest of it.
 * @return {Array}        Second to last elements of provided list.
 */
export default function rest (list) {
  return list.slice(1)
}
