import zip from '..'

describe('zip', () => {
  it('returns empty array', () => {
    const a = []
    const b = []
    expect(zip(a, b)).toEqual([])
  })

  it('combines elements', () => {
    const a = [1, 2, 3]
    const b = ['a', 'b', 'c']
    expect(zip(a, b)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']])
  })

  it('creates an array only as long as the shortest input', () => {
    const a = [1, 2, 3]
    const b = ['a']
    expect(zip(a, b)).toEqual([[1, 'a']])
  })

  it('is curried', () => {
    const a = [1, 2, 3]
    const b = ['a', 'b', 'c']
    expect(zip(a)(b)).toEqual([[1, 'a'], [2, 'b'], [3, 'c']])
  })
})
