import modulo from '..'

describe('modulo', () => {
  it('of 2 and 2 is 0', () => {
    expect(modulo(2, 2)).toBe(0)
  })

  it('of 3 and 2 is 1', () => {
    expect(modulo(3, 2)).toBe(1)
  })

  it('is positive', () => {
    expect(modulo(-4, 3) > 0).toBe(true)
  })

  it('of 3 and 0 is not a number', () => {
    expect(isNaN(modulo(3, 0))).toBe(true)
  })

  it('of non-integer numbers is not a number', () => {
    expect(isNaN(modulo(3.5, 2))).toBe(true)
  })

  it('is curried', () => {
    expect(modulo(3)(2)).toBe(1)
  })
})
