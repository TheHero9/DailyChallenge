// Write a function that accepts an array of random integers and an integer n. 
// Determine the number of times where two integers in the array 
// have the difference of n.
// console.log(integerDifference([1, 1, 5, 6, 9, 16, 27], 4)); //8
// console.log(integerDifference([1, 1, 3, 3], 2)); //6

const integerDifference = function (array, n) {
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
      for (let j = 0; j < array.length; j++) {
        let nextElement = array[j];
  
        let difference = Math.abs(element - nextElement);
  
        difference === n ? count++ : null;
      }
    }
    return count;
  };
  
  console.log(integerDifference([1, 1, 5, 6, 9, 16, 27], 4)); //8
  console.log(integerDifference([1, 1, 3, 3], 2)); //6
  console.log(integerDifference([5, 2, 4, 8], 2)); //2
  