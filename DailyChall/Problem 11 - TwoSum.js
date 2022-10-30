// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Difficulty: Easy

function twoSum(array, integer) {

    //Enter the two matching numbers
    let theTwoNumbers=[]

    //Loop 1
    for (let i = 0; i < array.length; i++) {
      let currentNumber1 = array[i];
  
      //Loop 2
      for (let j = 0; j < array.length; j++) {
        let currentNumber2 = array[j];
  
        //Sum each pair
        let sum = currentNumber1 + currentNumber2;
  
        //Push the pairs into the empty array
        if (sum === integer) {
          theTwoNumbers.push(currentNumber1, currentNumber2)
        }
      }
    }
  
    let result = [theTwoNumbers[0], theTwoNumbers[1]]
  
    //Check if there is a pari and return the answer!
    if(result[0]){
      return result
    } else {
      return "Sorry, try to enter a new number into the array!"
    }
  }
  
  console.log(twoSum([0, 7, 1, 4, 2], 9)); //[7,2]
  console.log(twoSum([1, 9, 1, 8, 2], 17)); //[9,8]
  console.log(twoSum([1, 3, 1, 0, 2], 8)); // "Sorry, try to enter a new number into the array!"
  