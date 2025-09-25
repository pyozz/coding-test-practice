// 문제
// 주어진 배열에서 최솟값 찾기

function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  answer = min;

  return answer;
}

const arr = [5, 11, 7, 6, 3, 2];
console.log(solution(arr));

// 해결방법
/*
  Number.MAX_SAFE_INTEGER 코드로 임의의 큰 정수를 생성한 뒤 배열 내부를 순회하면서 임의의 정수보다 작으면 해당 값을 최소값으로 지정합니다.

  이를 반복하여 최솟값을 구할 수 있습니다.
*/
