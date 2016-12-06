import subtract from '..'

describe('subtract', () => {
  it('returns zero on identical arguments', () => {
    expect(subtract(3, 3)).toBe(0)
  })

  it('returns negative results', () => {
    expect(subtract(1, 3)).toBe(-2)
  })

  it('supports negation', () => {
    expect(subtract(1, -3)).toBe(4)
  })

  it('is curried', () => {
    expect(subtract(3)(2)).toBe(1)
  })
})
