/* global expect it */

import partial from '..'

it('partial() returns partially implemented functions', () => {
  const square = partial(Math.pow, undefined, 2)
  expect(square(-2)).toBe(4)
  expect(square(0)).toBe(0)
  expect(square(2)).toBe(4)
})
