var reverse = function(x) {

    // Make the starting number to string and then split it into a new array
    // and reverse it
    let stringX = x.toString().split('').reverse()
    
    // Join the array and make it to a NUMBER
     let result = parseInt(stringX.join(''))
  
//Return the result with the specified sign from the starting number
  return result * Math.sign(x)
  };


console.log(reverse(-220)) //-22
console.log(reverse(3627)) //7263
console.log(reverse(-100)) //-1
console.log(reverse(9380)) //839