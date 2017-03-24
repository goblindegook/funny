import jsc from 'jsverify'
import append from '..'

describe('append', () => {
  jsc.property('combined length', 'unit', 'array', (u, a) => {
    const r = append(u, a)
    return r.length === a.length + 1
  })

  jsc.property('original array at the start', 'unit', 'array', (u, a) => {
    const r = append(u, a)
    return jsc.utils.isEqual(r.slice(0, r.length - 1), a)
  })

  jsc.property('appended element at the end', 'unit', 'array', (u, a) => {
    const r = append(u, a)
    return jsc.utils.isEqual(r[r.length - 1], u)
  })

  jsc.property('curry', 'unit', 'array', (u, a) => {
    return jsc.utils.isEqual(append(u)(a), append(u, a))
  })
})
