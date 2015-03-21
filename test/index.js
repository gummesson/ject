/**
 * Dependencies
 */

var test = require('tape')
var ject = require('../')

/**
 * Tests
 */

test('ject(str, obj)', function(assert) {
  var single = ject('Hello, {{name}}!', {
    name: 'anonymous'
  })

  var multiple = ject('{{greeting}}, {{name}}!', {
    greeting: 'Hello',
    name: 'anonymous'
  })

  assert.equal(single, 'Hello, anonymous!')
  assert.equal(multiple, 'Hello, anonymous!')
  assert.end()
})
