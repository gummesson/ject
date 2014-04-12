/* Modules */

var test = require('tape');
var ject = require('../');

/* Tests */

test('ject()', function(assert) {
  var str = ject('Hello, {{name}}!', {
    name: 'anonymous'
  });
  assert.equal(str, 'Hello, anonymous!');
  assert.end();
});

test('ject()', function(assert) {
  var str = ject('{{greeting}}, {{name}}!', {
    greeting: 'Hello',
    name: 'anonymous'
  });
  assert.equal(str, 'Hello, anonymous!');
  assert.end();
});
