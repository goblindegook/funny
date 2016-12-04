import test from 'ava'
import call from '../../packages/call'

test('call() invokes the function with the arguments provided', t => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  t.deepEqual(call(fn, ...args), args)
})

test('call() is curried', t => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  t.deepEqual(call(fn)(...args), args)
})
