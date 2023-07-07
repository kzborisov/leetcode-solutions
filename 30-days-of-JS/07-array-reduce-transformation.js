/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  for (let idx = 0; idx < nums.length; idx++) {
    init = fn(init, nums[idx]);
  }

  return init;
};

res1 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr;
  },
  0
);
res2 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
);
res3 = reduce(
  [],
  function sum(accum, curr) {
    return 0;
  },
  25
);
console.log(res1); // 10
console.log(res2); // 130
console.log(res3); // 25
