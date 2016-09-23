import test from 'ava'
import any from '../../packages/any'

test('any() of an empty array returns false', t => {
  t.is(any(i => i, []), false)
})

test('any() of a list that fully matches the predicate function returns true', t => {
  t.is(any(i => i, [true, true]), true)
})

test('any() of a list that partially matches the predicate function returns true', t => {
  t.is(any(i => i, [true, false]), true)
})

test('any() of a list that never matches the predicate function returns false', t => {
  t.is(any(i => i, [false, false]), false)
})
