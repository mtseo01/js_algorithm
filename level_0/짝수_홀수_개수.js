// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

/**
 * [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
 *
 *
 * [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
 */

function solution(num_list) {
  const even = num_list.filter((item) => item % 2 === 0).length;
  const odd = num_list.filter((item) => item % 2 === 1).length;
  let answer = [even, odd];

  return answer;
}
