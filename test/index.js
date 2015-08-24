/**
 * Dependencies
 */

var test = require('tape')
var ject = require('../')

/**
 * Tests
 */

test('ject(str, obj)', function(assert) {
  var none = ject('Hello there!', {
    name: 'anonymous'
  })

  var single = ject('Hello, {{name}}!', {
    name: 'anonymous'
  })

  var multiple = ject('{{greeting}}, {{name}}!', {
    greeting: 'Hello',
    name: 'anonymous'
  })

  assert.equal(none, 'Hello there!')
  assert.equal(single, 'Hello, anonymous!')
  assert.equal(multiple, 'Hello, anonymous!')
  assert.end()
})
