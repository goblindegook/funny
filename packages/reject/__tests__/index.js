import reject from '..'

describe('reject', () => {
  it('does not change an empty array', () => {
    expect(reject(x => true, [])).toEqual([])
  })

  it('does not change an array if predicate is always false', () => {
    expect(reject(x => false, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('empties an array if predicate is always true', () => {
    expect(reject(x => true, [1, 2, 3])).toEqual([])
  })

  it('changes an array according to predicate result', () => {
    expect(reject(x => x % 2, [1, 2, 3])).toEqual([2])
  })

  it('does not flatten array items', () => {
    expect(reject(x => x.length > 1, [[1], [2], [3, 4]])).toEqual([[1], [2]])
  })

  it('is curried', () => {
    expect(reject(x => x % 2)([1, 2, 3])).toEqual([2])
  })
})
