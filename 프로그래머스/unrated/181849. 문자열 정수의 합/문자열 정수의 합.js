function solution(num_str) {
    console.log("num_str", num_str);
    const splits = num_str.split("");
    const numType = splits.map(Number);
    const sum = numType.reduce((a, c)=>{
        return a + c
    });
    return sum;
}