import or from '..'

describe('or', () => {
  it('true && true = true', () => {
    expect(or(true, true)).toBe(true)
  })

  it('true && false = true', () => {
    expect(or(true, false)).toBe(true)
  })

  it('false && true = true', () => {
    expect(or(false, true)).toBe(true)
  })

  it('false && false = false', () => {
    expect(or(false, false)).toBe(false)
  })
})
