# funny

Simple modules for functional programming, done for fun.

## Guidelines

* Use ECMAScript 2015+. I have no plan to support ECMAScript 5 or older, so Bring Your Own Transpiler.
* Test-drive all development using [AVA](https://ava.li/).
* Modules must be as minimal and have no external dependencies.
* The API must expose no more than necessary.
* The API should accept array arguments last to facilitate composition of curried functions.
* Functions must never mutate their inputs.
* Assume reasonable defaults and avoid configuration objects.
* Prefer immutability and pure functions over performance.
* Modules expose curried versions of their functions whenever appropriate.

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
