/* global expect it */

import constant from '..'

it('returns a function', () => {
  const fn = constant()
  expect(typeof fn).toBe('function')
})

it('returns a function that always returns null', () => {
  const value = null
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns a boolean', () => {
  const value = true
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns a number', () => {
  const value = 1
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns a string', () => {
  const value = 'test'
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns an array', () => {
  const value = [1, 2, 3]
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns an object', () => {
  const value = {a: 1, b: 2, c: 3}
  const always = constant(value)
  expect(always()).toBe(value)
})

it('returns a function that always returns a function', () => {
  const value = i => i
  const always = constant(value)
  expect(always()).toBe(value)
})
