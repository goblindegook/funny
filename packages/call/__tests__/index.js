import call from '..'

describe('call', () => {
  it('invokes the function with the arguments provided', () => {
    const fn = (...args) => args
    const args = [1, 2, 3]
    expect(call(fn, ...args)).toEqual(args)
  })

  it('is curried', () => {
    const fn = (...args) => args
    const args = [1, 2, 3]
    expect(call(fn)(...args)).toEqual(args)
  })
})
