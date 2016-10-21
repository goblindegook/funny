import test from 'ava'
import findLast from '../../packages/find-last'

test('findLast() returns undefined on an empty array', t => {
  t.is(findLast(x => true, []), undefined)
})

test('findLast() returns undefined when no elements match the predicate', t => {
  t.is(findLast(x => false, [1, 2, 3]), undefined)
})

test('findLast() finds the first element that matches the predicate', t => {
  t.deepEqual(findLast(x => x === 1, [1, 2, 3]), 1)
})

test('findLast() is curried', t => {
  t.deepEqual(findLast(x => x === 1)([1, 2, 3]), 1)
})
