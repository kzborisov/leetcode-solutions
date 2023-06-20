const maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (let idx = 0; idx < accounts.length; idx++) {
    let currentSum = 0;
    const currentAccount = accounts[idx];

    for (let j = 0; j < currentAccount.length; j++) {
      currentSum += currentAccount[j];
    }

    if (currentSum >= maxWealth) {
      maxWealth = currentSum;
    }
  }

  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
