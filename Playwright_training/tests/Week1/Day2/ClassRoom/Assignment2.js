// /declare the variable for string
// //declare variable as count =0
// //for -->to get into the character start from index range to the end of the string
// //if -->find the match 
// //increment the count
// //print the count

// Check how many 'E' in a given string

let inputValue = "Test leaf"

let outputCount =0

function occuranceOfE(){

for(i=0 ; i<inputValue.length; i++){

    if(inputValue.charAt(i)=="e"){
        outputCount++
    }


}
console.log("The occurance of E in the Input string is " + outputCount + " times")
}

occuranceOfE(inputValue)

