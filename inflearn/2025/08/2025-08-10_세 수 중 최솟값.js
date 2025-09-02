// 문제
// 세 수 중 가장 작은 값 출력

function solution(a, b, c) {
  let answer;

  if (a > b) {
    answer = b;
  }

  if (answer > c) {
    answer = c;
  }

  return answer;
}

console.log(solution(9, 7, 1));

// 해결방법
// 두 개의 값을 먼저 비교하여 나온 작은 값을 나머지 값 하나와 비교하면 세 수 중 가장 작은 값을 구할 수 있습니다.
