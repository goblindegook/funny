/* global expect it */

import chain from '..'

it('chain() does not change an empty array', () => {
  expect(chain(i => i, [])).toEqual([])
})

it('chain() does not change an array if the iterated function is the identity', () => {
  expect(chain(i => i, [1, 2, 3])).toEqual([1, 2, 3])
})

it('chain() flattens arrays', () => {
  expect(chain(i => [i, i], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

it('chain() is curried', () => {
  expect(chain(i => [i, i])([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})
