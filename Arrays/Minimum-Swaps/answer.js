function minimumSwaps(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      var lowest = arr.length;
      var position = 0;
      for (var j = i; j < arr.length; j++) {
        if (arr[j] !== j + 1 && lowest > arr[j]) {
          lowest = arr[j];
          position = j;
          // console.log("i:", i, "lowest", lowest)
        }
      }
      arr[position] = arr[i];
      arr[i] = lowest;
      count++;
    }
  }
  return count;
}
