import length from '..'
import range from 'funny-range'

describe('length', () => {
  it('returns 0 for an empty list', () => {
    expect(length([])).toBe(0)
  })

  it('returns 1 for lists with one element', () => {
    expect(length([1])).toBe(1)
  })

  it('returns N for lists with N elements', () => {
    const n = Math.ceil(Math.random() * 1000)
    expect(length(range(1, n))).toBe(n)
  })
})
