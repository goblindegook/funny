import test from 'ava'
import comparator from '../../packages/comparator'

const lt = (a, b) => a < b

test('comparator() returns -1 if a < b', t => {
  t.is(comparator(lt)(1, 2), -1)
})

test('comparator() returns 1 if a > b', t => {
  t.is(comparator(lt)(2, 1), 1)
})

test('comparator() returns 0 if a = b', t => {
  t.is(comparator(lt)(1, 1), 0)
})
