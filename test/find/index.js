import test from 'ava'
import find from '../../packages/find'

test('find() returns undefined on an empty array', t => {
  t.is(find(x => true, []), undefined)
})

test('find() returns undefined when no elements match the predicate', t => {
  t.is(find(x => false, [1, 2, 3]), undefined)
})

test('find() finds the first element that matches the predicate', t => {
  t.is(find(x => x === 1, [1, 2, 3]), 1)
})

test('find() is curried', t => {
  t.is(find(x => x === 1)([1, 2, 3]), 1)
})
