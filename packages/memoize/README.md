# memoize

Simple modules for functional programming, done for fun.

## Usage

```javascript
import memoize from 'funny-memoize'

const memoizedExpensiveFn = memoize(expensiveFn, 2)

memoizedExpensiveFn(1) // Stores result in cache.
memoizedExpensiveFn(1) // Retrieves stored result.
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
