// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

/**
 * arr	divisor	return
 * [5, 9, 7, 10]	5	[5, 10]
 * arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
 *
 * [2, 36, 1, 3]	1	[1, 2, 3, 36]
 * arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
 *
 * [3,2,6]	10	[-1]
 * 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
 */

function solution(arr, divisor) {
  const answer = arr
    .filter((item) => item % divisor === 0)
    .sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}
