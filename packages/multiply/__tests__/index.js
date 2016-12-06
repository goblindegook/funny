import multiply from '..'

describe('multiply', () => {
  it('supports the property of zero', () => {
    expect(multiply(0, 3)).toBe(0)
  })

  it('supports the identity property', () => {
    expect(multiply(1, 3)).toBe(3)
  })

  it('supports the commutative property', () => {
    expect(multiply(2, 3)).toBe(multiply(3, 2))
  })

  it('supports the associative property', () => {
    expect(multiply(multiply(2, 3), 4)).toBe(multiply(2, multiply(3, 4)))
  })

  it('supports negation', () => {
    expect(multiply(-1, 3)).toBe(-3)
  })

  it('is curried', () => {
    expect(multiply(1)(3)).toBe(3)
  })
})
