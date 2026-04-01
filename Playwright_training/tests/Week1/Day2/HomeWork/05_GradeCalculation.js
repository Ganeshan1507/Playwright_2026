let score = 91

function calculateGrade(score) {

switch (true) {
    case score >90:
        console.log("Student Score: " + score + ", Grade: A++");
        break; 
    case score >80:
        console.log("Student Score: " + score + ", Grade: A+");
        break;  
    case score >70: 
        console.log("Student Score: " + score + ", Grade: A");
        break;
    case score >60:
        console.log("Student Score: " + score + ", Grade: B++");
        break;
    case score >50:
        console.log("Student Score: " + score + ", Grade: B+");
        break;
     case score >40: 
        console.log("Student Score: " + score + ", Grade: B");
        break;
     case score >35: 
        console.log("Student Score: " + score + ", Grade: C");
        break;        
    default:
        console.log("Student Score: " + score + ", Grade: Failed");

}


}

calculateGrade(score)



