var plusOne = function(digits) {

    // Loop over the array, starting from the last digit
    for(let i = digits.length -1; i>=0; i--){

    // Add one to the current digit
      digits[i]++
    // If the digit is bigger than 9 (Only 10 possible)
    // => Make it to zero
      if(digits[i] > 9){
        digits[i] = 0

    //Else => just return the array and break out of the loop
      } else {
        return digits
      }
    }

    // If the number is with 0's only (aka we haven't returned the array yes)
    // => add 1 to the existing array and return the answer
    digits.unshift(1)
    return digits
    };


console.log(plusOne([1, 2, 3])) //[1, 2, 4]
console.log(plusOne([1, 9])) //[2, 0]
console.log(plusOne([3, 5, 9])) //[3, 6, 0]
console.log(plusOne([9])) //[1, 0]
console.log(plusOne([9, 9, 9, 9])) //[1, 0, 0, 0, 0]
