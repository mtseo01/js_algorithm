// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

/**
 * n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
 *
 * n이 4이므로 2 + 4 = 6을 return 합니다.
 */

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }

  return answer;
}
