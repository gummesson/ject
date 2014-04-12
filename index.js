/* ject */

function ject(str, obj) {
  var keys = str.match(/({{.+?}})/g);
  keys.forEach(function(v, i) {
    var key = keys[i].replace(/{{(.+)}}/, '$1');
    if (obj[key]) { str = str.replace(keys[i], obj[key]); }
  });
  return str;
}

/* Exports */

module.exports = ject;
