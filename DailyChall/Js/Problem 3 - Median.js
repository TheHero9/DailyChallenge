// Difficulty: Easy
// This problem was asked by Microsoft.
// Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list.
// Recall that the median of an even-numbered list is the average of the two middle numbers.



function median(arr) {
    let newArr = [];
    let result;
  
    for (let i = 1; i <= arr.length; i++) {
      newArr = arr.slice(0, i);
  
      newArr.sort(function (a, b) {
        return a - b;
      });
  
      //Find if the number is even or odd:
      if (newArr.length % 2 === 0) {
        let to = newArr.length / 2;
        let from = to - 1;
        result = (newArr[to] + newArr[from]) / 2;
        
  
      } else {
        let indexNumber = newArr.length / 2 - 0.5;
        result = newArr[indexNumber];
        
      }
  
      return result 
    }
  }
  
  console.log(median([2, 1, 5, 7, 2]));
