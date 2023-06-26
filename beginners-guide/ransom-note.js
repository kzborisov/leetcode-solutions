/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function (ransomNote, magazine) {
  const hashMap = new Map();

  for (const letter of magazine) {
    hashMap[letter] = ++hashMap[letter] || 1;
  }

  for (const letter of ransomNote) {
    if (!hashMap[letter] || hashMap[letter] === 0) {
      return false;
    }

    hashMap[letter]--;
  }

  return true;
};

console.log(canConstruct("ab", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
