import map from '..'

describe('map', () => {
  it('preserves an empty array', () => {
    expect(map(i => i, [])).toEqual([])
  })

  it('preserves an array if the iterated function is the identity', () => {
    expect(map(i => i, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('changes an array if the iterated function changes its values', () => {
    expect(map(i => 2 * i, [1, 2, 3])).toEqual([2, 4, 6])
  })

  it('preserves nested array items', () => {
    expect(map(i => [i, i], [1, 2, 3])).toEqual([[1, 1], [2, 2], [3, 3]])
  })

  it('is curried', () => {
    expect(map(i => 2 * i)([1, 2, 3])).toEqual([2, 4, 6])
  })
})
