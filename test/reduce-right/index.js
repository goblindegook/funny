import test from 'ava'
import reduceRight from '../../packages/reduce-right'

test('reduceRight() applies a combine function with the correct items', t => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('reduceRight() applies a combine function with the correct items', t => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('reduceRight() passes the combine function the collection index', t => {
  const expected = '4210'
  const actual = reduceRight((acc, item, index) => `${acc}${index}`, [1, 2, 3, 4])

  t.deepEqual(actual, expected)
})

test('reduceRight() is curried', t => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`)([1, 2, 3, 4])

  t.is(actual, expected)
})
