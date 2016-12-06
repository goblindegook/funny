import repeat from '..'

describe('repeat', () => {
  it('returns an empty array on 0', () => {
    expect(repeat('fun', 0)).toEqual([])
  })

  it('returns a single item array on 1', () => {
    expect(repeat('fun', 1)).toEqual(['fun'])
  })

  it('returns arrays with n items', () => {
    expect(repeat('fun', 2)).toEqual(['fun', 'fun'])
  })

  it('returns arrays with n objects', () => {
    const obj = { fun: 'fun' }
    expect(repeat(obj, 2)).toEqual([obj, obj])
  })

  it('does not flatten list items', () => {
    const list = [1]
    expect(repeat(list, 2)).toEqual([list, list])
  })

  it('is curried', () => {
    expect(repeat('fun')(2)).toEqual(['fun', 'fun'])
  })
})
