// We have a recursive problem. We need to find the pattern.
// Its basically a fibonacci. 


// Define an array with 45 slots
let memo = new Array(45)

let climbStairs = function(n){
// Base case if the value is less than 2 -> return n
  if(n<=2) return n

// Dinamic programming to store the values
  if (memo[n]) return memo[n];

// Add all the new values to the array
  memo[n] = climbStairs(n-1) + climbStairs(n-2);

// Return the answer
  return memo[n]
}


console.log(climbStairs(44)) //1134903170
console.log(climbStairs(5)) //8
console.log(climbStairs(13)) //377
console.log(climbStairs(2)) //2