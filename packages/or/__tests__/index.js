import jsc from 'jsverify'
import or from '..'

describe('or', () => {
  jsc.property('absorption', 'bool', (n) => {
    return or(true, n) === true
  })

  jsc.property('identity', 'bool', (n) => {
    return or(false, n) === n
  })

  jsc.property('commutativity', 'bool', 'bool', (m, n) => {
    return or(m, n) === or(n, m)
  })

  jsc.property('associativity', 'bool', 'bool', 'bool', (m, n, o) => {
    return or(m, or(n, o)) === or(or(m, n), o)
  })

  jsc.property('curry', 'bool', 'bool', (m, n) => {
    return or(m)(n) === or(m, n)
  })
})
