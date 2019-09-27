function alternatingCharacters(s) {
  let i = 0;
  let j = 1;
  let count = 0;

  while (j < s.length) {
    if (s[i] === 'A' && s[j] === 'A') count++;
    else if (s[i] === 'B' && s[j] === 'B') count++;
    i++;
    j++;
  }
  return count;
}
