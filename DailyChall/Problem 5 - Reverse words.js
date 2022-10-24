Difficulty: Medium
// This problem was asked by Google.
// Given a string of words delimited by spaces,
// reverse the words in string. For example, given "hello world here",
// return "here world hello"


function reverseString(string){
    let array = string.split(" ")
    let reversedArray = []

    for(let i=0; i<array.length; i++){
        reversedArray.push(array[array.length-i])
    }
    
    const reversedString = reversedArray.join(" ")
    return reversedString
}

console.log(reverseString("hello world here")) //here world hello
console.log(reverseString("My name is Pete and I'm 19yo")) //19yo I'm and Pete is name My
console.log(reverseString("19yo I'm and Pete is name My")) //My name is Pete and I'm 19yo
