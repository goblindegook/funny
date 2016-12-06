import mean from '..'

describe('mean', () => {
  it('is not a number when the list is empty', () => {
    expect(isNaN(mean([]))).toBe(true)
  })

  it('is the item value when the list has a single numerical item', () => {
    expect(mean([1])).toBe(1)
  })

  it('computes the mean of a list of numbers', () => {
    expect(mean([2, 4])).toBe(3)
  })

  it('computes the mean of a list containing negative numbers', () => {
    expect(mean([-2, 2])).toBe(0)
  })
})
