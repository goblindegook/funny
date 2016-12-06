import and from '..'

describe('and', () => {
  it('true && true = true', () => {
    expect(and(true, true)).toBe(true)
  })

  it('true && false = false', () => {
    expect(and(true, false)).toBe(false)
  })

  it('false && true = false', () => {
    expect(and(false, true)).toBe(false)
  })

  it('false && false = false', () => {
    expect(and(false, false)).toBe(false)
  })
})
