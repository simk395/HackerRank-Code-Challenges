//original inefficient way
// function arrayManipulation(n, queries) {
//   //creates an empty array of 0s
//   let array = new Array(n);
//   array.fill(0);
//   let greatestValue = 0;
//   let i = 0;
//   let j = queries[i][0];

//   while (queries[i]) {
//     if (j > queries[i][1]) {
//       i++;
//       if (queries[i]) j = queries[i][0];
//       else break;
//     }
//     array[j - 1] += queries[i][2];
//     if (array[j - 1] > greatestValue) greatestValue = array[j - 1];
//     j++;
//   }

//   return greatestValue;
// }

function arrayManipulation(n, queries) {
  let array = new Array(n);
  array.fill(0);

  for (let query of queries) {
    let a = query[0] - 1;
    let b = query[1];
    let k = query[2];
    array[a] += k;
    array[b] -= k;
  }

  let greatestValue = 0;
  let currentValue = 0;
  for (let i of array) {
    currentValue += i;
    if (currentValue > greatestValue) greatestValue = currentValue;
  }

  return greatestValue;
}
arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]);
