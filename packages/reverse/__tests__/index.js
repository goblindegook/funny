import reverse from '..'

describe('reverse', () => {
  it('preserves an empty array', () => {
    expect(reverse([])).toEqual([])
  })

  it('preserves a single item array', () => {
    expect(reverse([0])).toEqual([0])
  })

  it('reverses the order of an array', () => {
    expect(reverse([0, 1, 2])).toEqual([2, 1, 0])
  })
})
