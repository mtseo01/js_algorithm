// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

/**
 * num1이 2이고 num2가 3이므로 다릅니다. 따라서 -1을 return합니다.
 *
 * num1이 11이고 num2가 11이므로 같습니다. 따라서 1을 return합니다.
 *
 */

function solution(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else return -1;
}
