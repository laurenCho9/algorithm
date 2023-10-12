function solution(n) {
  // 사람의 수 n
  // 피자를 한명이라도 먹어야 하면 1판이 추가된다.
  // 피자는 7조각이 한판이다.
  let answer = 0;
  let pizza = 7;
  while (n > 0) {
    n = n - pizza; 
    answer = answer + 1;
  };
  return answer;
}