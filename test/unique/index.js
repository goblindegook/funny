import test from 'ava'
import unique from '../../packages/unique'

test('unique() of an empty list returns an empty list', t => {
  t.deepEqual(unique([]), [])
})

test('unique() of a list with unique items returns the list unchanged', t => {
  t.deepEqual(unique([1, 2, 3]), [1, 2, 3])
})

test('unique() of a list with duplicate items returns the list with duplicates removed', t => {
  t.deepEqual(unique([1, 2, 3, 1, 3]), [1, 2, 3])
})
