function countingValleys(n, s) {
  var count = 0;
  var valleys = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === 'D') {
      count--;
      if (count === -1) {
        valleys++;
      }
    } else if (s[i] === 'U') {
      count++;
    }
  }
  return valleys;
}
