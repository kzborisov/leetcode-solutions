/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    while (functions.length > 0) {
      const fn = functions.pop();
      x = fn(x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
const fn3 = compose([]);
console.log(fn(4)); // 65
console.log(fn2(1)); // 1000
console.log(fn3(42)); // 42
