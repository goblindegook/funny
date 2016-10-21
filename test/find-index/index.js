import test from 'ava'
import findIndex from '../../packages/find-index'

test('findIndex() returns -1 on an empty array', t => {
  t.is(findIndex(x => true, []), -1)
})

test('findIndex() returns -1 when no elements match the predicate', t => {
  t.is(findIndex(x => false, [1, 2, 3]), -1)
})

test('findIndex() findIndexs the first element that matches the predicate', t => {
  t.is(findIndex(x => x === 1, [1, 2, 1]), 0)
})

test('findIndex() is curried', t => {
  t.is(findIndex(x => x === 1)([1, 2, 1]), 0)
})
