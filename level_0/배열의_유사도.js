// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

/**
 * s1	s2	result
 * ["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
 * ["n", "omg"]	["m", "dot"]	0
 */

function solution(s1, s2) {
  const answer = s1.filter((item) => s2.includes(item)).length;
  return answer;
}

function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
