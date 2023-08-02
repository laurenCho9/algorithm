function solution(n) {
    const answer = [];
    let num = 0;
    for (let i=1; i<=n; i++){
        if(i % 2 !== 0){
            // console.log("i++", i++);
            num = i++;
            answer.push(num);
            
            
        }
    }
    return answer;
}