// anagrams

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let arr1 = [...str1];
  let arr2 = [...str2];

  for (const val of arr1) {
    const correctIndex = arr2.indexOf(val);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(validAnagrams('aab', 'adb'));
console.log(validAnagrams('aab', 'aba'));
console.log(validAnagrams('aab', 'affe'));
console.log(validAnagrams('aeefff', 'affefe'));
