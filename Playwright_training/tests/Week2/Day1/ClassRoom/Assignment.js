//two arrays
//comapre the two arrays
//fetch the common data


let numb = [1, 2, 3, 4, 5, 6, 10, 11, 12, 13]

let numb1 = [5, 6, 7, 8, 2, 3, 0, 9, 14]

for (let i = 0; i < numb.length; i++) {

for (let j = 0; j < numb1.length; j++) {

if(numb[i]===numb1[j]) {

console.log("The common number is: " + numb1[j])

}
}

}

// numb.forEach(numb => {

//     numb1.forEach(numb1 => {

//         if (numb === numb1) {       
//             console.log("The common number is: " + numb1)
//         }   

//     })
    
// });