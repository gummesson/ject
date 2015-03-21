# Ject

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

A tiny string interpolation utility. It supports Internet Explorer 9+ and works
with [Browserify](http://browserify.org/) or as a standalone library.

## Installation

### npm

~~~ text
npm install ject --save
~~~

### Bower

~~~ text
bower install ject --save
~~~

## Usage

~~~ javascript
var str = ject('{{greeting}}, {{name}}!', {
  greeting: 'Hello',
  name: 'anonymous'
})
// => "Hello, anonymous!"
~~~

## License

The MIT License (MIT)

Copyright (c) 2014 Ellen Gummesson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[npm-img]: https://img.shields.io/npm/v/ject.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ject
[license-img]: http://img.shields.io/npm/l/ject.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/ject.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/ject
