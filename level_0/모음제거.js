// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

/**
 * "bus"에서 모음 u를 제거한 "bs"를 return합니다.
 *
 * "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.
 */

function solution(my_string) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  const answer = [...my_string].filter((item) => !arr.includes(item)).join('');
  return answer;
}

// 괜찮은 풀이
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
