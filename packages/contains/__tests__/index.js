import contains from '..'

describe('contains', () => {
  it('is false when element does not exist in list', () => {
    expect(contains(4, [1, 2, 3])).toBe(false)
  })

  it('is true when element exists in list', () => {
    expect(contains(1, [1, 2, 3])).toBe(true)
  })

  xit('is true when object exists in list', () => {
    expect(contains([1], [[1], [2], [3]])).toBe(true)
  })
})
