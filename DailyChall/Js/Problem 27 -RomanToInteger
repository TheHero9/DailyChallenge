/**
 * @param {string} s
 * @return {number}
 */

// Solution 1
let romanToInt = function(num){
    //Create a "key: value" pair
    const values = new Map()
    values
    .set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000)
  
    // Replace each "complicated element" with an element from the values map
    let simplified = 
    num
    .replace("IV", "IIII").replace("IX", "VIIII")
    .replace("XL", "XXXX").replace("XC", "LXXXX")
    .replace("CD", "CCCC").replace("CM", "DCCCC")
    
    // Answer
    let count = 0
  
    // Add the value for each element 
    for(let i=0; i<simplified.length; i++){
      let element = simplified[i]
      count += values.get(element)
    }
    return count
  }

// Solution 2
var romanToInt2 = function (string) {
  let s = [];
  s = string.split("");

  // Result
  let count = 0;
  for (let i = 0; i < s.length; i++) {

    // Switch statement with cases
    switch (s[i]) {
    // General case
      case "I":
        // Subcase iif the next symbol forms a special case
        switch (s[i + 1]) {
          case "V":
            count += 4;
            // Skip the next element
            i+=1
            break;
          case "X":
            count += 9;
            i+=1
            break;
          default:
            count += 1;
        }
        break;


      case "V":
        count += 5;
        break;
      case "X":
        switch (s[i + 1]) {
          case "L":
            count += 40;
            i+=1
            break;
          case "C":
            count += 90;
            i+=1
            break;
          default:
            count += 10;
        }
        break;
      case "L":
        count += 50;
        break;
      case "C":
        switch (s[i + 1]) {
          case "D":
            count += 400;
            i+=1
            break;
          case "M":
            count += 900;
            i+=1
            break;
          default:
            count += 100;
        }
        break;
      case "D":
        count += 500;
        break;
      case "M":
        count += 1000;
        
        break;
        
      default:
        return false;
    }
  }
  return count;
};

console.log(romanToInt("IV")) //4
console.log(romanToInt("MMMDCCXXIV")) //3724
console.log(romanToInt("MCMXCII")) //1992