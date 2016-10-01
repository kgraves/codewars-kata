/**
 * Expands the string `s` into parts, delimited by hyphens, with each letter
 * repeated `i` times, where `i` is the index at which the letter appears in the
 * original string.
 *
 * Example:
 *    'abcd' -> 'A-Bb-Ccc-Dddd'
 */
function accum(s) {
  return s.split('').map(function(l, index) {
    l = l.toLowerCase();

    var buffer = '';
    for (var i=0; i<index+1; i+=1) {
      buffer += i === 0 ? l.toUpperCase() : l;
    }
    return buffer;
  }).join('-');
}
