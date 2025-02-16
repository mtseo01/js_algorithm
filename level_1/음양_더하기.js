// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

/**
 * [4,7,12]	[true,false,true]	9
 * [1,2,3]	[false,false,true]	0
 */

function solution(absolutes, signs) {
  const answer = absolutes.reduce(
    (acc, cur, index) => acc + cur * (signs[index] ? 1 : -1),
    0
  );
  return answer;
}

function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
