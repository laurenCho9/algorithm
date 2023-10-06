function solution(sides) {
    const arr = sides.sort((a, b) => b - a);
    const arrMax = arr[0];
    const arrMid = arr[1];
    const arrMin = arr[2];
    
    // console.log(arrMin);
    
    let answer;
    if(arrMax >= (arrMid + arrMin)) { answer = 2;} 
    else if
    (arrMax < (arrMid + arrMin)) { answer = 1;}
    return answer;
}