function rotLeft(a, d) {
  for (var i = 0; i < d; i++) {
    var first = a.shift(0);
    a.push(first);
  }
  return a;
}
