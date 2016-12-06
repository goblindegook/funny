import reject from '..'

describe('reject', () => {
  it('preserves an empty array', () => {
    expect(reject(x => true, [])).toEqual([])
  })

  it('preserves an array if predicate is not satisfied', () => {
    expect(reject(x => false, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('empties an array if predicate is satisfied', () => {
    expect(reject(x => true, [1, 2, 3])).toEqual([])
  })

  it('changes an array according to predicate result', () => {
    expect(reject(x => x % 2, [1, 2, 3])).toEqual([2])
  })

  it('preserves nested array items', () => {
    expect(reject(x => x.length > 1, [[1], [2], [3, 4]])).toEqual([[1], [2]])
  })

  it('is curried', () => {
    expect(reject(x => x % 2)([1, 2, 3])).toEqual([2])
  })
})
