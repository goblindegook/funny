import test from 'ava'
import product from '../../packages/product'

test('product() with an empty array returns 1', t => {
  t.is(product([]), 1)
})

test('product() with a single item array returns the item', t => {
  t.is(product([1]), 1)
})

test('product() multiplies all the numbers', t => {
  t.is(product([1, 2, 3, 4]), 24)
})
