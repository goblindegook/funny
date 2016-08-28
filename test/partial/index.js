import test from 'ava'
import partial from '../../packages/partial'

test('curry() returns curried functions', t => {
  const square = partial(Math.pow, undefined, 2)
  t.is(square(-2), 4)
  t.is(square(0), 0)
  t.is(square(2), 4)
})
