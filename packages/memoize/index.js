/**
 * Function memoization.
 *
 * @param  {Function} fn Function to memoize.
 * @return {Function}    Memoized function.
 *
 * @todo Write a better key serializer/hash function.
 */
export default function memoize (fn) {
  const cache = {}

  return (...args) => {
    const key = JSON.stringify(args)

    if (!cache.hasOwnProperty(key)) {
      cache[key] = fn(...args)
    }

    return cache[key]
  }
}
