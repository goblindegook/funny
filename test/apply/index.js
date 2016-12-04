import test from 'ava'
import apply from '../../packages/apply'

test('apply() invokes the function with the arguments provided in the array', t => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  t.deepEqual(apply(fn, args), args)
})

test('apply() is curried', t => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  t.deepEqual(apply(fn)(args), args)
})
