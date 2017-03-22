import jsc from 'jsverify'
import append from '..'

describe('append', () => {
  jsc.property('insertion', 'unit', 'array', (u, a) => {
    return jsc.utils.isEqual(append(u, a), [...a, u])
  })

  jsc.property('currying', 'unit', 'array', (u, a) => {
    return jsc.utils.isEqual(append(u)(a), append(u, a))
  })
})
