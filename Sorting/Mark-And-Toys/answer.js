function maximumToys(prices, k) {
  //sort prices out cheapest to most expensive
  // subtract from k until no more money
  let count = 0;
  let i = 0;
  const sortedPrices = prices.sort((a, b) => a - b);
  while (k - sortedPrices[i] >= 0) {
    k = k - sortedPrices[i];
    i++;
    count++;
  }
  return count;
}
