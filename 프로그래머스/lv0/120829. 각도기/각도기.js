function solution(angle) {
    let answer =0;
    if(0<angle && angle <90){
       // answer = "예각";
        answer = 1;
      
    } else if(angle === 90){
        // answer = "직각";
        answer = 2;
        
    }else if(90<angle && angle<180){
        // answer = "둔각";
        answer = 3;
       
    } else if(angle === 180){
        // answer = "평각";
        answer = 4;
        
    }
    return answer;
}

