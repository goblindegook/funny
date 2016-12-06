import divide from '..'

describe('divide', () => {
  it('supports the property of zero', () => {
    expect(divide(0, 2)).toBe(0)
  })

  it('supports floating point results', () => {
    expect(divide(1, 2)).toBe(0.5)
  })

  it('supports negation', () => {
    expect(divide(-1, 2)).toBe(-0.5)
  })

  it('is curried', () => {
    expect(divide(1)(2)).toBe(0.5)
  })
})
