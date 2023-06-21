const fizzBuzz = function (n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    const isDivisibleByThree = i % 3 === 0;
    const isDivisibleByFive = i % 5 === 0;
    let currString = "";

    if (isDivisibleByThree) {
      currString += "Fizz";
    }

    if (isDivisibleByFive) {
      currString += "Buzz";
    }

    if (currString === "") {
      currString += String(i);
    }

    answer.push(currString);
  }

  return answer;
};

console.log(fizzBuzz(3)); // ["1","2","Fizz"]
console.log(fizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15));
// ["1","2","Fizz","4","Buzz","Fizz",
// "7","8","Fizz","Buzz","11","Fizz",
// "13","14","FizzBuzz"]
