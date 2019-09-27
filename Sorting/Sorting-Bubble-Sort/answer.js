function countSwaps(a) {
  let count = 0;
  let value = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        value = a[j];
        a[j] = a[j + 1];
        a[j + 1] = value;
        count++;
      }
    }
  }
  console.log(
    'Array is sorted in ' +
      count +
      ' swaps. \nFirst Element: ' +
      a[0] +
      '\nLast Element: ' +
      a.pop(),
  );
}
