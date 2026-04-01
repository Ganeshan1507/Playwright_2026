let inputString = "Keerthi"

let reverseString =""

function isPalindrom(inputString){
for(i=inputString.length-1 ; i>=0 ; i--){

    reverseString = reverseString + inputString.charAt(i)
    
}

console.log("Reversed string value of the given input string is " + reverseString)


if(inputString.length === reverseString.length){

if(inputString === reverseString){
    console.log("String is palindrome")
}else{
    console.log("String is not a palindrome")
}

}else{

    console.log("String is not equal its is not a palindrome")
}

}

isPalindrom(inputString)