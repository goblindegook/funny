import product from '..'

describe('product', () => {
  it('with an empty array returns 1', () => {
    expect(product([])).toBe(1)
  })

  it('with a single item array returns the item', () => {
    expect(product([1])).toBe(1)
  })

  it('multiplies all the numbers', () => {
    expect(product([1, 2, 3, 4])).toBe(24)
  })
})
