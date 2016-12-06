import reduce from '..'

describe('reduce', () => {
  it('applies a combine function with the correct items', () => {
    const expected = '1234'
    const actual = reduce((acc, item) => `${acc}${item}`, [1, 2, 3, 4])

    expect(actual).toBe(expected)
  })

  it('applies a combine function with the correct items', () => {
    const expected = '1234'
    const actual = reduce((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

    expect(actual).toBe(expected)
  })

  it('passes the combine function the collection index', () => {
    const expected = '1123'
    const actual = reduce((acc, item, index) => `${acc}${index}`, [1, 2, 3, 4])

    expect(actual).toEqual(expected)
  })

  it('is curried', () => {
    const expected = '1234'
    const actual = reduce((acc, item) => `${acc}${item}`)([1, 2, 3, 4])

    expect(actual).toBe(expected)
  })
})
