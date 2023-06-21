//문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

/**
 * "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다. 여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.
 *
 * "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다. 여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.
 */

function solution(myString, pat) {
  const answer = myString
    .split('')
    .map((item) => {
      return item === 'A' ? 'B' : 'A';
    })
    .join('')
    .includes(pat);

  if (answer === true) {
    return 1;
  } else return 0;
}

solution('ABBBA', 'BAB');
