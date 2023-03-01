var getRow = function (numsRow) {
    // Array with the result
    let result = [[1]];
  
    // Initial length of the array
    let length = result.length;
  
    // Last element of the results array
    let lastArray = result[length - 1];
  
    // For loop 1. for individual arrays
    for (let i = 2; i <= numsRow; i++) {
      // Make the array with a length of i and fill it with 1's
      let newArr = Array(i).fill(1);
  
      // For loop 2. for individual elements of the array
      for (let j = 1; j < newArr.length; j++) {
  
        // If the element is first/last => keep the 1
        if (j !== newArr.length - 1 && j !== 0) {
          // Else replace the item from the newArr with =>
          // the previous two items {j)} of the last array
          newArr[j] = lastArray[j - 1] + lastArray[j];
        }
      }
  
      // Push the array into the big with the results
      result.push(newArr);
  
      // Reasign the last array
      lastArray = newArr;
    }
  
    // Return the result
    return result;
  };
  
  console.log(getRow(8)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1],[1,7,21,35,35,21,7,1]]
  console.log(getRow(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
  console.log(getRow(0)); // [[1]]