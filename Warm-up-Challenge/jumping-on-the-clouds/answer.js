function jumpingOnClouds(c) {
  var count = 0;
  for (var i = 0; i < c.length; ) {
    if (c[i + 2] === 0) {
      count++;
      i += 2;
    } else if (c[i + 1] === 0) {
      count++;
      i++;
    } else {
      break;
    }
  }
  return count;

  // when I read this problem i thought it was the index of the cloud + 2
  // is the farthest jump possible
  //
  // for (var i = 0; i < c.length; i){
  //     console.log(i)
  //     for (var j = i; j >= 0; j--){
  //         if (c[j + 2] === 0) {
  //             count++
  //             i += j + 2
  //             break;
  //         } else if (c[j + 1] === 0) {
  //             count++
  //             i += j + 1
  //             break;
  //         }
  //     }
  // }
}
