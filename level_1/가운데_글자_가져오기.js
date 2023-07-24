//  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

/**
 *  s	return
 * "abcde"	"c"
 * "qwer"	"we"
 */

function solution(s) {
  const index = parseInt(s.length / 2);
  if (s.length % 2 === 0) {
    // 짝수
    const answer = s.slice(index - 1, index + 1);
    return answer;
  } else {
    // 홀수
    const answer = s[index];
    return answer;
  }
}

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
