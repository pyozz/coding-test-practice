// 문제
// 1부터 자연수인 N까지의 합

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(100));

// 해결 방법
/*
  반복문 for문의 조건을 1부터 N까지로 설정하여 변수에 누적합을 구합니다. 
*/
