import jsc from 'jsverify'
import multiply from '..'

describe('multiply', () => {
  jsc.property('absorption', 'number', (n) => {
    return multiply(0, n) === 0
  })

  jsc.property('identity', 'number', (n) => {
    return multiply(1, n) === n
  })

  jsc.property('negation', 'number', (n) => {
    return multiply(-1, n) === -n
  })

  jsc.property('commutativity', 'number', 'number', (m, n) => {
    return multiply(m, n) === multiply(n, m)
  })

  jsc.property('associativity', 'integer', 'integer', 'integer', (m, n, o) => {
    return multiply(m, multiply(n, o)) === multiply(multiply(m, n), o)
  })

  jsc.property('curry', 'number', 'number', (m, n) => {
    return multiply(m)(n) === multiply(m, n)
  })
})
