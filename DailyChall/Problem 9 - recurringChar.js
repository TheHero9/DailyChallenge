// Difficulty: Easy
// This problem was asked by Google.
// Given a string, return the first recurring character in it, or null if there is no recurring character.
// For example, given the string acbbac, return b. Given the string abcdef, return null.


function recurringChar(string){

  //Create a set for the char
  let set = new Set()

  //If a char is recurring, push it into this array
  let result = []

  //Loop the string
  for(let i=0;i<=string.length;i++){
    let element = string[i]

   //If an element is recurring, push it into the array, if not - push it into the set
   if(set.has(element)) result.push(element)
   else set.add(element)
}

  //Return the first recurring char or return "null" if we dont have.
  if(result[0]) return result[0]
  else return null
}


console.log(recurringChar("acbbac")) //b
console.log(recurringChar("acb")) //null
console.log(recurringChar("Hey my")) //y