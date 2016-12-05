/* global expect it */

import identity from '..'

it('identity() returns null', () => {
  const v = null
  expect(identity(v)).toBe(v)
})

it('identity() returns booleans', () => {
  const v = true
  expect(identity(v)).toBe(v)
})

it('identity() returns numbers', () => {
  const v = 0
  expect(identity(v)).toBe(v)
})

it('identity() returns strings', () => {
  const v = 'test'
  expect(identity(v)).toBe(v)
})

it('identity() returns arrays', () => {
  const v = [1, 2, 3]
  expect(identity(v)).toBe(v)
})

it('identity() returns objects', () => {
  const v = { a: 1, b: 2, c: 3 }
  expect(identity(v)).toBe(v)
})

it('identity() returns functions', () => {
  const v = i => i
  expect(identity(v)).toBe(v)
})
