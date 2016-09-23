import test from 'ava'
import partition from '../../packages/partition'

test('partition() of an empty array returns two empty arrays', t => {
  t.deepEqual(partition(x => true, []), [[], []])
})

test('partition() puts all items in the first array if always true', t => {
  t.deepEqual(partition(x => true, [1, 2, 3]), [[1, 2, 3], []])
})

test('partition() puts all items in the second array if always false', t => {
  t.deepEqual(partition(x => false, [1, 2, 3]), [[], [1, 2, 3]])
})

test('partition() splits the arrays according to the predicate', t => {
  t.deepEqual(partition(x => x % 2, [1, 2, 3]), [[1, 3], [2]])
})

test('partition() does not flatten array items', t => {
  t.deepEqual(partition(x => x.length === 1, [[1], [2], [3, 4]]), [[[1], [2]], [[3, 4]]])
})

test('partition() is curried', t => {
  t.deepEqual(partition(x => x % 2)([1, 2, 3]), [[1, 3], [2]])
})
