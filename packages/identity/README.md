# identity

Simple modules for functional programming, done for fun.

## Usage

```javascript
import identity from 'funny-identity'

identity(null)      // null
identity(true)      // true
identity(0)         // 0
identity('test')    // 'test'
identity([1, 2, 3]) // [1, 2, 3]
identity({ a: 1 })  // { a: 1 }
identity(i => i)    // i => i
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
