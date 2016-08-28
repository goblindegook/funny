# comparator

Simple modules for functional programming, done for fun.

## Usage

```javascript
import comparator from 'funny-comparator'

const compareLessThan = comparator((a, b) => a < b)

compareLessThan(1, 2) // 1
compareLessThan(2, 1) // -1
compareLessThan(1, 1) // 0
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
