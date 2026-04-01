let browserName = "chrome123"
let testType = "Smoke22"

function lanuchBrowser(browser){

if(browserName === "chrome"){
    console.log("The browser is Chrome")
}else if(browserName === "firefox"){
    console.log("The browser is Firefox")
}   else if(browserName === "edge"){
    console.log("The browser is Edge")
}else if(browserName === "safari"){
    console.log("The browser is Safari")
}   else{
    console.log("The browser is not supported")
}
}

function runTest(testType){
switch(testType.trim()){
    case "Smoke":
        console.log("The test type is Smoke")
        break
    case "Regression":
        console.log("The test type is Regression")
        break
        case "Sanity":
        console.log("The test type is Sanity")
        break
    default:
        console.log("The test type is not supported")
}   

}

lanuchBrowser(browserName)
runTest(testType)