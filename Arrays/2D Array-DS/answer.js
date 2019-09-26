function hourglassSum(arr) {
  var sums = [];
  // console.log(arr[5+2])
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i + 2] !== undefined && arr[i][j + 2] !== undefined) {
        var row1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
        var row2 = arr[i + 1][j + 1];
        var row3 = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
        var sum = row1 + row2 + row3;
        sums.push(sum);
      }
    }
  }
  var compare = sums[0];
  for (var i = 0; i < sums.length; i++) {
    if (sums[i] > compare) {
      compare = sums[i];
    }
  }
  return compare;
}
