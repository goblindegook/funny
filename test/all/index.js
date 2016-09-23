import test from 'ava'
import all from '../../packages/all'

test('all() of an empty array returns true', t => {
  t.is(all(i => i, []), true)
})

test('all() of a list that fully matches the predicate function returns true', t => {
  t.is(all(i => i, [true, true]), true)
})

test('all() of a list that partially matches the predicate function returns false', t => {
  t.is(all(i => i, [true, false]), false)
})

test('all() of a list that never matches the predicate function returns false', t => {
  t.is(all(i => i, [false, false]), false)
})
