import flip from '..'

describe('flip', () => {
  it('returns a function', () => {
    const fn = (a, b) => [a, b]
    expect(typeof flip(fn)).toBe('function')
  })

  it('flips the first two arguments', () => {
    const fn = (a, b) => [a, b]
    const flippedFn = flip(fn)
    expect(flippedFn(1, 2)).toEqual([2, 1])
  })

  it('flips arguments in unary functions', () => {
    const fn = a => [a, 'b']
    const flippedFn = flip(fn)
    expect(flippedFn(1, 2)).toEqual([2, 'b'])
  })
})
