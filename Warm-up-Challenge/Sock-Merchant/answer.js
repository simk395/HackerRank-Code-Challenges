function sockMerchant(n, ar) {
  var pairs = {};
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (!pairs[ar[i]]) {
      pairs[ar[i]] = 1;
    } else {
      pairs[ar[i]]++;
    }
  }
  var keys = Object.keys(pairs);
  for (var i = 0; i < keys.length; i++) {
    count += Math.floor(pairs[keys[i]] / 2);
  }
  return count;
}
