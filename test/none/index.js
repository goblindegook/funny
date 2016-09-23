import test from 'ava'
import none from '../../packages/none'

test('none() of an empty array returns true', t => {
  t.is(none(i => i, []), true)
})

test('none() of a list that fully matches the predicate function returns false', t => {
  t.is(none(i => i, [true, true]), false)
})

test('none() of a list that partially matches the predicate function returns false', t => {
  t.is(none(i => i, [true, false]), false)
})

test('none() of a list that never matches the predicate function returns true', t => {
  t.is(none(i => i, [false, false]), true)
})
