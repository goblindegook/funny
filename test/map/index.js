import test from 'ava'
import map from '../../packages/map'

test('map() does not change an empty array', t => {
  t.deepEqual(map(i => i, []), [])
})

test('map() does not change an array if the iterated function is the identity', t => {
  t.deepEqual(map(i => i, [1, 2, 3]), [1, 2, 3])
})

test('map() changes an array if the iterated function changes its values', t => {
  t.deepEqual(map(i => 2 * i, [1, 2, 3]), [2, 4, 6])
})

test('map() does not flatten arrays', t => {
  t.deepEqual(map(i => [i, i], [1, 2, 3]), [[1, 1], [2, 2], [3, 3]])
})

test('map() is curried', t => {
  t.deepEqual(map(i => 2 * i)([1, 2, 3]), [2, 4, 6])
})
