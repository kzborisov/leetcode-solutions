/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
  return arr.map((el, idx) => fn(el, idx));
};

const arr = [1, 2, 3];
const fn = function plusone(n) {
  return n + 1;
};
const result = map(arr, fn);
console.log(result); // [2,3,4]

const arr2 = [1, 2, 3];
const fn2 = function plusI(n, i) {
  return n + i;
};

const newArray2 = map(arr2, fn2);
console.log(newArray2); // [1,3,5]

const arr3 = [10, 20, 30];
const fn3 = function constant() {
  return 42;
};

const newArray3 = map(arr3, fn3);
console.log(newArray3); // [42, 42, 42]
