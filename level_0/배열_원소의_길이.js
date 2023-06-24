// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

/**
 * ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
 *
 * ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
 */

function solution(strlist) {
  const answer = strlist.map((item) => {
    return item.length;
  });
  return answer;
}
