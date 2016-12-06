import identity from '..'

describe('identity', () => {
  it('allows null', () => {
    const v = null
    expect(identity(v)).toBe(v)
  })

  it('allows booleans', () => {
    const v = true
    expect(identity(v)).toBe(v)
  })

  it('allows numbers', () => {
    const v = 0
    expect(identity(v)).toBe(v)
  })

  it('allows strings', () => {
    const v = 'test'
    expect(identity(v)).toBe(v)
  })

  it('allows arrays', () => {
    const v = [1, 2, 3]
    expect(identity(v)).toBe(v)
  })

  it('allows objects', () => {
    const v = { a: 1, b: 2, c: 3 }
    expect(identity(v)).toBe(v)
  })

  it('allows functions', () => {
    const v = i => i
    expect(identity(v)).toBe(v)
  })
})
