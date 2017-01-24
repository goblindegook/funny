import jsc from 'jsverify'
import and from '..'

describe('and', () => {
  jsc.property('absorption', 'bool', (n) => {
    return and(false, n) === false
  })

  jsc.property('identity', 'bool', (n) => {
    return and(true, n) === n
  })

  jsc.property('idempotence', 'bool', (n) => {
    return and(n, n) === n
  })

  jsc.property('commutativity', 'bool', 'bool', (m, n) => {
    return and(m, n) === and(n, m)
  })

  jsc.property('associativity', 'bool', 'bool', 'bool', (m, n, o) => {
    return and(m, and(n, o)) === and(and(m, n), o)
  })

  jsc.property('curry', 'bool', 'bool', (m, n) => {
    return and(m)(n) === and(m, n)
  })
})
