import filter from '..'

describe('filter', () => {
  it('preserves an empty array', () => {
    expect(filter(x => true, [])).toEqual([])
  })

  it('preserves an array if predicate is satisfied', () => {
    expect(filter(x => true, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('empties an array if predicate is not satisfied', () => {
    expect(filter(x => false, [1, 2, 3])).toEqual([])
  })

  it('changes an array according to predicate result', () => {
    expect(filter(x => x % 2, [1, 2, 3])).toEqual([1, 3])
  })

  it('preserves nested array items', () => {
    expect(filter(x => x.length === 1, [[1], [2], [3, 4]])).toEqual([[1], [2]])
  })

  it('is curried', () => {
    expect(filter(x => x % 2)([1, 2, 3])).toEqual([1, 3])
  })
})
