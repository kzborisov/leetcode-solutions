/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  const result = new Array();

  for (let idx = 0; idx < arr.length; idx++) {
    if (!fn(arr[idx], idx)) {
      continue;
    }
    result.push(arr[idx]);
  }
  return result;
  // return arr.filter((el, idx) => fn(el, idx));
};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
); // [20, 30]

console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
); // [1]

console.log(
  filter([-2, -1, 0, 1, 2], function plusOne(n) {
    return n + 1;
  })
); // [-2,0,1,2]
