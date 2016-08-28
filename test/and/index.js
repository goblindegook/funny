import test from 'ava'
import and from '../../packages/and'

test('true && true = true', t => {
  t.is(and(true, true), true)
})

test('true && false = false', t => {
  t.is(and(true, false), false)
})

test('false && true = false', t => {
  t.is(and(false, true), false)
})

test('false && false = false', t => {
  t.is(and(false, false), false)
})
