import memoize from '..'

describe('memoize', () => {
  it('creates memoized functions that return identical results', () => {
    const memoizedCeil = memoize(Math.ceil)
    expect(memoizedCeil(0.1)).toBe(Math.ceil(1))
  })

  it('creates memoized functions that cache results', () => {
    const memoizedCeil = memoize(Math.ceil)
    expect(memoizedCeil(0.21)).toBe(1)
    expect(memoizedCeil(0.21)).toBe(1)
  })

  xit('creates memoized functions that cache results from function arguments', () => {
    const memoizedFn = memoize((fn, arg) => fn(arg))
    expect(memoizedFn(Math.ceil, 0.3)).toBe(1)
    expect(memoizedFn(Math.floor, 0.3)).toBe(0)
  })
})
