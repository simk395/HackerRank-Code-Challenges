function repeatedString(s, n) {
  //first count the amount of a's
  //then divide n by the length of the string
  //floor the division and that is the amount of a's
  //use mod to get incomplete strings and count

  //base case
  if (s === 'a') return n;

  let value = countLetters(s);
  let repeats = Math.floor(n / s.length);
  let currentValue = repeats * value;
  let remainder = n % s.length;
  let slicedString = s.slice(0, remainder);
  let remainderValue = countLetters(slicedString);
  return currentValue + remainderValue;
}

function countLetters(str) {
  //counts amount of "a"s
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') count++;
  }
  return count;
}
