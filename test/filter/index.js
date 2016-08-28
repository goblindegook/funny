import test from 'ava'
import filter from '../../packages/filter'

test('filter() does not change an empty array', t => {
  t.deepEqual(filter(x => true, []), [])
})

test('filter() does not change an array if predicate is always true', t => {
  t.deepEqual(filter(x => true, [1, 2, 3]), [1, 2, 3])
})

test('filter() empties an array if predicate is always false', t => {
  t.deepEqual(filter(x => false, [1, 2, 3]), [])
})

test('filter() changes an array according to predicate result', t => {
  t.deepEqual(filter(x => x % 2, [1, 2, 3]), [1, 3])
})

test('filter() does not flatten array items', t => {
  t.deepEqual(filter(x => x.length === 1, [[1], [2], [3, 4]]), [[1], [2]])
})

test('filter() is curried', t => {
  t.deepEqual(filter(x => x % 2)([1, 2, 3]), [1, 3])
})
