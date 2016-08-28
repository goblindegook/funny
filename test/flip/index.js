import test from 'ava'
import flip from '../../packages/flip'

test('flip() flips the first two arguments', t => {
  const fn = (a, b) => [a, b]
  t.deepEqual(flip(fn)(1, 2), [2, 1])
})

test('flip() flips arguments in unary functions', t => {
  const fn = a => [a, 'b']
  t.deepEqual(flip(fn)(1, 2), [2, 'b'])
})
