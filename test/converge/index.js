import test from 'ava'
import converge from '../../packages/converge'

test('converge() invokes the function with the converged functions and arguments provided', t => {
  const fn = (...args) => args
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const args = [2, 3]

  t.deepEqual(
    converge(fn, [add, mult], ...args),
    fn(add(...args), mult(...args))
  )
})

test('converge() is curried', t => {
  const fn = (...args) => args
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const args = [2, 3]

  t.deepEqual(
    converge(fn)([add, mult])(...args),
    fn(add(...args), mult(...args))
  )
})
