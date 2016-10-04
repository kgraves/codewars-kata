function toWeirdCase(string) {
  var i = 0, curr=0, buffer='';
  var fs = ['toUpperCase','toLowerCase'];

  while (curr < string.length) {
    string[curr] !== ' ' ? (buffer += string[curr][fs[i % 2]]()) && i++ : buffer += ' ';
    curr++;
  }
  return buffer;
}
