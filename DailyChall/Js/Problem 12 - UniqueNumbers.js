//  This problem was asked by Google. Given an array of elements,
// return the length of the longest subarray where all its elements 
// are distinct. For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], 
// return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1].


function returnNum(arr){

    //Create set
    let uniqueNumbers = new Set()
  
    //Add each intem into the set
    arr.forEach(element => {
      uniqueNumbers.add(element)
    });
  
    return uniqueNumbers.size
  
  }
  
  console.log(returnNum([5, 1, 3, 5, 2, 3, 4, 1]))//5
  console.log(returnNum([1, 1,0, 6, 8, 3, 9]))//6
  
  