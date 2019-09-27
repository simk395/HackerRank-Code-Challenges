function makeAnagram(a, b) {
  let objA = {};
  let objB = {};
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    objA[a[i]] = ++objA[a[i]] || 1;
  }
  for (let i = 0; i < b.length; i++) {
    objB[b[i]] = ++objB[b[i]] || 1;
  }
  const keysA = Object.keys(objA);

  for (const key of keysA) {
    if (objB[key]) {
      objA[key] = Math.abs(objA[key] - objB[key]);
      count += objA[key];
      delete objB[key];
    } else {
      count += objA[key];
    }
  }

  const keysB = Object.keys(objB);

  for (const key of keysB) {
    count += objB[key];
  }
  return count;
}
