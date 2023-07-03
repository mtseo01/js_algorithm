// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

/**
 * "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
 * "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
 */

function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}
