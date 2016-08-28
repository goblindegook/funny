import test from 'ava'
import reject from '../../packages/reject'

test('reject() does not change an empty array', t => {
  t.deepEqual(reject(x => true, []), [])
})

test('reject() does not change an array if predicate is always false', t => {
  t.deepEqual(reject(x => false, [1, 2, 3]), [1, 2, 3])
})

test('reject() empties an array if predicate is always true', t => {
  t.deepEqual(reject(x => true, [1, 2, 3]), [])
})

test('reject() changes an array according to predicate result', t => {
  t.deepEqual(reject(x => x % 2, [1, 2, 3]), [2])
})

test('reject() does not flatten array items', t => {
  t.deepEqual(reject(x => x.length > 1, [[1], [2], [3, 4]]), [[1], [2]])
})

test('reject() is curried', t => {
  t.deepEqual(reject(x => x % 2)([1, 2, 3]), [2])
})
