// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

/**
 * [1,2,3,4]	2.5
 * [5,5]	5
 */

function solution(arr) {
  let res = 0;
  arr.map((item) => (res = res + item));
  const answer = res / arr.length;
  return answer;
}
