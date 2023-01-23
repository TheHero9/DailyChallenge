// Difficulty: Easy
// This problem was asked by Google.
// Given the head of a singly linked list, swap every two nodes and return its head.
// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.


function switchNumbers(string){
    let array = string.split(" -> ")
    let result = []
    let oddItems = []
  
    //If the string has one extra number
    if(array.length%2){
      oddItems.push(array[array.length-1])
      array.pop()
    }
  
    //For loop to switch the numbers
    for(let i=0;i<array.length; i+=2){
      let a = array[i]
      let b = array[i+1]
      result.push(b,a)
    }
  
    //Add the missing number
    if(oddItems.length === 1){
      result.push(oddItems[0])
    }
    
    //Retrun the joined array
    return result.join(" -> ")
    
  }
  
  console.log(switchNumbers("1 -> 2 -> 3 -> 4 -> 5")) //2 -> 1 -> 4 -> 3 -> 5 
  console.log(switchNumbers("6 -> 2 -> 4 -> 5")) //2 -> 6 -> 5 -> 4 
  