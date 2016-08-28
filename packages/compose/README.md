# compose

Simple modules for functional programming, done for fun.

## Usage

```javascript
import compose from 'funny-compose'

const greatestRoundedUp = compose(Math.max, Math.ceil)

greatestRoundedUp(1.2, 2.3, 3.4) // 4
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
