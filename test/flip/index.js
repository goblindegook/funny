import test from 'ava'
import flip from '../../packages/flip'

test('flip() returns a function', t => {
  const fn = (a, b) => [a, b]
  t.is(typeof flip(fn), 'function')
})

test('flip() flips the first two arguments', t => {
  const fn = (a, b) => [a, b]
  const flippedFn = flip(fn)
  t.deepEqual(flippedFn(1, 2), [2, 1])
})

test('flip() flips arguments in unary functions', t => {
  const fn = a => [a, 'b']
  const flippedFn = flip(fn)
  t.deepEqual(flippedFn(1, 2), [2, 'b'])
})
