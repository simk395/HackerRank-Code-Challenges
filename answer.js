function substrCount(n, s) {
  //for strings such as "aaaa" or "ssssss"
  if (checkString(s)) return repeatedString(n);
  let substrings = n;
  let array = [];
  let mark = 0;
  let i = 0;
  while (i < s.length) {
    array.push(s[i]);
    // console.log(s[i], s);
    if (array.length % 2 === 0 && checkString(array)) substrings++;
    else if (array.length % 2 !== 0 && array.length >= 3) {
      let midpoint = Math.floor(array.length / 2);
      let copy = [...array];
      copy.splice(midpoint, 1);
      if (checkString(copy)) substrings++;
    }
    i++;
    console.log(s, array, i, mark, s[i]);
    if (i > s.length - 1) {
      array = [];
      mark += 1;
      i = mark;
    }
  }
}

function checkString(string) {
  let letter = string[0];
  for (const a of string) {
    if (letter !== a) return false;
  }
  return true;
}

function repeatedString(num) {
  if (num === 1) return 1;
  return num + repeatedString(num - 1);
}

substrCount(5, 'asasd');
