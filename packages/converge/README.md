# converge

Simple modules for functional programming, done for fun.

## Usage

```javascript
import converge from 'funny-converge'

const args = (...a) => a
const add = (a, b) => a + b
const mult = (a, b) => a * b

converge(args, [add, mult], 2, 3) // [5, 6]
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
