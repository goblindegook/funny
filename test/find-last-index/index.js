import test from 'ava'
import findLastIndex from '../../packages/find-last-index'

test('findLastIndex() returns -1 on an empty array', t => {
  t.is(findLastIndex(x => true, []), -1)
})

test('findLastIndex() returns -1 when no elements match the predicate', t => {
  t.is(findLastIndex(x => false, [1, 2, 3]), -1)
})

test('findLastIndex() findLastIndexs the first element that matches the predicate', t => {
  t.is(findLastIndex(x => x === 1, [1, 2, 1]), 2)
})

test('findLastIndex() is curried', t => {
  t.is(findLastIndex(x => x === 1)([1, 2, 1]), 2)
})
