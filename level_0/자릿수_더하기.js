// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

/**
 * n	result
 * 1234	10
 * 930211	16
 */

function solution(n) {
  const temp = n.toString().split('');
  console.log(temp);

  let res = 0;
  temp.map((item) => (res += Number(item)));
  return res;
}
