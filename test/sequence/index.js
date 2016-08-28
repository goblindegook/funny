import test from 'ava'
import sequence from '../../packages/sequence'

test('sequence() accepts a single function', t => {
  const biggest = sequence(Math.max)
  t.is(biggest(0.1, 2.3, 4.5, 4.2), 4.5)
})

test('sequence() combines multiple functions left-to-right', t => {
  const biggestRoundedUp = sequence(Math.max, Math.ceil)
  t.is(biggestRoundedUp(0.1, 2.3, 4.5, 4.2), 5)
})
