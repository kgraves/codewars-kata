/**
 * Converts a string `title` to title case, while not capitalizing any words in
 * `minorWords`.
 *
 * Ex:
 * Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of * Kings')
 * Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind * in the Willows')
 * Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
 */
function titleCase(title, minorWords) {
  minorWords = minorWords && minorWords.toLowerCase().split(' ') || '';
  if (!title) {
    return '';
  }

  return title.split(' ').map(function(word, i) {
    return (i === 0 || minorWords.indexOf(word.toLowerCase()) === -1) ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word;
  }).join(' ');
}
