function solution(array) {
  array.sort((a, b) => a - b);
  const indexNum = parseInt(array.length / 2 );
    const answer = array[indexNum];
  return answer;
}