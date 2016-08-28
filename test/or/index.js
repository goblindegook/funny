import test from 'ava'
import or from '../../packages/or'

test('true && true = true', t => {
  t.is(or(true, true), true)
})

test('true && false = true', t => {
  t.is(or(true, false), true)
})

test('false && true = true', t => {
  t.is(or(false, true), true)
})

test('false && false = false', t => {
  t.is(or(false, false), false)
})
