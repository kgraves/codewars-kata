/**
 * Tries to sell tickets to each person in line, as well as make change from the
 * money collected. Returns 'YES' if can make change for all customers,
 * otherwise, returns 'NO'.
 *
 * Example:
 *    [25, 25, 50] -> YES
 *    [25, 100] -> NO
 */
function tickets(peopleInLine) {
  if (peopleInLine.length === 0) {
    return 'NO';
  }

  var canMakeChange = true;
  var cost = 25;
  var monies = {
    25: 0,
    50: 0,
    100: 0
  };
  
  peopleInLine.forEach(function(m) {
    if (m === 50) {
      if (monies[25] >= 1) {
        monies[25]--;
      } else {
        canMakeChange = false;
      }
    } else if (m === 100) {
      if (monies[25] >= 1 && monies[50] >= 1) {
        monies[25] -= 3;
      } else if (monies[25] >= 3) {
        monies[25]--;
        monies[50]--;
      } else {
        canMakeChange = false;
      }
    }

    monies[m]++;
  });

  return canMakeChange ? 'YES' : 'NO';
}
