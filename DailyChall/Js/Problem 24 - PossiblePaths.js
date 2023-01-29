// Write a function that takes two inputs "n" and "m"
// and outputs the number of the unique paths from the top left
// cotner to the bottom right corner of a "n"x"m" grid.
// Constraints: you can only move down or right 1 unit at a time.

function uniquePaths(n,m){
    if (n===0 || m===0) return "Enter a valid grid"
  
    //Base case
    if(n===1 || m===1){
      return 1
    //Find the sum of the 2 smaller grids
    } else {
      return uniquePaths(n, m-1) + uniquePaths(n-1, m)
    }
  }
  
  console.log(uniquePaths(1,20)) // 1
  console.log(uniquePaths(2,2)) // 2
  console.log(uniquePaths(3,2)) // 3
  console.log(uniquePaths(3,3)) // 6
  console.log(uniquePaths(3,4)) // 20
  console.log(uniquePaths(0,20)) // "Enter a valid grid"