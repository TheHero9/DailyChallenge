const divide = (dividend, divisor)=>{

    // Find if we have positive/negative result
    let isTrue = true
    if((dividend<0 && divisor>0) || (dividend>0 && divisor<0)) isTrue = false
  
  

      let count = 0
    // Get the positive numbers
      let positiveDividend = Math.abs(dividend)
      let positiveDivisor = Math.abs(divisor)
  
    //   Add 1 to the count until the dividend is greater than the divisor
      while(positiveDividend>=positiveDivisor){
        positiveDividend -= positiveDivisor
        count++
      }
      

    //   Return the answer with a right sign
      let answer = isTrue ? count : -count
    
      return answer
      
  }
  
  console.log(divide(53, 20)) //2
  console.log(divide(-20, 6)) //-3
  console.log(divide(-93,-12)) //7
  console.log(divide(39, -4)) //-9