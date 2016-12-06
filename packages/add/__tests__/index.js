import add from '..'

describe('add', () => {
  it('supports the identity property', () => {
    expect(add(0, 3)).toBe(3)
  })

  it('supports the commutative property', () => {
    expect(add(2, 3)).toBe(add(3, 2))
  })

  it('supports the associative property', () => {
    expect(add(add(2, 3), 4)).toBe(add(2, add(3, 4)))
  })

  it('is curried', () => {
    expect(add(1)(2)).toBe(3)
  })
})
