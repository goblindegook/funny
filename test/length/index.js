import test from 'ava'
import length from '../../packages/length'
import range from '../../packages/range'

test('length of empty list is 0', t => {
  t.is(length([]), 0)
})

test('length of list with one element is 1', t => {
  t.is(length([1]), 1)
})

test('length of list with N elements is N', t => {
  const n = Math.ceil(Math.random() * 1000)
  t.is(length(range(1, n)), n)
})
