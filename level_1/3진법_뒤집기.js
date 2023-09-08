// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7

function solution(n) {
  const answer = parseInt(n.toString(3).split('').reverse().join(''), 3);
  return answer;
}

/**
 * 10진수를 -> N진수로 변환법
 * decimal.toString(N);
 *
 * N진수를 -> 10진수
 * parseInt(number, N);
 */
