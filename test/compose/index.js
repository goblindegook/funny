import test from 'ava'
import compose from '../../packages/compose'

test('compose() accepts a single function', t => {
  const biggest = compose(Math.max)
  t.is(biggest(0.1, 2.3, 4.5, 4.2), 4.5)
})

test('compose() combines multiple functions right-to-left', t => {
  const biggestRoundedUp = compose(Math.ceil, Math.max)
  t.is(biggestRoundedUp(0.1, 2.3, 4.5, 4.2), 5)
})
