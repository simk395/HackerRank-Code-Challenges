function minimumBribes(q) {
  let s = [...q].sort((a, b) => a - b);
  let count = 0;
  let value = 0;
  while (compare(s, q) !== true) {
    for (let i = 0; i < q.length; i++) {
      let difference = q[i] - (i + 1);
      if (difference > 2) return 'Too chaotic';
      if (q[i] > q[i + 1]) {
        value = q[i];
        q[i] = q[i + 1];
        q[i + 1] = value;
        count++;
      }
    }
  }
  return count;
}

function compare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
