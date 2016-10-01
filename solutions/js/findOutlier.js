function findOutlier(integers) {
  var counts = [0, 0]; // even == 0, odd == 1
  counts[integers[0] % 2]++
  counts[integers[1] % 2]++
  counts[integers[2] % 2]++
  var isEven = counts[0] >= 2;

  return integers.reduce(function(prev, curr) {
    return Math.abs(curr % 2) == isEven ? curr : prev;
  });
}

console.log(findOutlier([2,6,8,10,2,2,2,2,-11,2,2,2,2,2,2,4,4,4,2,4,2,4]));
