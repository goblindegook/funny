import test from 'ava'
import same from '../../packages/same'

test('same() of the same value returns true', t => {
  t.is(same(1, 1), true)
})

test('same() of the same reference returns true', t => {
  const a = [1]
  const b = a
  t.is(same(a, b), true)
})

test('same() of different values returns false', t => {
  t.is(same(1, 2), false)
})

test('same() of different references returns false', t => {
  t.is(same([1], [1]), false)
})
