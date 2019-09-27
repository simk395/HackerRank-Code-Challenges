function substrCount(n, s) {
  let count = n;
  let slice = 2;
  let start = 0;
  let end = slice;
  while (slice <= n) {
    let string = s.slice(start, end);
    let midpoint = Math.floor(string.length / 2);
    if (string.length % 2 === 0) {
      let left = string.slice(0, midpoint);
      let right = string.slice(midpoint);
      check(left, right);
      if (check(left, right)) count++;
    } else {
      let midLetter = string[midpoint];
      let left = string.slice(0, midpoint);
      let right = string.slice(midpoint + 1);
      if (check(left, right)) count++;
    }
    start++, end++;
    //    console.log(string, count)
    if (end > n) {
      start = 0;
      slice += 1;
      end = slice;
    }
  }

  return count;
}

function check(arr1, arr2) {
  let letter = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== letter || arr2[i] !== letter) return false;
  }
  return true;
}
