/**
 * Replace template tags in `str` with property values in `obj`.
 *
 * @param  {string} str
 * @param  {object} obj
 * @return {string}
 *
 * @api public
 */

function ject(str, obj) {
  var keys = str.match(/({{.+?}})/g) || []
  keys.forEach(function(v, i) {
    var key = keys[i].replace(/{{(.+)}}/, '$1')
    var val = obj[key]
    if (val) str = str.replace(keys[i], val)
  })
  return str
}

/**
 * Exports
 */

module.exports = ject
