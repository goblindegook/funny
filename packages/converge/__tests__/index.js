import converge from '..'

const fn = (...args) => args
const add = (a, b) => a + b
const mult = (a, b) => a * b
const args = [2, 3]

describe('converge', () => {
  it('invokes the function with the converged functions and arguments provided', () => {
    expect(converge(fn, [add, mult], ...args)).toEqual(fn(add(...args), mult(...args)))
  })

  it('is curried', () => {
    expect(converge(fn)([add, mult])(...args)).toEqual(fn(add(...args), mult(...args)))
  })
})
