/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let calls = 0;

  return function (...args) {
    if (calls > 0) return;
    calls++;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

let fn2 = (a, b, c) => a * b * c;
let onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4)); // 140
console.log(onceFn2(2, 3, 6)); // undefined
console.log(onceFn2(4, 6, 8)); // undefined
