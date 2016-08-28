import test from 'ava'
import range from '../../packages/range'

test('range() creates single item ranges', t => {
  t.deepEqual(range(1, 1), [1])
})

test('range() creates ascending ranges', t => {
  t.deepEqual(range(1, 3), [1, 2, 3])
})

test('range() creates descending ranges', t => {
  t.deepEqual(range(3, 1), [3, 2, 1])
})

test('range() arguments default to 0', t => {
  t.deepEqual(range(2, undefined), [2, 1, 0])
  t.deepEqual(range(undefined, 2), [0, 1, 2])
})

test('range() is curried', t => {
  t.deepEqual(range(1)(3), [1, 2, 3])
})
