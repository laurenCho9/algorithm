function solution(n, k) {
    let answer;
    let drink = k;
    if(n >= 10){
        drink = drink - Math.floor(n / 10);
    }
    answer = n * 12000 + drink * 2000
    return answer;
}