function arrayPairSum(array, k) {
    let results = [];
    let helperArray = []
    
    //First ForLoop to hold the current element
    for (let i = 0; i < array.length; i++) {
      let currNumber = array[i];
  
      //Remove the current element from the original array
      let filteredArray = array.filter((e) => e !== currNumber);
  
      //Second ForLoop to find all the possible pairs
      for (let y = 0; y < array.length; y++) {
        let possPairs = filteredArray[y];
  
        //Sum
        let sum = currNumber + possPairs;
        if (sum === k) {
  
          //Define the right pair
          let pair = [currNumber, possPairs];
          pair.sort();
  
          //Make sure, we don'd have the same pairs repeated twice
          helperArray.includes(currNumber && possPairs) 
          ? results.push(pair) 
          : console.log(":)")
  
          helperArray.push(currNumber, possPairs)
        }
      }
    }
  
    return results;
  }
  
  console.log(arrayPairSum([3, 4, 5, 6, 7], 10)); //[[3,7], [4,6]]
  console.log(arrayPairSum([3, 4, 5, 4, 4], 8)); // [[3,5]]
  console.log(arrayPairSum([3, 5, 6, 8], 10)) //[]