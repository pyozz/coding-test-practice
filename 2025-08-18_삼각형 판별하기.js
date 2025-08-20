// 문제
// 주어진 세 개의 길이로 삼각형을 만들 수 있는지

function solution(a, b, c) {
  let answer = "YES";
  let max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";

  return answer;
}

console.log(solution(13, 33, 17));

// 해결방법
/* 
삼각형을 만드는 조건은 제일 긴 변의 길이가 나머지 두 변의 길이의 합보다 작아야합니다.
매개변수 중 가장 큰 값을 구한 뒤 전체 합에서 가장 큰 값을 빼면 나머지 두 변의 길이의 합이 구해지는데
이를 가장 큰 값과 비교하여 삼각형 판별조건을 구할 수 있습니다.
*/
