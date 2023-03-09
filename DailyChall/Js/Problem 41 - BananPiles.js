var minEatingSpeed = function (piles, h) {
    let length = piles.length;
    const sortedPiles = piles.sort((a, b) => a - b);
    let lastElement = sortedPiles[length - 1];
    
    // If H = length of the array => the H will alws be the biggest number
    if (h === length) return lastElement;
  
    let minSumArr = [];
    
    // Loop from the biggest possible number of the array
    for (let i = lastElement; i > 0; i--) {
      let k = i;
      let newArr = [];
        
    //   Loop for each element of the array
      for (let j = 0; j < length; j++) {
        // Get how many times each pile will take 
        let currK = Math.ceil(piles[j] / k);
        newArr.push(currK);
      }
      
    //   Get the sum and push it into a new array
      const sum = newArr.reduce((acc, cur) => acc + cur, 0);
      minSumArr.push(sum);
    }
    
    // Sort the array
    minSumArr.sort((a, b) => b - a);

    // Return the first index of H from the last array
    return minSumArr.indexOf(h) + 1;
  };
  
  console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
  console.log(minEatingSpeed([30, 11, 23, 48], 5)); // 30
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
  console.log(minEatingSpeed([3, 20, 15, 1, 2, 7, 11], 10)); // 10
  console.log(minEatingSpeed([5, 10, 76, 10, 21, 31, 29], 10)); // 29
  