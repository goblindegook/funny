/**
 * Function currying.
 *
 * @param  {Number}   arity      Function arity.
 * @param  {Function} fn         Function to curry.
 * @param  {*}        ...curried Curried arguments.
 * @return {Function}            Curried function.
 *
 * @todo Allow specifying gaps.
 */
export default function curryN (arity, fn, ...curried) {
  return (...called) => {
    const args = [...curried, ...called]
    return arity <= args.length ? fn(...args) : curryN(arity, fn, ...args)
  }
}
