const middleNode = function (head) {
  let end = head;
  let middle = head;

  while (end && end.next) {
    end = end.next.next;
    middle = middle.next;
  }
  return middle;
};

console.log(middleNode([1, 2, 3, 4, 5])); // [3,4,5]
console.log(middleNode([1, 2, 3, 4, 5, 6])); // [4,5,6]
