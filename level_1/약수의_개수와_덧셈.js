// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

/**
 * 수	약수	약수의 개수
 * 13	1, 13	2
 * 14	1, 2, 7, 14	4
 * 15	1, 3, 5, 15	4
 * 16	1, 2, 4, 8, 16	5
 * 17	1, 17	2
 */

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let p = 1;
    for (j = 2; j <= i; j++) {
      if (i % j == 0) p++;
    }

    if (p % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}
