//Resursive answer
function factorial(n){
    // Only numbers >0 have factorials
    if(n<0) return "n must be greater than 0"
  
    //Base case
    if(n===0){
      return 1

    //Factorial is the number N multiplied by the factorial
    // of the next number
    } else return factorial(n-1)* n
  }
  
  
  console.log(factorial(4)) //24
  console.log(factorial(15)) //1307674368000
  console.log(factorial(7)) //5040
  console.log(factorial(-2)) // "n must be greater than 0"