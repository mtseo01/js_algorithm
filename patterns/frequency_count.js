/**
 * 1. 두 개의 배열을 허용하는 same 이라는 함수를 작성한다.
 * 2. 첫 번째 배열의 모든 값이 두번째 배열에 순서와 무관하게 제곱되어 포함될 경우 true 를 반환한다.
 * 3. 단, 빈도는 동일해야 한다.
 *
 */

// Nested loop가 사용 / 시간 복잡도가 O(n2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 4, 3], [4, 1, 9, 16])); // true
console.log(same([1, 2, 4], [1, 1, 9, 2])); // false
