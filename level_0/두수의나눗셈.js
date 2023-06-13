// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

/**
 * num1이 3, num2가 2이므로 3 / 2 = 1.5에 1,000을 곱하면 1500이 됩니다.
 *
 * num1이 7, num2가 3이므로 7 / 3 = 2.33333...에 1,000을 곱하면 2333.3333.... 이 되며, 정수 부분은 2333입니다.
 *
 * num1이 1, num2가 16이므로 1 / 16 = 0.0625에 1,000을 곱하면 62.5가 되며, 정수 부분은 62입니다.
 */

function solution(num1, num2) {
  const answer = (num1 / num2) * 1000;
  return Math.floor(answer);
}

// 더 괜찮아 보이는 풀이 (음수인 상황도 고려하면 trunc를 사용하는 것이 좋아 보인다.)
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}
