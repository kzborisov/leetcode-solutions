const numberOfSteps = function (num) {
  let result = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }

    result++;
  }

  return result;
};

console.log(numberOfSteps(14)); // 6
console.log(numberOfSteps(8)); // 4
console.log(numberOfSteps(123)); // 12
