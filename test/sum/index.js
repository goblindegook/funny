import test from 'ava'
import sum from '../../packages/sum'

test('sum() with an empty array returns 0', t => {
  t.is(sum([]), 0)
})

test('sum() with a single item array returns the item', t => {
  t.is(sum([1]), 1)
})

test('sum() adds all the numbers', t => {
  t.is(sum([1, 2, 3, 4]), 10)
})
