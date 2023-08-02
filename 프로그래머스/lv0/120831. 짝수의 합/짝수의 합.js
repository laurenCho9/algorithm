function solution(n) {
    // console.log(typeof n);
    let num=0;
    for(let i=1; i<=n; i++) {
        if(i %2 ===0){    
            // 합계 변수에 i를 누적시킨다.
            // console.log("num = num + i", num = num + i);
            // num+=i;로도 쓸 수 있다.
            // console.log("i++", i++);
            num = num + i;
            i++;
        }
    }
    return num;
}